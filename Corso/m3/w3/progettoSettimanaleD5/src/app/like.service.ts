import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { AuthService } from './auth/auth.service';
import { MoviesService } from './movies.service';

export interface Favorite {
  userId: number;
  movieId: number;
  id: number;
}
export interface FavoData{
  movieId: number;
  userId:number;
}

@Injectable({
  providedIn: 'root',
})
export class LikeService {

  URL = 'http://localhost:4201/api/favorites';
  private favSub = new BehaviorSubject<null | Favorite[]>(null);
  favo = this.favSub.asObservable();
  isLoggedIn$ = this.as.user$.pipe(map((user) => !!user));
  user$ = this.as.user$;


  constructor(private as: AuthService, private http:HttpClient, private ms:MoviesService) {}

  getFavorites(){
    return this.http.get<Favorite[]>(this.URL).pipe(tap((data)=>{
      this.favSub.next(data)
    }))
  }

  liked(data:FavoData){
    return this.http.post(this.URL, data)
  }

}
