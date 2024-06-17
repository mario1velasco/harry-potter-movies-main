import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { MovieComponent } from './movie/movie.component';
const routes: Route[] = [
    {
        component: MoviesListComponent,
        path: '',
    },
    {
        component: MovieComponent,
        path: ':id',
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class MoviesModule {}
