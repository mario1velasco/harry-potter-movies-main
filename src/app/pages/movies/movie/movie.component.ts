import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    OnInit,
    inject,
    signal,
} from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { MoviesList } from '../shared/movies.types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    providers: [MoviesService],
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
})
export class MoviesListComponent implements OnInit {
    // * Injectors
    private moviesService = inject(MoviesService);
    private destroyRef = inject(DestroyRef);

    // * Variables
    public moviesList: MoviesList[] = [];

    ngOnInit(): void {
        this.moviesService
            .get('e80d5a37-620e-4be2-92b9-fb1f5262494f')
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((data) => {
                console.log(data);
            });
    }
}
