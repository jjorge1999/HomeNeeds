import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoadingService } from './loading.service';

@Component({
  selector: 'app-loading',
  standalone: true,
  imports: [CommonModule],
  template: `
    @if (loadingService.loading().isLoading) {
    <div class="loading-overlay" @fadeInOut>
      <div class="loading-container">
        <!-- Spinner -->
        <div class="spinner">
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <div class="spinner-ring"></div>
          <span class="material-symbols-outlined spinner-icon">home</span>
        </div>

        <!-- Message -->
        @if (loadingService.loading().message) {
        <p class="loading-message">{{ loadingService.loading().message }}</p>
        }

        <!-- Progress Bar (if progress is set) -->
        @if (loadingService.loading().progress !== undefined) {
        <div class="progress-container">
          <div class="progress-bar" [style.width.%]="loadingService.loading().progress"></div>
        </div>
        <p class="progress-text">{{ loadingService.loading().progress }}%</p>
        }
      </div>
    </div>
    }
  `,
  styles: [
    `
      .loading-overlay {
        position: fixed;
        inset: 0;
        z-index: 9999;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(17, 19, 23, 0.85);
        backdrop-filter: blur(8px);
        animation: fadeIn 0.2s ease;
      }

      @keyframes fadeIn {
        from {
          opacity: 0;
        }
        to {
          opacity: 1;
        }
      }

      .loading-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1.5rem;
      }

      .spinner {
        position: relative;
        width: 80px;
        height: 80px;
      }

      .spinner-ring {
        position: absolute;
        inset: 0;
        border-radius: 50%;
        border: 3px solid transparent;
        animation: spin 1.5s linear infinite;
      }

      .spinner-ring:nth-child(1) {
        border-top-color: #9fe870;
        animation-delay: 0s;
      }

      .spinner-ring:nth-child(2) {
        inset: 8px;
        border-right-color: #9fe870;
        animation-delay: 0.15s;
        animation-direction: reverse;
      }

      .spinner-ring:nth-child(3) {
        inset: 16px;
        border-bottom-color: #9fe870;
        animation-delay: 0.3s;
      }

      .spinner-icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        font-size: 28px;
        color: #9fe870;
        animation: pulse 1.5s ease-in-out infinite;
      }

      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }

      @keyframes pulse {
        0%,
        100% {
          opacity: 1;
          transform: translate(-50%, -50%) scale(1);
        }
        50% {
          opacity: 0.6;
          transform: translate(-50%, -50%) scale(0.9);
        }
      }

      .loading-message {
        color: white;
        font-size: 1rem;
        font-weight: 500;
        text-align: center;
        max-width: 280px;
        animation: fadeIn 0.3s ease 0.1s both;
      }

      .progress-container {
        width: 200px;
        height: 4px;
        background: rgba(255, 255, 255, 0.1);
        border-radius: 9999px;
        overflow: hidden;
      }

      .progress-bar {
        height: 100%;
        background: linear-gradient(90deg, #9fe870, #7dd956);
        border-radius: 9999px;
        transition: width 0.3s ease;
      }

      .progress-text {
        color: #9ea7b7;
        font-size: 0.75rem;
        font-weight: 600;
      }
    `,
  ],
})
export class LoadingComponent {
  loadingService = inject(LoadingService);
}
