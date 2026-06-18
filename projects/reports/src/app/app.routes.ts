import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/reports-home/reports-home').then((m) => m.ReportsHome),
  },
];
