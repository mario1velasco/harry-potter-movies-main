import { Routes } from '@angular/router';
import { MoviesListComponent } from './movies/movies-list/movies-list.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

export const routes: Routes = [
  {
    // canActivate: [() => inject(AuthGuard).isLogged()],
    // loadChildren: () =>
    //     import('./pages/bookings/bookings.module').then((m) => m.BookingsModule),
    component: MoviesListComponent,
    path: 'movies',
  },
  { path: '**', component: NotFoundComponent },
];
