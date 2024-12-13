import { Routes } from '@angular/router';

export const USER_ROUTES: Routes = [
    {
        path: '',
        loadComponent: () => import('./user.component').then(c => c.UserComponent),
        children: [
            {
                path: '',
                loadComponent: () => import('./home/home.component').then(c => c.HomeComponent)
            },
            {
                path: 'movie/:id',
                loadComponent: () => import('./movie/movie.component').then(c => c.MovieComponent)
            },
            {
                path: 'about',
                loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)
            },
            {
                path: 'contact-us',
                loadComponent: () => import('./contact-us/contact-us.component').then(c => c.ContactUsComponent)
            },
            {
                path: 'dcma',
                loadComponent: () => import('./dcma/dcma.component').then(c => c.DcmaComponent)
            },
            {
                path: '**',
                redirectTo: '',
                pathMatch: 'full'
            }
        ]
    }
];
