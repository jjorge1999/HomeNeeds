export type UserRole = 'admin' | 'member' | 'guest';
export type UserStatus = 'active' | 'pending' | 'inactive' | 'offline' | 'away';

export interface User {
  id: string; // Firestore document ID
  userId: string; // Auto-generated unique ID for data isolation (e.g., user_abc123)
  name: string;
  password?: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
  createdBy?: string; // userId of the user who created this account
  lastActive?: any; // Date or Timestamp
  createdAt: any;
}

export const USER_ROLES: { value: UserRole; label: string; colorClass: string }[] = [
  {
    value: 'admin',
    label: 'Admin',
    colorClass: 'bg-primary/10 text-primary border-primary/20',
  },
  {
    value: 'member',
    label: 'Member',
    colorClass: 'bg-surface-dark text-slate-300 border-border-dark',
  },
  {
    value: 'guest',
    label: 'Guest',
    colorClass: 'bg-surface-dark text-text-muted border-border-dark',
  },
];
