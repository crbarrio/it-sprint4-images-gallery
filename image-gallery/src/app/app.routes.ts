import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'gallery',
        loadComponent: () => import('./pages/gallery/gallery')
    },
    {
        path: '**',
        redirectTo: 'gallery'
    }
];
