import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserService } from './user.service';
import { User, USER_ROLES, UserRole, UserStatus } from './user.model';
import { DialogService } from '../shared/dialog/dialog.service';
import { ImageService } from '../groceries/image.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './users.html',
})
export class UsersComponent {
  private userService = inject(UserService);
  private dialogService = inject(DialogService);
  private imageService = inject(ImageService);

  users = this.userService.users;
  currentUser = this.userService.currentUser;
  userRoles = USER_ROLES;

  // Login Modal State
  showLoginModal = false;
  loginTargetUser: User | null = null;
  loginPasswordInput = '';
  loginError = '';

  openLoginModal(user: User) {
    this.loginTargetUser = user;
    this.loginPasswordInput = '';
    this.loginError = '';
    this.showLoginModal = true;
  }

  closeLoginModal() {
    this.showLoginModal = false;
  }

  async attemptLogin() {
    if (!this.loginTargetUser) return;

    const storedPassword = this.loginTargetUser.password || '';
    if (storedPassword !== this.loginPasswordInput) {
      this.loginError = 'Incorrect password';
      return;
    }

    try {
      await this.userService.login(this.loginTargetUser);
    } finally {
      this.closeLoginModal();
    }
  }

  // Filters
  searchQuery = signal('');
  roleFilter = signal<UserRole | 'All'>('All');
  statusFilter = signal<UserStatus | 'All'>('All');

  // Computed
  filteredUsers = computed(() => {
    let result = this.users();
    const q = this.searchQuery().toLowerCase();
    const r = this.roleFilter();
    const s = this.statusFilter();

    if (q) {
      result = result.filter((u) => u.name.toLowerCase().includes(q));
    }
    if (r !== 'All') {
      result = result.filter((u) => u.role === r);
    }
    if (s !== 'All') {
      result = result.filter((u) => u.status === s);
    }
    return result;
  });

  // Modal State
  showModal = false;
  editingUser: User | null = null;

  // Form Data
  formName = '';
  formPassword = '';
  formRole: UserRole = 'member';
  formStatus: UserStatus = 'active';
  formAvatarUrl = '';

  openAddModal() {
    this.editingUser = null;
    this.resetForm();
    this.showModal = true;
  }

  openEditModal(user: User) {
    this.editingUser = user;
    this.formName = user.name;
    this.formRole = user.role;
    this.formStatus = user.status;
    this.formAvatarUrl = user.avatarUrl || '';
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }

  resetForm() {
    this.formName = '';
    this.formPassword = '';
    this.formRole = 'member';
    this.formStatus = 'active';
    this.formAvatarUrl = '';
  }

  removeAvatar(event: Event) {
    event.stopPropagation();
    this.formAvatarUrl = '';
  }

  async saveUser() {
    if (!this.formName.trim()) return;

    try {
      if (this.editingUser) {
        const updates: any = {
          name: this.formName,
          role: this.formRole,
          status: this.formStatus,
          avatarUrl: this.formAvatarUrl,
        };
        if (this.formPassword) {
          updates.password = this.formPassword;
        }
        await this.userService.updateUser(this.editingUser.id, updates);
      } else {
        // New User
        await this.userService.createUser({
          name: this.formName,
          password: this.formPassword,
          role: this.formRole,
          status: 'pending',
          avatarUrl:
            this.formAvatarUrl ||
            `https://ui-avatars.com/api/?name=${this.formName}&background=random`,
        });
      }
    } finally {
      this.closeModal();
    }
  }

  async deleteUser(user: User) {
    if (await this.dialogService.confirm(`Delete user ${user.name}?`, 'Delete User')) {
      await this.userService.deleteUser(user.id);
    }
  }

  // Helpers for Template
  getRoleLabel(role: string) {
    return this.userRoles.find((r) => r.value === role)?.label || role;
  }

  getRoleClass(role: string) {
    return this.userRoles.find((r) => r.value === role)?.colorClass || 'bg-gray-100 text-gray-800';
  }

  getStatusColor(status: string): string {
    switch (status) {
      case 'active':
        return 'bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.5)]';
      case 'away':
        return 'bg-amber-500 shadow-[0_0_8px_rgba(245,158,11,0.5)]';
      case 'offline':
        return 'bg-gray-500';
      case 'pending':
        return 'border-2 border-primary/50 border-t-transparent animate-spin';
      default:
        return 'bg-gray-400';
    }
  }

  getStatusLabel(status: string): string {
    if (status === 'pending') return 'Invited';
    return status.charAt(0).toUpperCase() + status.slice(1);
  }

  async onAvatarSelected(event: Event) {
    const file = (event.target as HTMLInputElement).files?.[0];
    if (file) {
      this.formAvatarUrl = await this.imageService.compressImage(file);
    }
  }
}
