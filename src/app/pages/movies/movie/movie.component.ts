import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    OnInit,
    inject,
} from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { Movie } from '../shared/movies.types';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { NgIf } from '@angular/common';
import { BudgetPipe, DurationPipe } from '../../../shared/pipes';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, BudgetPipe, DurationPipe],
    providers: [MoviesService],
    selector: 'app-movie',
    standalone: true,
    templateUrl: './movie.component.html',
    styleUrls: ['./movie.component.css'],
})
export class MovieComponent implements OnInit {
    // * Injectors
    private moviesService = inject(MoviesService);
    private destroyRef = inject(DestroyRef);
    private route = inject(ActivatedRoute);
    private cd = inject(ChangeDetectorRef);

    // * Variables
    public movie: Movie | undefined;
    public id: string | null = this.route.snapshot.paramMap.get('movieId');

    // *****************
    // * Lifecycle hooks
    // *****************
    /**
     * The ngOnInit function in TypeScript is a lifecycle hook method used in Angular to initialize
     * component properties and make API calls.
     */
    ngOnInit(): void {
        if (this.id) {
            this.moviesService
                .get(this.id)
                .pipe(takeUntilDestroyed(this.destroyRef))
                .subscribe((movie) => {
                    this.movie = movie;
                    this.cd.markForCheck();
                });
        }
    }

    // ********
    // * Events
    // ********
    onClickBackButton(): void {
        window.history.back();
    }
}
