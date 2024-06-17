import { ChangeDetectionStrategy, Component, Input, TrackByFunction, inject } from '@angular/core';
import { MoviesList } from '../../../shared/movies.types';
import { NgIf, AsyncPipe, NgFor, CurrencyPipe } from '@angular/common';
import { Router } from '@angular/router';
import { DurationPipe, MillionPipe } from '../../../../../shared/pipes';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, AsyncPipe, NgFor, CurrencyPipe, DurationPipe, MillionPipe],
    selector: 'app-movies-list-results',
    standalone: true,
    templateUrl: './movies-list-results.component.html',
    styleUrls: ['./movies-list-results.component.css'],
})
export class MoviesListResultsComponent {
    // * Injectors
    private router = inject(Router);

    // * Inputs
    @Input() public moviesList: MoviesList[] | undefined;

    /**
     * The trackByMovieId function in TypeScript returns the unique identifier of a movie item based on
     * its 'id' property.
     * @param {number} index - The `index` parameter represents the index of the current item in the
     * array being iterated over.
     * @param {MoviesList} item - The `item` parameter in the `trackByMovieId` function refers to an
     * object of type `MoviesList`.
     * @returns The function `trackByMovieId` returns the `id` property of the `item` object, which is
     * used as the unique identifier for tracking purposes.
     */
    public trackByMovieId(index: number, item: MoviesList): string {
        return item.id; // Use the 'id' property as the unique identifier
    }

    // ************
    // * EVENTS
    // ************

    /**
     * The function `onMovieBtnClick` navigates to a specific movie page based on the movie's ID when a
     * button is clicked.
     * @param {MoviesList} movie - The `movie` parameter is an object of type `MoviesList` that
     * represents a specific movie in a list of movies. It likely contains properties such as `id`,
     * `title`, `genre`, `releaseDate`, etc., that provide information about the movie.
     */
    onMovieBtnClick(movie: MoviesList) {
        this.router.navigate(['/movies', movie.id]);
    }
}
