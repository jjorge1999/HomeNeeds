export type UserRole = 'admin' | 'member' | 'guest';
export type UserStatus = 'active' | 'pending' | 'inactive' | 'offline' | 'away';

export interface User {
  id: string;
  name: string;
  password?: string;
  role: UserRole;
  status: UserStatus;
  avatarUrl?: string;
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
