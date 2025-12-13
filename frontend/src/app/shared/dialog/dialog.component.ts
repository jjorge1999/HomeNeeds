import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogService } from './dialog.service';

@Component({
  selector: 'app-dialog',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (dialogService.dialog(); as data) {
    <div
      class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-in fade-in duration-200"
    >
      <div class="absolute inset-0" (click)="data.type === 'confirm' ? cancel() : confirm()"></div>

      <div
        class="relative bg-white dark:bg-surface-dark w-full max-w-sm rounded-2xl shadow-xl overflow-hidden animate-in zoom-in-95 duration-200 border border-slate-200 dark:border-border-dark"
      >
        <div class="p-6">
          @if (data.title) {
          <h3 class="text-xl font-bold text-slate-900 dark:text-white mb-2">{{ data.title }}</h3>
          }
          <p class="text-slate-600 dark:text-slate-300 leading-relaxed">{{ data.message }}</p>
        </div>
        <div class="p-4 bg-slate-50 dark:bg-black/20 flex justify-end gap-3">
          @if (data.type === 'confirm') {
          <button
            (click)="cancel()"
            class="px-4 py-2 rounded-lg text-slate-600 dark:text-slate-400 font-bold hover:bg-slate-200 dark:hover:bg-border-dark transition-colors"
          >
            {{ data.cancelText || 'Cancel' }}
          </button>
          }
          <button
            (click)="confirm()"
            [class.bg-rose-500]="data.type === 'error'"
            [class.bg-primary]="data.type !== 'error'"
            class="px-5 py-2 rounded-lg text-slate-900 font-bold hover:brightness-110 transition-all shadow-lg active:scale-95"
          >
            {{ data.confirmText || 'OK' }}
          </button>
        </div>
      </div>
    </div>
    }
  `,
})
export class DialogComponent {
  dialogService = inject(DialogService);

  confirm() {
    this.dialogService.close(true);
  }

  cancel() {
    this.dialogService.close(false);
  }
}
