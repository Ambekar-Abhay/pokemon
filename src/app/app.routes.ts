import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'pokemon',
        loadComponent: () => import('./pokenmon/pokenmon.component').then(m => m.PokenmonComponent)
    },
    {
        path: '',
        pathMatch: 'full',
        redirectTo: '/pokemon'
    }
];
