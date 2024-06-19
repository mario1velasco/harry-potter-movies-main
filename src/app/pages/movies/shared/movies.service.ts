import { Injectable, inject } from '@angular/core';
import { ApiService } from '../../../shared/services/api.service';
import { Observable } from 'rxjs';
import { Movie, MoviesList } from './movies.types';

@Injectable()
export class MoviesService {
    // * Injectors
    private apiService = inject(ApiService);

    /**
     * The function `getList` retrieves a list of movies from a specified API endpoint.
     * @returns An Observable of an array of MoviesList objects is being returned.
     */
    getList(): Observable<MoviesList[]> {
        const path = `/movies`;
        return this.apiService.get(path) as Observable<MoviesList[]>;
    }
    /**
     * This function retrieves a movie by its ID from an API using TypeScript and returns it as an
     * Observable.
     * @param {string} id - The `id` parameter is a string that represents the unique identifier of a
     * movie. It is used to retrieve a specific movie from the API by appending it to the URL endpoint.
     * @returns An Observable of type Movie is being returned.
     */
    get(id: string): Observable<Movie> {
        const path = `/movies/${id}`;
        return this.apiService.get(path) as Observable<Movie>;
    }
}
