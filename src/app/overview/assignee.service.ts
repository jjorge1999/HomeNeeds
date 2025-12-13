import { Injectable, inject, signal, computed, effect, OnDestroy } from '@angular/core';
import {
  Firestore,
  collection,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  orderBy,
  where,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Assignee } from './overview.model';
import { UserService } from '../users/user.service';

@Injectable({
  providedIn: 'root',
})
export class AssigneeService implements OnDestroy {
  private firestore = inject(Firestore);
  private userService = inject(UserService);
  private COLLECTION = 'assignees';

  private assigneesSignal = signal<Assignee[]>([]);
  readonly assignees = computed(() => this.assigneesSignal());

  private unsubAssignees: Unsubscribe | null = null;

  constructor() {
    // React to user changes - reinitialize listeners when user changes
    effect(() => {
      const currentUser = this.userService.currentUser();
      this.cleanupSubscription();

      if (currentUser) {
        this.subscribeToAssignees(currentUser.userId);
      } else {
        // Clear data when no user is logged in
        this.assigneesSignal.set([]);
      }
    });
  }

  private getCurrentUserId(): string {
    const user = this.userService.currentUser();
    return user?.userId || '';
  }

  private cleanupSubscription(): void {
    if (this.unsubAssignees) {
      this.unsubAssignees();
      this.unsubAssignees = null;
    }
  }

  private subscribeToAssignees(userId: string) {
    if (!userId) return;

    // Query without orderBy to avoid index requirement
    // Sorting is done client-side
    const q = query(collection(this.firestore, this.COLLECTION), where('userId', '==', userId));

    this.unsubAssignees = onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Assignee[];
        // Sort client-side by name
        items.sort((a, b) => a.name.localeCompare(b.name));
        this.assigneesSignal.set(items);
      },
      (error) => {
        console.error('Error fetching assignees:', error);
      }
    );
  }

  async createAssignee(name: string, color: string) {
    const userId = this.getCurrentUserId();
    if (!userId) throw new Error('User must be logged in to create assignees');

    const initial = name.charAt(0).toUpperCase();
    await addDoc(collection(this.firestore, this.COLLECTION), {
      name,
      color,
      initial,
      userId,
    });
  }

  async updateAssignee(id: string, data: Partial<Omit<Assignee, 'id' | 'userId'>>) {
    if (data.name) {
      // Update initial if specific name is provided
      (data as any).initial = data.name.charAt(0).toUpperCase();
    }
    await updateDoc(doc(this.firestore, this.COLLECTION, id), data);
  }

  async deleteAssignee(id: string) {
    await deleteDoc(doc(this.firestore, this.COLLECTION, id));
  }

  getAssignee(id: string) {
    return this.assigneesSignal().find((a) => a.id === id);
  }

  ngOnDestroy() {
    this.cleanupSubscription();
  }
}
