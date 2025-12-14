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
  where,
  Firestore,
  Unsubscribe,
} from 'firebase/firestore';
import { initializeApp } from 'firebase/app';
import { environment } from '../../environments/environment';
import { OverviewTask } from './overview.model';
import { AssigneeService } from './assignee.service';
import { UserService } from '../users/user.service';
import {
  interval,
  Subscription,
  Observable,
  from,
  of,
  BehaviorSubject,
  throwError,
  forkJoin,
} from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class OverviewService implements OnDestroy {
  private userService = inject(UserService);
  private assigneeService = inject(AssigneeService);
  private firestore: Firestore;
  private TASKS_COLLECTION = 'overview_tasks';

  private tasksSignal = signal<OverviewTask[]>([]);
  readonly tasks = computed(() => this.tasksSignal());

  // Observable stream for subscribers
  private tasksSubject = new BehaviorSubject<OverviewTask[]>([]);
  readonly tasks$ = this.tasksSubject.asObservable();

  private unsubTasks: Unsubscribe | null = null;
  private rewardIntervalSub: Subscription | null = null;

  constructor() {
    const app = initializeApp(environment.firebase);
    this.firestore = getFirestore(app);

    // React to user changes - reinitialize listeners when user changes
    effect(() => {
      const currentUser = this.userService.currentUser();
      this.cleanupSubscription();

      // Only load data if user is logged in AND has a valid userId
      if (currentUser && currentUser.userId) {
        console.log('📋 Loading tasks for user:', currentUser.userId);
        this.initRealtimeData(currentUser.userId);
        this.startRewardProcessor();
      } else {
        // Clear data when no user is logged in - DO NOT query Firestore
        console.log('🔒 No user logged in - clearing task data');
        this.tasksSignal.set([]);
        this.tasksSubject.next([]);
        this.stopRewardProcessor();
      }
    });
  }

  private startRewardProcessor(): void {
    this.stopRewardProcessor();
    // Check every 60 seconds
    this.rewardIntervalSub = interval(60000).subscribe(() => {
      this.processPendingRewards();
    });
  }

  private stopRewardProcessor(): void {
    if (this.rewardIntervalSub) {
      this.rewardIntervalSub.unsubscribe();
      this.rewardIntervalSub = null;
    }
  }

  /**
   * Process tasks that are completed but not yet rewarded
   * Reward is given if completion was > 1 hour ago
   */
  private processPendingRewards(): void {
    const tasks = this.tasksSignal();
    const now = Date.now();
    const ONE_HOUR = 60 * 60 * 1000;

    const pendingRewards = tasks.filter((t) => {
      if (!t.isCompleted || !t.assigneeId || t.pointsAwarded) return false;
      if (!t.completedAt) return false; // Should have completedAt if completed

      const completedTime =
        t.completedAt instanceof Date ? t.completedAt.getTime() : new Date(t.completedAt).getTime();
      return now - completedTime >= ONE_HOUR;
    });

    if (pendingRewards.length > 0) {
      console.log(`🏆 Found ${pendingRewards.length} tasks ready for rewarding`);

      pendingRewards.forEach((task) => {
        if (!task.assigneeId) return;

        // 1. Award point to assignee
        this.assigneeService.incrementPoints$(task.assigneeId, 1).subscribe({
          next: () => {
            console.log(`✅ Awarded point to assignee ${task.assigneeId} for task ${task.id}`);
            // 2. Mark task as rewarded
            this.updateTask$(task.id, { pointsAwarded: true }).subscribe();
          },
          error: (err) => console.error('Error awarding points:', err),
        });
      });
    }
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

        const completedAt =
          data['completedAt'] && typeof data['completedAt'].toDate === 'function'
            ? data['completedAt'].toDate()
            : data['completedAt']
            ? new Date(data['completedAt'])
            : undefined;

        return {
          ...data,
          dueDate,
          createdAt,
          completedAt,
          order: data['order'] ?? Date.now(), // Default order for old tasks
        } as OverviewTask;
      });
      // Sort client-side by order (ascending - lower order first)
      items.sort((a, b) => (a.order ?? 0) - (b.order ?? 0));
      this.tasksSignal.set(items);
      this.tasksSubject.next(items);

      // Check for rewards immediately whenever data updates (e.g. on load)
      // This ensures we don't just wait for the timer if the time has already passed
      this.processPendingRewards();
    });
  }

  /**
   * Create task - Observable based
   */
  createTask$(
    task: Omit<OverviewTask, 'id' | 'createdAt' | 'userId' | 'order'>
  ): Observable<string> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError(() => new Error('User must be logged in to create tasks'));
    }

    // Get max order for this category to place new task at the end
    const categoryTasks = this.tasksSignal().filter((t) => t.category === task.category);
    const maxOrder =
      categoryTasks.length > 0 ? Math.max(...categoryTasks.map((t) => t.order ?? 0)) : 0;

    const id = `task_${Date.now()}_${Math.random().toString(36).substr(2, 5)}`;
    return from(
      setDoc(doc(this.firestore, this.TASKS_COLLECTION, id), {
        ...task,
        id,
        userId,
        order: maxOrder + 1000, // Use 1000 increments for easier reordering
        createdAt: new Date(),
        pointsAwarded: false, // Initialize
        completedAt: null,
      })
    ).pipe(map(() => id));
  }

  /**
   * Update task - Observable based
   */
  updateTask$(id: string, updates: Partial<Omit<OverviewTask, 'id' | 'userId'>>): Observable<void> {
    // If completion status changed, handle completedAt
    const updateData = { ...updates };

    if (updates.isCompleted === true) {
      updateData.completedAt = new Date();
    } else if (updates.isCompleted === false) {
      updateData.completedAt = null; // Reset if uncompleted
      updateData.pointsAwarded = false; // Reset reward status if uncompleted
    }

    return from(updateDoc(doc(this.firestore, this.TASKS_COLLECTION, id), updateData));
  }

  /**
   * Delete task - Observable based
   */
  deleteTask$(id: string): Observable<void> {
    return from(deleteDoc(doc(this.firestore, this.TASKS_COLLECTION, id)));
  }

  ngOnDestroy(): void {
    this.cleanupSubscription();
    this.stopRewardProcessor();
  }

  /**
   * Reorder tasks within a category - Observable based
   * @param tasks Array of tasks in their new order
   */
  reorderTasks$(tasks: OverviewTask[]): Observable<void> {
    const updates$ = tasks.map((task, index) => this.updateTask$(task.id, { order: index * 1000 }));
    return forkJoin(updates$).pipe(map(() => undefined));
  }
}
