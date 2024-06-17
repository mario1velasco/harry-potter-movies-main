import { ChangeDetectionStrategy, Component, DestroyRef, OnInit, inject } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [],
    selector: 'app-movies-list-filter',
    standalone: true,
    templateUrl: './movies-list-filter.component.html',
    styleUrls: ['./movies-list-filter.component.css'],
})
export class MoviesListComponent {}
