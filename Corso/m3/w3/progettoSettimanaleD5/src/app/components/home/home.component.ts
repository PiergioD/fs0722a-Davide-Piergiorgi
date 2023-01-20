import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MoviesService } from 'src/app/movies.service';
import { Favorite, LikeService } from 'src/app/like.service';

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

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  movies: Movie[] = [];
  favMovies: Favorite[] = [];

  constructor(
    private ms: MoviesService,
    private http: HttpClient,
    private ls: LikeService
  ) {}

  ngOnInit(): void {
    this.ms.getMovies().subscribe((data) => {
      data.forEach((el) => {
        this.movies.push(el);
      });
      console.log(this.movies);
    });

    this.ls.user$.subscribe((outData)=>{
      if(outData){
        this.ls.getFavorites().subscribe((res)=>{
          this.favMovies = res.filter((f)=>{
            return f.userId == outData.user.id
          })
        })
      }
    })
  }


  like(obj: Movie) {
    if (this.isLiked(obj)) {
      return this.http.delete(`http://localhost:4201/favorites`)
    } else {
      return this.http.post("http://localhost:4201/api/favorites", obj)
      //nel sub aggiungi prefe
    }
  }

  isLiked(obj: Movie): boolean {
    if (
      this.favMovies.find((f) => {
        return f.movieId == obj.id;
      })
    ) {
      return true;
    }
    return false;
  }
}
