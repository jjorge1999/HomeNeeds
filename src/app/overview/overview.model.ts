export interface OverviewTask {
  id: string;
  userId: string; // Owner of this task
  title: string;
  description?: string;
  category: 'groceries' | 'chores' | 'repairs' | 'other';
  dueDate?: Date | null;
  assigneeId?: string;
  imageUrl?: string;
  isCompleted: boolean;
  createdAt: Date;
}

export interface Assignee {
  id: string;
  userId: string; // Owner of this assignee
  name: string;
  initial: string;
  color: string;
}

export const ASSIGNEE_COLORS = [
  'bg-red-500',
  'bg-orange-500',
  'bg-amber-500',
  'bg-green-500',
  'bg-emerald-500',
  'bg-teal-500',
  'bg-cyan-500',
  'bg-blue-500',
  'bg-indigo-500',
  'bg-violet-500',
  'bg-purple-500',
  'bg-fuchsia-500',
  'bg-pink-500',
  'bg-rose-500',
  'bg-slate-500',
];

export const TASK_CATEGORIES = [
  { id: 'groceries', label: 'Groceries', color: 'bg-amber-400', textColor: 'text-amber-400' },
  { id: 'chores', label: 'Chores', color: 'bg-blue-400', textColor: 'text-blue-400' },
  { id: 'repairs', label: 'Repairs', color: 'bg-purple-500', textColor: 'text-purple-400' },
  { id: 'other', label: 'Other', color: 'bg-slate-400', textColor: 'text-slate-400' },
];
