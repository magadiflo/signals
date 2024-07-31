import { Routes } from '@angular/router';

import { SignalsLayoutComponent } from './layout/signals-layout/signals-layout.component';

export default [
  {
    path: '',
    component: SignalsLayoutComponent,
    children: [
      {
        path: 'counter',
        loadComponent: () =>
          import('./pages/counter-page/counter-page.component'),
      },
      {
        path: 'user-info',
        loadComponent: () =>
          import('./pages/user-info-page/user-info-page.component'),
      },
      {
        path: 'properties',
        loadComponent: () =>
          import('./pages/properties-page/properties-page.component'),
      },
      { path: '**', redirectTo: 'counter' },
    ],
  },
] as Routes;
