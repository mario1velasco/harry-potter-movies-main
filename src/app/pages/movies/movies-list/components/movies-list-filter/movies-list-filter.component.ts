import { NgIf } from '@angular/common';
import {
    ChangeDetectionStrategy,
    Component,
    DestroyRef,
    Input,
    OnInit,
    inject,
} from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [NgIf, ReactiveFormsModule],
    selector: 'app-movies-list-filter',
    standalone: true,
    templateUrl: './movies-list-filter.component.html',
    styleUrls: ['./movies-list-filter.component.css'],
})
export class MoviesListFilterComponent {
    // * Inputs
    @Input() public form:
        | FormGroup<{
              title: FormControl<string | null>;
              releaseYear: FormControl<string | null>;
          }>
        | undefined;
}
