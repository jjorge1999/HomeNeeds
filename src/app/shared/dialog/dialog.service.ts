import { Injectable, signal } from '@angular/core';

export interface DialogOptions {
  title?: string;
  message: string;
  type?: 'info' | 'confirm' | 'error' | 'success';
  confirmText?: string;
  cancelText?: string;
}

interface DialogInstance extends DialogOptions {
  resolve: (value: boolean) => void;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = signal<DialogInstance | null>(null);

  confirm(message: string, title: string = 'Confirm'): Promise<boolean> {
    return new Promise((resolve) => {
      this.dialog.set({
        message,
        title,
        type: 'confirm',
        confirmText: 'Confirm',
        cancelText: 'Cancel',
        resolve,
      });
    });
  }

  alert(message: string, title: string = 'Alert'): Promise<boolean> {
    return new Promise((resolve) => {
      this.dialog.set({
        message,
        title,
        type: 'info',
        confirmText: 'OK',
        resolve,
      });
    });
  }

  close(result: boolean) {
    const current = this.dialog();
    if (current) {
      current.resolve(result);
      this.dialog.set(null);
    }
  }
}
