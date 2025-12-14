import { Component, EventEmitter, Output, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Assignee, ASSIGNEE_COLORS } from './overview.model';
import { AssigneeService } from './assignee.service';
import { OverviewService } from './overview.service';
import { DialogService } from '../shared/dialog/dialog.service';
import { LoadingService } from '../shared/loading';

@Component({
  selector: 'app-assignee-management',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div
      class="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div
        class="bg-white dark:bg-surface-dark w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-border-dark flex flex-col max-h-[80vh]"
      >
        <div
          class="p-4 border-b border-slate-100 dark:border-border-dark flex justify-between items-center bg-slate-50/50 dark:bg-black/20"
        >
          <h3 class="font-bold text-lg text-slate-900 dark:text-white">Manage Assignees</h3>
          <button
            (click)="onClose()"
            class="p-1 rounded-full hover:bg-slate-200 dark:hover:bg-border-dark transition-colors"
          >
            <span class="material-symbols-outlined">close</span>
          </button>
        </div>

        <div class="flex-1 overflow-y-auto p-4 space-y-3">
          <!-- Add Form -->
          <div class="bg-slate-50 dark:bg-black/20 p-3 rounded-xl space-y-3">
            <input
              [(ngModel)]="assigneeName"
              type="text"
              placeholder="Name (e.g. Alex)"
              class="w-full h-10 px-3 rounded-lg bg-white dark:bg-surface-dark border border-slate-200 dark:border-border-dark text-sm focus:border-primary focus:ring-1 focus:ring-primary outline-none text-slate-900 dark:text-white"
            />

            <div class="flex flex-wrap gap-2">
              @for (color of assigneeColors; track color) {
              <button
                (click)="assigneeColor = color"
                [class]="color"
                class="size-6 rounded-full transition-transform hover:scale-110 ring-2 ring-offset-1 dark:ring-offset-surface-dark"
                [class.ring-slate-400]="assigneeColor === color"
                [class.ring-transparent]="assigneeColor !== color"
              ></button>
              }
            </div>

            <div class="flex justify-end gap-2">
              @if (editingAssignee) {
              <button
                (click)="resetForm()"
                class="text-xs text-slate-500 font-bold hover:text-slate-700 dark:hover:text-slate-300 px-2"
              >
                Cancel
              </button>
              }
              <button
                (click)="saveAssignee()"
                [disabled]="!assigneeName.trim()"
                class="h-8 px-4 bg-primary text-slate-900 rounded-lg text-xs font-bold hover:bg-primary-hover disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                {{ editingAssignee ? 'Update' : 'Add' }}
              </button>
            </div>
          </div>

          <!-- List -->
          <div class="space-y-2">
            @for (assignee of assignees(); track assignee.id) {
            <div
              class="flex items-center justify-between p-2 rounded-lg hover:bg-slate-50 dark:hover:bg-white/5 group border border-transparent hover:border-slate-100 dark:hover:border-border-dark transition-all"
            >
              <div class="flex items-center gap-3">
                <div
                  class="size-8 rounded-full flex items-center justify-center text-xs font-bold text-white shadow-sm"
                  [class]="assignee.color"
                >
                  {{ assignee.initial }}
                </div>
                <div class="flex flex-col">
                  <span class="text-sm font-bold text-slate-900 dark:text-white">{{
                    assignee.name
                  }}</span>
                  <span
                    class="text-[10px] font-bold text-amber-500 bg-amber-100 dark:bg-amber-900/30 px-1.5 py-0.5 rounded-md w-fit flex items-center gap-0.5 mt-0.5"
                  >
                    <span class="material-symbols-outlined text-[10px]">emoji_events</span>
                    {{ assignee.points || 0 }} pts
                  </span>
                </div>
              </div>
              <div class="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                  (click)="editAssignee(assignee)"
                  class="size-7 rounded bg-white dark:bg-black/20 border border-slate-200 dark:border-border-dark flex items-center justify-center text-slate-500 hover:text-primary transition-colors"
                >
                  <span class="material-symbols-outlined text-[14px]">edit</span>
                </button>
                <button
                  (click)="deleteAssignee(assignee.id)"
                  class="size-7 rounded bg-white dark:bg-black/20 border border-slate-200 dark:border-border-dark flex items-center justify-center text-slate-500 hover:text-red-500 transition-colors"
                >
                  <span class="material-symbols-outlined text-[14px]">delete</span>
                </button>
              </div>
            </div>
            } @empty {
            <div class="text-center py-6 text-slate-400 text-sm">No assignees yet</div>
            }
          </div>
        </div>
      </div>
    </div>
  `,
})
export class AssigneeManagementComponent {
  @Output() close = new EventEmitter<void>();

  private assigneeService = inject(AssigneeService);
  private overviewService = inject(OverviewService);
  private dialogService = inject(DialogService);
  private loadingService = inject(LoadingService);

  assignees = this.assigneeService.assignees;
  assigneeColors = ASSIGNEE_COLORS;

  editingAssignee: Assignee | null = null;
  assigneeName = '';
  assigneeColor = ASSIGNEE_COLORS[0];

  onClose(): void {
    this.close.emit();
  }

  resetForm(): void {
    this.editingAssignee = null;
    this.assigneeName = '';
    this.assigneeColor = this.assigneeColors[0];
  }

  editAssignee(assignee: Assignee): void {
    this.editingAssignee = assignee;
    this.assigneeName = assignee.name;
    this.assigneeColor = assignee.color;
  }

  saveAssignee(): void {
    if (!this.assigneeName.trim()) return;

    this.loadingService.show('Saving...');

    if (this.editingAssignee) {
      this.assigneeService
        .updateAssignee$(this.editingAssignee.id, {
          name: this.assigneeName,
          color: this.assigneeColor,
        })
        .subscribe({
          next: () => {
            this.loadingService.hide();
            this.resetForm();
          },
          error: () => this.loadingService.hide(),
        });
    } else {
      this.assigneeService.createAssignee$(this.assigneeName, this.assigneeColor).subscribe({
        next: () => {
          this.loadingService.hide();
          this.resetForm();
        },
        error: () => this.loadingService.hide(),
      });
    }
  }

  deleteAssignee(id: string): void {
    const activeTasks = this.overviewService.tasks().filter((t) => t.assigneeId === id);
    if (activeTasks.length > 0) {
      this.dialogService.alert$('Cannot delete assignee with active tasks.').subscribe();
      return;
    }

    this.dialogService.confirm$('Delete this assignee?', 'Confirm').subscribe((confirmed) => {
      if (confirmed) {
        this.loadingService.show('Deleting...');
        this.assigneeService.deleteAssignee$(id).subscribe({
          next: () => this.loadingService.hide(),
          error: () => this.loadingService.hide(),
        });
      }
    });
  }
}
