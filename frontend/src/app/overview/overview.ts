import { Component } from '@angular/core';

@Component({
  selector: 'app-overview',
  imports: [],
  templateUrl: './overview.html',
  styleUrl: './overview.css',
  host: {
    class: 'flex-1 h-screen flex flex-col overflow-hidden',
  },
})
export class OverviewComponent {}
