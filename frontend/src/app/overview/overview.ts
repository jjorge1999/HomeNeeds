import { Component, computed, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverviewService } from './overview.service';
import { OverviewTask, TASK_CATEGORIES, Assignee, ASSIGNEE_COLORS } from './overview.model';
import { DialogService } from '../shared/dialog/dialog.service';
import { AssigneeService } from './assignee.service';
import { AssigneeManagementComponent } from './assignee-management.component';
import { GroceryService } from '../groceries/grocery.service';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [CommonModule, FormsModule, AssigneeManagementComponent],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
  host: {
    class: 'flex-1 h-screen flex flex-col overflow-hidden',
  },
})
export class OverviewComponent {
  private overviewService = inject(OverviewService);
  private dialogService = inject(DialogService);
  private assigneeService = inject(AssigneeService);
  private groceryService = inject(GroceryService);

  tasks = this.overviewService.tasks;
  assignees = this.assigneeService.assignees;
  categories = TASK_CATEGORIES;
  assigneeColors = ASSIGNEE_COLORS;

  // Computed groupings
  groupedTasks = computed(() => {
    const tasks = this.tasks();
    const groups: Record<string, OverviewTask[]> = {};
    // Initialize groups for known categories
    this.categories.forEach((c) => (groups[c.id] = []));
    // Initialize 'other' explicitly
    groups['other'] = [];

    tasks.forEach((t) => {
      const catId = t.category;
      if (groups[catId]) {
        groups[catId].push(t);
      } else {
        groups['other'].push(t);
      }
    });

    // Remove empty groups if desired? No, keep structure or filter in template.
    // Let's filter in template or return all.
    return groups;
  });

  totalPending = computed(() => this.tasks().filter((t) => !t.isCompleted).length);
  activeCategoriesCount = computed(() => {
    const groups = this.groupedTasks();
    return Object.values(groups).filter((g) => g.length > 0).length;
  });

  // UI State
  showAddModal = false;
  editingTask: OverviewTask | null = null;

  // Form Data
  taskTitle = '';
  taskCategory = 'groceries';
  taskDueDate = ''; // String for input type="datetime-local"
  taskAssigneeId = '';
  showCategoryDropdown = false;

  // UI State - Assignees
  showAssigneeModal = false;

  constructor() {}

  toggleAddModal(show: boolean) {
    this.showAddModal = show;
    if (!show) {
      this.resetForm();
    }
  }

  resetForm() {
    this.editingTask = null;
    this.taskTitle = '';
    this.taskCategory = 'groceries';
    this.taskDueDate = '';
    this.taskAssigneeId = '';
    this.showCategoryDropdown = false;
  }

  toggleCategoryDropdown() {
    this.showCategoryDropdown = !this.showCategoryDropdown;
  }

  selectCategory(id: string) {
    this.taskCategory = id;
    this.showCategoryDropdown = false;
  }

  getSelectedCategoryLabel(): string {
    return this.categories.find((c) => c.id === this.taskCategory)?.label || 'Select Category';
  }

  async saveTask() {
    if (!this.taskTitle.trim()) return;

    const taskData: any = {
      title: this.taskTitle,
      category: this.taskCategory,
      assigneeId: this.taskAssigneeId || undefined,
      isCompleted: false,
      dueDate: this.taskDueDate ? new Date(this.taskDueDate) : null,
    };

    if (this.editingTask) {
      await this.overviewService.updateTask(this.editingTask.id, {
        title: this.taskTitle,
        category: this.taskCategory as any,
        assigneeId: this.taskAssigneeId || undefined,
        dueDate: this.taskDueDate ? new Date(this.taskDueDate) : null,
      });
    } else {
      await this.overviewService.createTask(taskData);
    }
    this.toggleAddModal(false);
  }

  async toggleComplete(task: OverviewTask) {
    const newStatus = !task.isCompleted;
    await this.overviewService.updateTask(task.id, { isCompleted: newStatus });

    if (newStatus && task.category === 'groceries') {
      const item = this.groceryService.groceries().find((g) => g.name === task.title);
      if (item && item.isInCart) {
        await this.groceryService.update(item.id, { isInCart: false, isChecked: false });
      }
    }
  }

  async delete(id: string) {
    if (await this.dialogService.confirm('Delete this task?', 'Delete Task')) {
      // Capture task before deletion
      const task = this.tasks().find((t) => t.id === id);
      await this.overviewService.deleteTask(id);

      // Sync with grocery list
      if (task && task.category === 'groceries') {
        const item = this.groceryService.groceries().find((g) => g.name === task.title);
        if (item && item.isInCart) {
          await this.groceryService.update(item.id, { isInCart: false, isChecked: false });
        }
      }
    }
  }

  edit(task: OverviewTask) {
    this.editingTask = task;
    this.taskTitle = task.title;
    this.taskCategory = task.category;
    this.taskAssigneeId = task.assigneeId || '';
    // Format date for datetime-local: YYYY-MM-DDTHH:mm
    this.taskDueDate = task.dueDate
      ? new Date(task.dueDate.getTime() - task.dueDate.getTimezoneOffset() * 60000)
          .toISOString()
          .slice(0, 16)
      : '';
    this.showAddModal = true;
  }

  // Assignee Management
  openManageAssignees() {
    this.showAssigneeModal = true;
  }

  closeAssigneeModal() {
    this.showAssigneeModal = false;
  }

  getAssigneeById(id: string | undefined): Assignee | undefined {
    if (!id) return undefined;
    return this.assignees().find((a) => a.id === id);
  }
}
