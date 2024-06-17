import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
    {
        loadChildren: () => import('./pages/movies/movies.module').then((m) => m.MoviesModule),
        path: 'movies',
    },
    { path: '**', component: NotFoundComponent },
];
