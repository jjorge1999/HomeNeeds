import { Injectable, signal, computed, OnDestroy } from '@angular/core';
import {
  getFirestore,
  collection,
  doc,
  setDoc,
  deleteDoc,
  updateDoc,
  onSnapshot,
  query,
  orderBy,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { OverviewTask } from './overview.model';

@Injectable({ providedIn: 'root' })
export class OverviewService implements OnDestroy {
  private firestore: Firestore;
  private TASKS_COLLECTION = 'overview_tasks';

  private tasksSignal = signal<OverviewTask[]>([]);
  readonly tasks = computed(() => this.tasksSignal());

  private unsubTasks: Unsubscribe | null = null;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.firestore = getFirestore(app);
    this.initRealtimeData();
  }

  private initRealtimeData(): void {
    const q = query(
      collection(this.firestore, this.TASKS_COLLECTION),
      orderBy('createdAt', 'desc')
    );
    this.unsubTasks = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((doc) => {
        const data = doc.data();
        // Handle Firestore Timestamps
        const dueDate =
          data['dueDate'] && typeof data['dueDate'].toDate === 'function'
            ? data['dueDate'].toDate()
            : data['dueDate']
            ? new Date(data['dueDate'])
            : null;

        const createdAt =
          data['createdAt'] && typeof data['createdAt'].toDate === 'function'
            ? data['createdAt'].toDate()
            : new Date();

        return {
          ...data,
          dueDate,
          createdAt,
        } as OverviewTask;
      });
      this.tasksSignal.set(items);
    });
  }

  async createTask(task: Omit<OverviewTask, 'id' | 'createdAt'>): Promise<void> {
    const id = `task_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    await setDoc(doc(this.firestore, this.TASKS_COLLECTION, id), {
      ...task,
      id,
      createdAt: new Date(),
    });
  }

  async updateTask(id: string, updates: Partial<OverviewTask>): Promise<void> {
    await updateDoc(doc(this.firestore, this.TASKS_COLLECTION, id), updates);
  }

  async deleteTask(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, this.TASKS_COLLECTION, id));
  }

  ngOnDestroy() {
    if (this.unsubTasks) this.unsubTasks();
  }
}
