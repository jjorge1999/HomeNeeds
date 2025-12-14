import { Injectable, signal } from '@angular/core';
import { Observable, Subject, firstValueFrom } from 'rxjs';
import { take } from 'rxjs/operators';

export interface DialogOptions {
  title?: string;
  message: string;
  type?: 'info' | 'confirm' | 'error' | 'success';
  confirmText?: string;
  cancelText?: string;
}

interface DialogInstance extends DialogOptions {
  result$: Subject<boolean>;
}

@Injectable({
  providedIn: 'root',
})
export class DialogService {
  dialog = signal<DialogInstance | null>(null);

  /**
   * Show a confirmation dialog and return an Observable
   * Can also be awaited using: await firstValueFrom(dialogService.confirm$(...))
   */
  confirm$(message: string, title: string = 'Confirm'): Observable<boolean> {
    const result$ = new Subject<boolean>();

    this.dialog.set({
      message,
      title,
      type: 'confirm',
      confirmText: 'Confirm',
      cancelText: 'Cancel',
      result$,
    });

    return result$.pipe(take(1));
  }

  /**
   * Legacy Promise-based confirm - internally uses Observable
   * @deprecated Use confirm$() with subscribe() instead
   */
  confirm(message: string, title: string = 'Confirm'): Promise<boolean> {
    return firstValueFrom(this.confirm$(message, title));
  }

  /**
   * Show an alert dialog and return an Observable
   */
  alert$(message: string, title: string = 'Alert'): Observable<boolean> {
    const result$ = new Subject<boolean>();

    this.dialog.set({
      message,
      title,
      type: 'info',
      confirmText: 'OK',
      result$,
    });

    return result$.pipe(take(1));
  }

  /**
   * Legacy Promise-based alert - internally uses Observable
   * @deprecated Use alert$() with subscribe() instead
   */
  alert(message: string, title: string = 'Alert'): Promise<boolean> {
    return firstValueFrom(this.alert$(message, title));
  }

  /**
   * Show a success dialog
   */
  success$(message: string, title: string = 'Success'): Observable<boolean> {
    const result$ = new Subject<boolean>();

    this.dialog.set({
      message,
      title,
      type: 'success',
      confirmText: 'OK',
      result$,
    });

    return result$.pipe(take(1));
  }

  /**
   * Show an error dialog
   */
  error$(message: string, title: string = 'Error'): Observable<boolean> {
    const result$ = new Subject<boolean>();

    this.dialog.set({
      message,
      title,
      type: 'error',
      confirmText: 'OK',
      result$,
    });

    return result$.pipe(take(1));
  }

  /**
   * Close the current dialog with a result
   */
  close(result: boolean): void {
    const current = this.dialog();
    if (current) {
      current.result$.next(result);
      current.result$.complete();
      this.dialog.set(null);
    }
  }
}
