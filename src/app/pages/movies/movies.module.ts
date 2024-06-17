import { NgModule } from '@angular/core';

import { Route, RouterModule } from '@angular/router';
import { MoviesListComponent } from './movies-list/movies-list.component';
const routes: Route[] = [
    {
        component: MoviesListComponent,
        path: '',
    },
    { path: '**', pathMatch: 'full', redirectTo: '' },
];
@NgModule({
    exports: [RouterModule],
    imports: [RouterModule.forChild(routes)],
})
export class MoviesModule {}
