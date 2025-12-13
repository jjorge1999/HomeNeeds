import { Injectable, inject, signal, computed } from '@angular/core';
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
} from '@angular/fire/firestore';
import { Assignee } from './overview.model';

@Injectable({
  providedIn: 'root',
})
export class AssigneeService {
  private firestore = inject(Firestore);
  private COLLECTION = 'assignees';

  private assigneesSignal = signal<Assignee[]>([]);
  readonly assignees = computed(() => this.assigneesSignal());

  constructor() {
    this.subscribeToAssignees();
  }

  private subscribeToAssignees() {
    const q = query(collection(this.firestore, this.COLLECTION), orderBy('name'));
    onSnapshot(
      q,
      (snapshot) => {
        const items = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Assignee[];
        this.assigneesSignal.set(items);
      },
      (error) => {
        console.error('Error fetching assignees:', error);
      }
    );
  }

  async createAssignee(name: string, color: string) {
    const initial = name.charAt(0).toUpperCase();
    await addDoc(collection(this.firestore, this.COLLECTION), {
      name,
      color,
      initial,
    });
  }

  async updateAssignee(id: string, data: Partial<Assignee>) {
    if (data.name) {
      // Update initial if specific name is provided
      // Use type assertion logic if needed or just set it
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
}
