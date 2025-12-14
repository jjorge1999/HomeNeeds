import { Component, signal, inject, computed, effect } from '@angular/core';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';
import { DialogComponent } from './shared/dialog/dialog.component';
import { LoadingComponent, LoadingService } from './shared/loading';
import { OverviewService } from './overview/overview.service';
import { UserService } from './users/user.service';
import { User } from './users/user.model';
import { DataMigrationService } from './shared/data-migration.service';

// Extend Window interface for dev console access
declare global {
  interface Window {
    userService: UserService;
    migrationService: DataMigrationService;
    loadingService: LoadingService;
  }
}

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, RouterLinkActive, DialogComponent, LoadingComponent],
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
  private loadingService = inject(LoadingService);

  users = this.userService.users; // Filtered users for Users page
  allUsers = this.userService.allUsers; // All users for login screen
  currentUser = this.userService.currentUser;
  loading = this.userService.loading;

  // Sidebar collapse state with localStorage persistence
  sidebarCollapsed = signal<boolean>(this.getSavedSidebarState());

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
    (window as any).loadingService = this.loadingService;

    console.log('🔧 Dev Console Tools Available:');
    console.log('   → window.userService.manualMigrateAllUsers()');
    console.log('   → window.migrationService.migrateAllDataToUser("user_xxx")');
    console.log('   → window.migrationService.previewMigration()');
    console.log('   → window.loadingService.show("Loading...")');
    console.log('   → window.loadingService.hide()');

    // Save sidebar state to localStorage when it changes
    effect(() => {
      const collapsed = this.sidebarCollapsed();
      localStorage.setItem('sidebar-collapsed', JSON.stringify(collapsed));
    });
  }

  private getSavedSidebarState(): boolean {
    const saved = localStorage.getItem('sidebar-collapsed');
    return saved ? JSON.parse(saved) : false;
  }

  toggleSidebar(): void {
    this.sidebarCollapsed.update((val) => !val);
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
