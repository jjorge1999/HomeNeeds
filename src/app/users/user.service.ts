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

  // Track migration status
  private migrationInProgress = signal<boolean>(false);

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
            // Ensure userId exists (for backwards compatibility)
            userId: data.userId || null,
            lastActive: data.lastActive?.toDate ? data.lastActive.toDate() : data.lastActive,
            createdAt: data.createdAt?.toDate ? data.createdAt.toDate() : data.createdAt,
          } as User;
        });
        this.users.set(usersData);
        this.updateCurrentUserReference(usersData);
        this.loading.set(false);

        // Auto-migrate users without userId
        this.migrateUsersWithoutUserId(usersData);
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
  private async migrateUsersWithoutUserId(users: User[]): Promise<void> {
    // Prevent multiple migrations running at once
    if (this.migrationInProgress()) return;

    const usersNeedingMigration = users.filter((user) => !user.userId);

    if (usersNeedingMigration.length === 0) return;

    this.migrationInProgress.set(true);
    console.log(`🔄 Migrating ${usersNeedingMigration.length} user(s) without userId...`);

    try {
      const migrationPromises = usersNeedingMigration.map(async (user) => {
        const newUserId = this.generateUserId();
        console.log(`  → Migrating user "${user.name}" (${user.id}) → userId: ${newUserId}`);
        await this.updateUser(user.id, { userId: newUserId } as any);
        return { name: user.name, userId: newUserId };
      });

      const results = await Promise.all(migrationPromises);
      console.log(`✅ Successfully migrated ${results.length} user(s):`, results);
    } catch (error) {
      console.error('❌ Error during user migration:', error);
    } finally {
      this.migrationInProgress.set(false);
    }
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
    // Ensure user has userId before login (shouldn't happen after migration, but safety check)
    if (!user.userId) {
      const newUserId = this.generateUserId();
      await this.updateUser(user.id, { userId: newUserId } as any);
      user = { ...user, userId: newUserId };
    }

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

  async createUser(user: Omit<User, 'id' | 'userId' | 'createdAt' | 'lastActive'>) {
    const userId = this.generateUserId();
    await addDoc(this.usersCollection, {
      ...user,
      userId, // Auto-generated userId for data isolation
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

  async updateUser(id: string, data: Partial<User>) {
    await updateDoc(doc(this.firestore, 'users', id), data);
  }

  async deleteUser(id: string) {
    await deleteDoc(doc(this.firestore, 'users', id));
  }

  /**
   * Manually trigger migration for all users without userId.
   * Can be called from the Users component or admin panel if needed.
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
