import { Injectable, inject, signal, effect } from '@angular/core';
import {
  Firestore,
  collection,
  query,
  orderBy,
  where,
  onSnapshot,
  addDoc,
  updateDoc,
  deleteDoc,
  doc,
  getDoc,
  serverTimestamp,
  Unsubscribe,
} from '@angular/fire/firestore';
import { User } from './user.model';
import { Observable, from, of, Subject, BehaviorSubject, throwError } from 'rxjs';
import { map, tap, catchError, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private firestore = inject(Firestore);
  private usersCollection = collection(this.firestore, 'users');
  private unsubUsers: Unsubscribe | null = null;
  private unsubAllUsers: Unsubscribe | null = null;

  // Signals for reactive state
  users = signal<User[]>([]); // Filtered users (created by current user)
  allUsers = signal<User[]>([]); // All users (for login screen)
  currentUser = signal<User | null>(null);
  loading = signal<boolean>(true);
  error = signal<string | null>(null);

  // Observable streams for subscribers
  private usersSubject = new BehaviorSubject<User[]>([]);
  readonly users$ = this.usersSubject.asObservable();

  // Track migration status
  private migrationInProgress = signal<boolean>(false);

  constructor() {
    // Subscribe to ALL users for login screen
    this.subscribeToAllUsers();
    this.restoreSession();
    // Subscribe to filtered users when currentUser changes
    effect(() => {
      const user = this.currentUser();
      this.subscribeToUsers(user?.userId);
    });
  }

  /**
   * Subscribe to ALL users - used for login screen
   */
  private subscribeToAllUsers(): void {
    const q = query(this.usersCollection, orderBy('name'));
    this.unsubAllUsers = onSnapshot(
      q,
      (snapshot) => {
        const usersData = snapshot.docs.map((d) => {
          const data = d.data() as any;
          return {
            id: d.id,
            ...data,
            userId: data.userId || null,
            lastActive: data.lastActive?.toDate ? data.lastActive.toDate() : data.lastActive,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
          } as User;
        });
        this.allUsers.set(usersData);

        // Auto-migrate users without userId
        this.migrateUsersWithoutUserId(usersData).subscribe();
      },
      (err) => {
        console.error('Error fetching all users', err);
      }
    );
  }

  private subscribeToUsers(creatorUserId?: string): void {
    // Cleanup previous subscription
    if (this.unsubUsers) {
      this.unsubUsers();
      this.unsubUsers = null;
    }

    // If no user logged in, show empty list
    if (!creatorUserId) {
      this.users.set([]);
      this.usersSubject.next([]);
      this.loading.set(false);
      return;
    }

    // Query users created by current user OR the current user themselves
    const q = query(this.usersCollection, where('createdBy', '==', creatorUserId), orderBy('name'));

    this.unsubUsers = onSnapshot(
      q,
      (snapshot) => {
        const usersData = snapshot.docs.map((doc) => {
          const data = doc.data() as any;
          return {
            id: doc.id,
            ...data,
            // Ensure userId exists (for backwards compatibility)
            userId: data.userId || null,
            lastActive: data.lastActive?.toDate ? data.lastActive.toDate() : data.lastActive,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
          } as User;
        });

        // Also include the current user in the list
        const currentUser = this.currentUser();
        if (currentUser && !usersData.find((u) => u.id === currentUser.id)) {
          usersData.unshift(currentUser);
        }

        // Sort by name
        usersData.sort((a, b) => a.name.localeCompare(b.name));

        this.users.set(usersData);
        this.usersSubject.next(usersData);
        this.loading.set(false);

        // Auto-migrate users without userId
        this.migrateUsersWithoutUserId(usersData).subscribe();
      },
      (err) => {
        console.error('Error fetching users', err);
        this.error.set(err.message);
        this.loading.set(false);
      }
    );
  }

  /**
   * Automatically migrates existing users that don't have a userId field.
   * This runs silently in the background when users are loaded.
   */
  private migrateUsersWithoutUserId(users: User[]): Observable<void> {
    // Prevent multiple migrations running at once
    if (this.migrationInProgress()) {
      return of(undefined);
    }

    const usersNeedingMigration = users.filter((user) => !user.userId);

    if (usersNeedingMigration.length === 0) {
      return of(undefined);
    }

    this.migrationInProgress.set(true);
    console.log(`🔄 Migrating ${usersNeedingMigration.length} user(s) without userId...`);

    const migrations$ = usersNeedingMigration.map((user) => {
      const newUserId = this.generateUserId();
      console.log(`  → Migrating user "${user.name}" (${user.id}) → userId: ${newUserId}`);
      return this.updateUser$(user.id, { userId: newUserId } as any).pipe(
        map(() => ({ name: user.name, userId: newUserId }))
      );
    });

    return from(Promise.all(migrations$.map((m$) => m$.toPromise()))).pipe(
      tap((results) => {
        console.log(`✅ Successfully migrated ${results.length} user(s):`, results);
      }),
      catchError((error) => {
        console.error('❌ Error during user migration:', error);
        return of(undefined);
      }),
      tap(() => {
        this.migrationInProgress.set(false);
      }),
      map(() => undefined)
    );
  }

  private async restoreSession(): Promise<void> {
    const id = localStorage.getItem('currentUserId');
    if (!id) {
      this.loading.set(false);
      return;
    }

    try {
      // Fetch user directly from Firestore
      const userDoc = await getDoc(doc(this.firestore, 'users', id));
      if (userDoc.exists()) {
        const data = userDoc.data() as any;
        const user: User = {
          id: userDoc.id,
          ...data,
          userId: data.userId || null,
          lastActive: data.lastActive?.toDate ? data.lastActive.toDate() : data.lastActive,
          createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
        };
        this.currentUser.set(user);

        // Update status to active
        if (user.status !== 'active') {
          this.updateUser$(user.id, {
            status: 'active',
            lastActive: serverTimestamp(),
          }).subscribe();
        }
      } else {
        // User not found, clear session
        localStorage.removeItem('currentUserId');
        this.loading.set(false);
      }
    } catch (error) {
      console.error('Error restoring session:', error);
      localStorage.removeItem('currentUserId');
      this.loading.set(false);
    }
  }

  private updateCurrentUserReference(users: User[]): void {
    const id = localStorage.getItem('currentUserId');
    if (id) {
      const user = users.find((u) => u.id === id);
      if (user) {
        this.currentUser.set(user);
        // Ensure status is active on restore if valid
        if (user.status !== 'active') {
          this.updateUser$(user.id, {
            status: 'active',
            lastActive: serverTimestamp(),
          }).subscribe();
        }
      }
    }
  }

  /**
   * Login user - Observable based
   */
  login$(user: User): Observable<void> {
    // Ensure user has userId before login
    const ensureUserId$ = !user.userId
      ? this.updateUser$(user.id, { userId: this.generateUserId() } as any).pipe(
          tap(() => (user = { ...user, userId: this.generateUserId() }))
        )
      : of(undefined);

    return ensureUserId$.pipe(
      switchMap(() => {
        localStorage.setItem('currentUserId', user.id);
        this.currentUser.set(user);
        return this.updateUser$(user.id, { status: 'active', lastActive: serverTimestamp() });
      })
    );
  }

  /**
   * Legacy Promise-based login
   * @deprecated Use login$() with subscribe() instead
   */
  async login(user: User): Promise<void> {
    if (!user.userId) {
      const newUserId = this.generateUserId();
      await this.updateUser(user.id, { userId: newUserId } as any);
      user = { ...user, userId: newUserId };
    }

    localStorage.setItem('currentUserId', user.id);
    this.currentUser.set(user);
    await this.updateUser(user.id, { status: 'active', lastActive: serverTimestamp() });
  }

  /**
   * Logout user - Observable based
   */
  logout$(): Observable<void> {
    const user = this.currentUser();
    if (user) {
      return this.updateUser$(user.id, { status: 'offline', lastActive: serverTimestamp() }).pipe(
        tap(() => {
          localStorage.removeItem('currentUserId');
          this.currentUser.set(null);
        })
      );
    }
    localStorage.removeItem('currentUserId');
    this.currentUser.set(null);
    return of(undefined);
  }

  /**
   * Legacy Promise-based logout
   * @deprecated Use logout$() with subscribe() instead
   */
  async logout(): Promise<void> {
    const user = this.currentUser();
    if (user) {
      await this.updateUser(user.id, { status: 'offline', lastActive: serverTimestamp() });
    }
    localStorage.removeItem('currentUserId');
    this.currentUser.set(null);
  }

  /**
   * Create user - Observable based
   */
  createUser$(
    user: Omit<User, 'id' | 'userId' | 'createdAt' | 'lastActive' | 'createdBy'>
  ): Observable<void> {
    const userId = this.generateUserId();
    const currentUserId = this.currentUser()?.userId;

    return from(
      addDoc(this.usersCollection, {
        ...user,
        userId,
        createdBy: currentUserId, // Track who created this user
        status: user.status || 'pending',
        lastActive: serverTimestamp(),
        createdAt: serverTimestamp(),
      })
    ).pipe(map(() => undefined));
  }

  /**
   * Legacy Promise-based createUser
   * @deprecated Use createUser$() with subscribe() instead
   */
  async createUser(
    user: Omit<User, 'id' | 'userId' | 'createdAt' | 'lastActive' | 'createdBy'>
  ): Promise<void> {
    const userId = this.generateUserId();
    const currentUserId = this.currentUser()?.userId;

    await addDoc(this.usersCollection, {
      ...user,
      userId,
      createdBy: currentUserId, // Track who created this user
      status: user.status || 'pending',
      lastActive: serverTimestamp(),
      createdAt: serverTimestamp(),
    });
  }

  /**
   * Generates a unique userId for data isolation
   * Format: user_<timestamp>_<random>
   */
  private generateUserId(): string {
    const timestamp = Date.now().toString(36);
    const random = Math.random().toString(36).substring(2, 8);
    return `user_${timestamp}_${random}`;
  }

  /**
   * Update user - Observable based
   */
  updateUser$(id: string, data: Partial<User>): Observable<void> {
    return from(updateDoc(doc(this.firestore, 'users', id), data));
  }

  /**
   * Legacy Promise-based updateUser
   * @deprecated Use updateUser$() with subscribe() instead
   */
  async updateUser(id: string, data: Partial<User>): Promise<void> {
    await updateDoc(doc(this.firestore, 'users', id), data);
  }

  /**
   * Delete user - Observable based
   */
  deleteUser$(id: string): Observable<void> {
    return from(deleteDoc(doc(this.firestore, 'users', id)));
  }

  /**
   * Legacy Promise-based deleteUser
   * @deprecated Use deleteUser$() with subscribe() instead
   */
  async deleteUser(id: string): Promise<void> {
    await deleteDoc(doc(this.firestore, 'users', id));
  }

  /**
   * Manually trigger migration for all users without userId - Observable based
   */
  manualMigrateAllUsers$(): Observable<{ migrated: number; errors: number }> {
    const users = this.users();
    const usersNeedingMigration = users.filter((user) => !user.userId);

    if (usersNeedingMigration.length === 0) {
      console.log('✅ All users already have userId assigned.');
      return of({ migrated: 0, errors: 0 });
    }

    let migrated = 0;
    let errors = 0;

    const migrations$ = usersNeedingMigration.map((user) => {
      const newUserId = this.generateUserId();
      return this.updateUser$(user.id, { userId: newUserId } as any).pipe(
        tap(() => {
          console.log(`✅ Migrated user "${user.name}" → ${newUserId}`);
          migrated++;
        }),
        catchError((error) => {
          console.error(`❌ Failed to migrate user "${user.name}":`, error);
          errors++;
          return of(undefined);
        })
      );
    });

    return from(Promise.all(migrations$.map((m$) => m$.toPromise()))).pipe(
      map(() => ({ migrated, errors }))
    );
  }

  /**
   * Legacy Promise-based manualMigrateAllUsers
   * @deprecated Use manualMigrateAllUsers$() with subscribe() instead
   */
  async manualMigrateAllUsers(): Promise<{ migrated: number; errors: number }> {
    const users = this.users();
    const usersNeedingMigration = users.filter((user) => !user.userId);

    if (usersNeedingMigration.length === 0) {
      console.log('✅ All users already have userId assigned.');
      return { migrated: 0, errors: 0 };
    }

    let migrated = 0;
    let errors = 0;

    for (const user of usersNeedingMigration) {
      try {
        const newUserId = this.generateUserId();
        await this.updateUser(user.id, { userId: newUserId } as any);
        console.log(`✅ Migrated user "${user.name}" → ${newUserId}`);
        migrated++;
      } catch (error) {
        console.error(`❌ Failed to migrate user "${user.name}":`, error);
        errors++;
      }
    }

    return { migrated, errors };
  }

  /**
   * Get count of users needing migration
   */
  getUsersNeedingMigration(): User[] {
    return this.users().filter((user) => !user.userId);
  }
}
