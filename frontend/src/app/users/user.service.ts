import { Injectable, inject, signal } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  orderBy,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  serverTimestamp,
} from '@angular/fire/firestore';
import { User } from './user.model';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');

  users = signal<User[]>([]);
  currentUser = signal<User | null>(null);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  constructor() {
    this.subscribeToUsers();
    this.restoreSession();
  }

  private subscribeToUsers() {
    const q = query(this.usersCollection, orderBy('name'));
    onSnapshot(
      q,
      (snapshot) => {
        const usersData = snapshot.docs.map((doc) => {
          const data = doc.data() as any;
          return {
            id: doc.id,
            ...data,
            lastActive: data.lastActive?.toDate ? data.lastActive.toDate() : data.lastActive,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
          } as User;
        });
        this.users.set(usersData);
        this.updateCurrentUserReference(usersData);
        this.loading.set(false);
      },
      (err) => {
        console.error('Error fetching users', err);
        this.error.set(err.message);
        this.loading.set(false);
      }
    );
  }

  private restoreSession() {
    const id = localStorage.getItem('currentUserId');
    if (id && this.users().length > 0) {
      this.updateCurrentUserReference(this.users());
    }
  }

  private updateCurrentUserReference(users: User[]) {
    const id = localStorage.getItem('currentUserId');
    if (id) {
      const user = users.find((u) => u.id === id);
      if (user) {
        this.currentUser.set(user);
        // Ensure status is active on restore if valid
        if (user.status !== 'active') {
          this.updateUser(user.id, { status: 'active', lastActive: serverTimestamp() });
        }
      }
    }
  }

  async login(user: User) {
    localStorage.setItem('currentUserId', user.id);
    this.currentUser.set(user);
    await this.updateUser(user.id, { status: 'active', lastActive: serverTimestamp() });
  }

  async logout() {
    const user = this.currentUser();
    if (user) {
      await this.updateUser(user.id, { status: 'offline', lastActive: serverTimestamp() });
    }
    localStorage.removeItem('currentUserId');
    this.currentUser.set(null);
  }

  async createUser(user: Omit<User, 'id' | 'createdAt' | 'lastActive'>) {
    await addDoc(this.usersCollection, {
      ...user,
      status: user.status || 'pending',
      lastActive: serverTimestamp(),
      createdAt: serverTimestamp(),
    });
  }

  async updateUser(id: string, data: Partial<User>) {
    await updateDoc(doc(this.firestore, 'users', id), data);
  }

  async deleteUser(id: string) {
    await deleteDoc(doc(this.firestore, 'users', id));
  }
}
