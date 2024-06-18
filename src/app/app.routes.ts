import { Routes } from '@angular/router';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [
    { path: '', component: DashboardComponent },
    {
        loadChildren: () => import('./pages/movies/movies.module').then((m) => m.MoviesModule),
        path: 'movies',
    },
    { path: '**', component: NotFoundComponent },
];
