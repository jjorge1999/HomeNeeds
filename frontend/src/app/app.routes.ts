import { Routes } from '@angular/router';
import { OverviewComponent } from './overview/overview';
import { GroceriesComponent } from './groceries/groceries';
import { UsersComponent } from './users/users';

export const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full' },
  { path: 'overview', component: OverviewComponent },
  { path: 'groceries', component: GroceriesComponent },
  { path: 'users', component: UsersComponent },
];
