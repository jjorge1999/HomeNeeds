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
  where,
  Unsubscribe,
} from '@angular/fire/firestore';
import { Assignee } from './overview.model';
import { UserService } from '../users/user.service';
import { Observable, from, of, BehaviorSubject, throwError } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class AssigneeService implements OnDestroy {
  private firestore = inject(Firestore);
  private userService = inject(UserService);
  private COLLECTION = 'assignees';

  private assigneesSignal = signal<Assignee[]>([]);
  readonly assignees = computed(() => this.assigneesSignal());

  // Observable stream for subscribers
  private assigneesSubject = new BehaviorSubject<Assignee[]>([]);
  readonly assignees$ = this.assigneesSubject.asObservable();

  private unsubAssignees: Unsubscribe | null = null;

  constructor() {
    // React to user changes - reinitialize listeners when user changes
    effect(() => {
      const currentUser = this.userService.currentUser();
      this.cleanupSubscription();

      // Only load data if user is logged in AND has a valid userId
      if (currentUser && currentUser.userId) {
        console.log('👥 Loading assignees for user:', currentUser.userId);
        this.subscribeToAssignees(currentUser.userId);
      } else {
        // Clear data when no user is logged in - DO NOT query Firestore
        console.log('🔒 No user logged in - clearing assignee data');
        this.assigneesSignal.set([]);
        this.assigneesSubject.next([]);
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

  private subscribeToAssignees(userId: string): void {
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
        this.assigneesSubject.next(items);
      },
      (error) => {
        console.error('Error fetching assignees:', error);
      }
    );
  }

  /**
   * Create assignee - Observable based
   */
  createAssignee$(name: string, color: string): Observable<string> {
    const userId = this.getCurrentUserId();
    if (!userId) {
      return throwError(() => new Error('User must be logged in to create assignees'));
    }

    const initial = name.charAt(0).toUpperCase();
    return from(
      addDoc(collection(this.firestore, this.COLLECTION), {
        name,
        color,
        initial,
        userId,
      })
    ).pipe(map((docRef) => docRef.id));
  }

  /**
   * Legacy Promise-based createAssignee
   * @deprecated Use createAssignee$() with subscribe() instead
   */
  async createAssignee(name: string, color: string): Promise<void> {
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

  /**
   * Update assignee - Observable based
   */
  updateAssignee$(id: string, data: Partial<Omit<Assignee, 'id' | 'userId'>>): Observable<void> {
    const updateData = { ...data } as any;
    if (data.name) {
      // Update initial if specific name is provided
      updateData.initial = data.name.charAt(0).toUpperCase();
    }
    return from(updateDoc(doc(this.firestore, this.COLLECTION, id), updateData));
  }

  /**
   * Legacy Promise-based updateAssignee
   * @deprecated Use updateAssignee$() with subscribe() instead
   */
  async updateAssignee(id: string, data: Partial<Omit<Assignee, 'id' | 'userId'>>): Promise<void> {
    if (data.name) {
      // Update initial if specific name is provided
      (data as any).initial = data.name.charAt(0).toUpperCase();
    }
    await updateDoc(doc(this.firestore, this.COLLECTION, id), data);
  }

  /**
   * Delete assignee - Observable based
   */
  deleteAssignee$(id: string): Observable<void> {
    return from(deleteDoc(doc(this.firestore, this.COLLECTION, id)));
  }

  /**
   * Legacy Promise-based deleteAssignee
   * @deprecated Use deleteAssignee$() with subscribe() instead
   */
  async deleteAssignee(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, this.COLLECTION, id));
  }

  getAssignee(id: string): Assignee | undefined {
    return this.assigneesSignal().find((a) => a.id === id);
  }

  ngOnDestroy(): void {
    this.cleanupSubscription();
  }
}
