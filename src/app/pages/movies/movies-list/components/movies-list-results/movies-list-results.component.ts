import { ChangeDetectionStrategy, Component, Input, TrackByFunction } from '@angular/core';
import { MoviesList } from '../../../shared/movies.types';
import { Observable } from 'rxjs';
import { NgIf, AsyncPipe, NgFor, CurrencyPipe } from '@angular/common';
import { DurationPipe } from '../../../../../shared/pipes/duration.pipe';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, AsyncPipe, NgFor, CurrencyPipe, DurationPipe],
    selector: 'app-movies-list-results',
    standalone: true,
    templateUrl: './movies-list-results.component.html',
    styleUrls: ['./movies-list-results.component.css'],
})
export class MoviesListResultsComponent {
    @Input() public moviesList$: Observable<MoviesList[]> | undefined;

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
}
