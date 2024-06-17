import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { MoviesList } from '../shared/movies.types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    providers: [MoviesService],
    selector: 'app-movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
    // * Injectors
    private moviesService = inject(MoviesService);
    private destroyRef = inject(DestroyRef);

    // * Variables
    public moviesList: MoviesList[] = [];

    ngOnInit(): void {
        this.moviesService
            .getList()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((moviesList: MoviesList[]) => {
                this.moviesList = moviesList;
            });
    }
}
