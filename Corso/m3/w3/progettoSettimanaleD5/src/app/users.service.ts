import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from 'rxjs'
import {map, tap} from 'rxjs/operators'
import { AuthService } from './auth/auth.service';

export interface AuthData {
  accessToken: string;
  user: {
    email: string;
    id: number;
    name: string;
  };
}

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  URL:string='http://localhost:4201/api'
  


  constructor(private http:HttpClient, private as:AuthService) { }

  loadData(){
    let data:any = localStorage.getItem('user')
    if(!data){
      return null
    }
    return JSON.parse(data)
  }

}
