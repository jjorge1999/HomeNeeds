import { Injectable, signal, computed, OnDestroy, inject, effect } from '@angular/core';
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
  where,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { OverviewTask } from './overview.model';
import { UserService } from '../users/user.service';

@Injectable({ providedIn: 'root' })
export class OverviewService implements OnDestroy {
  private userService = inject(UserService);
  private firestore: Firestore;
  private TASKS_COLLECTION = 'overview_tasks';

  private tasksSignal = signal<OverviewTask[]>([]);
  readonly tasks = computed(() => this.tasksSignal());

  private unsubTasks: Unsubscribe | null = null;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.firestore = getFirestore(app);

    // React to user changes - reinitialize listeners when user changes
    effect(() => {
      const currentUser = this.userService.currentUser();
      this.cleanupSubscription();

      if (currentUser) {
        this.initRealtimeData(currentUser.userId);
      } else {
        // Clear data when no user is logged in
        this.tasksSignal.set([]);
      }
    });
  }

  private getCurrentUserId(): string {
    const user = this.userService.currentUser();
    return user?.userId || '';
  }

  private cleanupSubscription(): void {
    if (this.unsubTasks) {
      this.unsubTasks();
      this.unsubTasks = null;
    }
  }

  private initRealtimeData(userId: string): void {
    if (!userId) return;

    // Query without orderBy to avoid index requirement
    // Sorting is done client-side
    const q = query(
      collection(this.firestore, this.TASKS_COLLECTION),
      where('userId', '==', userId)
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
      // Sort client-side by createdAt descending
      items.sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime());
      this.tasksSignal.set(items);
    });
  }

  async createTask(task: Omit<OverviewTask, 'id' | 'createdAt' | 'userId'>): Promise<void> {
    const userId = this.getCurrentUserId();
    if (!userId) throw new Error('User must be logged in to create tasks');

    const id = `task_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    await setDoc(doc(this.firestore, this.TASKS_COLLECTION, id), {
      ...task,
      id,
      userId,
      createdAt: new Date(),
    });
  }

  async updateTask(
    id: string,
    updates: Partial<Omit<OverviewTask, 'id' | 'userId'>>
  ): Promise<void> {
    await updateDoc(doc(this.firestore, this.TASKS_COLLECTION, id), updates);
  }

  async deleteTask(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, this.TASKS_COLLECTION, id));
  }

  ngOnDestroy() {
    this.cleanupSubscription();
  }
}
