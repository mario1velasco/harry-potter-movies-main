import {
    ChangeDetectionStrategy,
    ChangeDetectorRef,
    Component,
    DestroyRef,
    OnInit,
    inject,
} from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { MoviesList } from '../shared/movies.types';
import { MoviesListResultsComponent } from './components/movies-list-results/movies-list-results.component';
import { FormBuilder } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { NgIf } from '@angular/common';
import { MoviesListFilterComponent } from './components/movies-list-filter/movies-list-filter.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [MoviesListResultsComponent, NgIf, MoviesListFilterComponent],
    providers: [MoviesService],
    selector: 'app-movies-list',
    standalone: true,
    templateUrl: './movies-list.component.html',
    styleUrls: ['./movies-list.component.css'],
})
export class MoviesListComponent implements OnInit {
    // * Injectors
    private moviesService = inject(MoviesService);
    private fb = inject(FormBuilder);
    private destroyRef = inject(DestroyRef);
    private cd = inject(ChangeDetectorRef);

    // * Variables
    public moviesList: MoviesList[] = [];
    public form = this.fb.group({
        title: [''],
        releaseYear: [''],
    });

    // *****************
    // * Lifecycle hooks
    // *****************
    /**
     * The ngOnInit function in TypeScript is a lifecycle hook method used in Angular to initialize
     * component properties and make API calls.
     */
    ngOnInit(): void {
        this.moviesService
            .getList()
            .pipe(takeUntilDestroyed(this.destroyRef))
            .subscribe((moviesList) => {
                this.moviesList = moviesList;
                this.cd.markForCheck();
            });
        this.form.valueChanges.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
            console.log(data);
        });
    }
}
