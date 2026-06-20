import { Routes } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

const isLocalhost =
  window.location.hostname === 'localhost' ||
  window.location.hostname === '127.0.0.1';

const catalogRemoteEntry = isLocalhost
  ? 'http://localhost:4201/remoteEntry.js'
  : 'https://axeelsc.github.io/mfe-training-Axel/catalog/remoteEntry.js';

const reportsRemoteEntry = isLocalhost
  ? 'http://localhost:4202/remoteEntry.js'
  : 'https://axeelsc.github.io/mfe-training-Axel/reports/remoteEntry.js';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./pages/app-grid/app-grid').then((m) => m.AppGrid),
  },
  {
    path: 'catalog',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: catalogRemoteEntry,
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },
  {
    path: 'reports',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: reportsRemoteEntry,
        exposedModule: './Routes',
      }).then((m) => m.routes),
  },
];
