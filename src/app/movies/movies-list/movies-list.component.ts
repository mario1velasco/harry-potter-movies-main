import { ChangeDetectionStrategy, Component, OnInit, inject, signal } from '@angular/core';
import { MoviesService } from '../shared/movies.service';
import { MoviesList } from '../shared/movies.types';

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
  private moviesService =  inject(MoviesService);

  // * Variables
  public moviesList: MoviesList[] = [];

  ngOnInit(): void {
    this.moviesService.getList().subscribe((moviesList: MoviesList[]) => {
      this.moviesList = moviesList;
    })
    // this.moviesService.get('e80d5a37-620e-4be2-92b9-fb1f5262494f').subscribe((data) => {
    //   console.log(data);
    // })
  }
   


}
