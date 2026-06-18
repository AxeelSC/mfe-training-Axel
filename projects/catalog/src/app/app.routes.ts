import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/catalog-home/catalog-home').then((m) => m.CatalogHome),
  },
];
