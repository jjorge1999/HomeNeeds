import { Component } from '@angular/core';

@Component({
  selector: 'app-groceries',
  imports: [],
  templateUrl: './groceries.html',
  styleUrl: './groceries.css',
  host: {
    class: 'flex-1 min-w-0 flex flex-col', // flex-col added because the template root is a flex-col container
  },
})
export class GroceriesComponent {}
