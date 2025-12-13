import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DialogComponent } from './shared/dialog/dialog.component';
import { OverviewService } from './overview/overview.service';
import { UserService } from './users/user.service';
import { User } from './users/user.model';
import { DataMigrationService } from './shared/data-migration.service';

// Extend Window interface for dev console access
declare global {
  interface Window {
    userService: UserService;
    migrationService: DataMigrationService;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DialogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'w-full h-screen flex overflow-hidden',
  },
})
export class App {
  protected readonly title = signal('frontend');
  private overviewService = inject(OverviewService);
  private userService = inject(UserService);
  private migrationService = inject(DataMigrationService);

  users = this.userService.users;
  currentUser = this.userService.currentUser;
  loading = this.userService.loading;

  // Login Logic
  loginStep = signal<'select' | 'password'>('select');
  selectedUser = signal<User | null>(null);
  passwordInput = signal('');
  loginError = signal('');

  pendingItemsCount = computed(() => {
    return this.overviewService.tasks().filter((t) => !t.isCompleted).length;
  });

  constructor() {
    // Expose services on window for dev console access
    (window as any).userService = this.userService;
    (window as any).migrationService = this.migrationService;

    console.log('🔧 Dev Console Tools Available:');
    console.log('   → window.userService.manualMigrateAllUsers()');
    console.log('   → window.migrationService.migrateAllDataToUser("user_xxx")');
    console.log('   → window.migrationService.previewMigration()');
  }

  selectUser(user: User) {
    if (user.password) {
      this.selectedUser.set(user);
      this.loginStep.set('password');
      this.passwordInput.set('');
      this.loginError.set('');
    } else {
      this.userService.login(user); // No password set, login directly
    }
  }

  cancelPassword() {
    this.loginStep.set('select');
    this.selectedUser.set(null);
  }

  async verifyLogin() {
    const user = this.selectedUser();
    if (!user) return;

    if (user.password === this.passwordInput()) {
      await this.userService.login(user);
      this.loginStep.set('select');
      this.selectedUser.set(null);
    } else {
      this.loginError.set('Incorrect password');
    }
  }

  logout() {
    this.userService.logout();
  }
}
