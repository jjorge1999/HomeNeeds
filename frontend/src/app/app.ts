import { Component, signal } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './app.html',
  styleUrl: './app.css',
  host: {
    class: 'w-full h-screen flex overflow-hidden',
  },
})
export class App {
  protected readonly title = signal('frontend');
}
