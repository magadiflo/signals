import { Routes } from '@angular/router';

export const APP_ROUTES: Routes = [
  {
    path: 'signals',
    loadChildren: () => import('./signals/signals.routes'),
  },
  { path: '**', redirectTo: '/signals' },
];
