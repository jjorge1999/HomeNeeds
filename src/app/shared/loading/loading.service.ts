import { Injectable, signal } from '@angular/core';
import { BehaviorSubject, Observable, finalize } from 'rxjs';

export interface LoadingState {
  isLoading: boolean;
  message?: string;
  progress?: number; // 0-100 for progress bar
}

@Injectable({
  providedIn: 'root',
})
export class LoadingService {
  // Signal for template usage
  private loadingSignal = signal<LoadingState>({ isLoading: false });

  // Observable for reactive subscribers
  private loadingSubject = new BehaviorSubject<LoadingState>({ isLoading: false });
  readonly loading$ = this.loadingSubject.asObservable();

  // Track active loading requests (for overlapping requests)
  private activeRequests = 0;

  // Get current loading state as signal
  readonly loading = this.loadingSignal.asReadonly();

  // Convenience computed for just the boolean
  get isLoading(): boolean {
    return this.loadingSignal().isLoading;
  }

  /**
   * Show the loading indicator
   * @param message Optional message to display
   */
  show(message?: string): void {
    this.activeRequests++;
    const state: LoadingState = { isLoading: true, message };
    this.loadingSignal.set(state);
    this.loadingSubject.next(state);
  }

  /**
   * Hide the loading indicator
   * Decrements active requests counter - only hides when all requests complete
   */
  hide(): void {
    this.activeRequests = Math.max(0, this.activeRequests - 1);
    if (this.activeRequests === 0) {
      const state: LoadingState = { isLoading: false };
      this.loadingSignal.set(state);
      this.loadingSubject.next(state);
    }
  }

  /**
   * Force hide the loading indicator (ignores active request count)
   */
  forceHide(): void {
    this.activeRequests = 0;
    const state: LoadingState = { isLoading: false };
    this.loadingSignal.set(state);
    this.loadingSubject.next(state);
  }

  /**
   * Update the loading message
   */
  setMessage(message: string): void {
    const current = this.loadingSignal();
    if (current.isLoading) {
      const state: LoadingState = { ...current, message };
      this.loadingSignal.set(state);
      this.loadingSubject.next(state);
    }
  }

  /**
   * Update progress (for progress bar display)
   * @param progress Number between 0-100
   */
  setProgress(progress: number): void {
    const current = this.loadingSignal();
    if (current.isLoading) {
      const state: LoadingState = { ...current, progress: Math.min(100, Math.max(0, progress)) };
      this.loadingSignal.set(state);
      this.loadingSubject.next(state);
    }
  }

  /**
   * RxJS operator to automatically show/hide loading for an Observable
   * Usage: someObservable$.pipe(this.loadingService.withLoading('Loading...'))
   */
  withLoading<T>(message?: string): (source: Observable<T>) => Observable<T> {
    return (source: Observable<T>) => {
      this.show(message);
      return source.pipe(finalize(() => this.hide()));
    };
  }

  /**
   * Wrap a Promise to automatically show/hide loading
   * Usage: await this.loadingService.wrapPromise(somePromise, 'Loading...')
   */
  async wrapPromise<T>(promise: Promise<T>, message?: string): Promise<T> {
    this.show(message);
    try {
      return await promise;
    } finally {
      this.hide();
    }
  }
}
