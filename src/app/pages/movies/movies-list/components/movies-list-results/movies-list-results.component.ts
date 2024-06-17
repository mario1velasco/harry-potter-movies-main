import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    selector: 'app-movies-list-results',
    standalone: true,
    templateUrl: './movies-list-results.component.html',
    styleUrls: ['./movies-list-results.component.css'],
})
export class MoviesListComponent {}
