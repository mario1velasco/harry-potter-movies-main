import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { MoviesList } from '../shared/movies.types';
import { Observable } from 'rxjs';
import { MoviesListResultsComponent } from './components/movies-list-results/movies-list-results.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MoviesListResultsComponent],
    providers: [MoviesService],
    selector: 'app-movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent {
    // * Injectors
    private moviesService = inject(MoviesService);

    // * Variables
    public moviesList$: Observable<MoviesList[]> = this.moviesService.getList();
}
