import { Component, signal, inject, computed } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';
import { DialogComponent } from './shared/dialog/dialog.component';
import { OverviewService } from './overview/overview.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink, DialogComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'w-full h-screen flex overflow-hidden',
  },
})
export class App {
  protected readonly title = signal('frontend');
  private overviewService = inject(OverviewService);

  pendingItemsCount = computed(() => {
    return this.overviewService.tasks().filter((t) => !t.isCompleted).length;
  });
}
