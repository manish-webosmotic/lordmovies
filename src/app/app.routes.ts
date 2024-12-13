import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'admin',
        loadChildren: () => import('./pages/admin/admin.routes').then(r => r.ADMIN_ROUTES)
    },
    {
        path: '',
        loadChildren: () => import('./pages/user/user.routes').then(r => r.USER_ROUTES)
    },
    {
        path: '**',
        redirectTo: '',
        pathMatch: 'full'
    }
];
