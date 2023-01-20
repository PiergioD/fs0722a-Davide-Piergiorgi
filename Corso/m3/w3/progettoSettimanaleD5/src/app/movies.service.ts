import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';

export interface Movie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

@Injectable({
  providedIn: 'root',
})
export class MoviesService {
  Url = 'http://localhost:4201/api/movies-popular';
  private movieSub = new BehaviorSubject<Movie[]>([]);
  movies$ = this.movieSub.asObservable();

  constructor(private http: HttpClient) {}

  getMovies(){
    return this.http.get<Movie[]>(this.Url).pipe(tap((data)=>{
      this.movieSub.next(data)
    }))

  }
}
