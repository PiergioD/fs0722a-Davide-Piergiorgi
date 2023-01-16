import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Foto } from './foto';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FotoService {
  //variabili observer
  clickSubj = new Subject(); //origine comando next
  clickObs = this.clickSubj.asObservable(); //dove aggiungiamo subscriber

  constructor(private http: HttpClient) {}

  //funzione per recuperare json
  get() {
    return this.http
      .get<Foto[]>('https://jsonplaceholder.typicode.com/photos').pipe(map((ris) => ris));
  }

  //funzione per cancellare elemento dall'array tramite il proprio id
  delete(id: number) {
    return this.http.delete(
      `https://jsonplaceholder.typicode.com/photos/${id}`
    );
  }

  //funzione per comando next
  addC(){
    this.clickSubj.next(null)
  }
}

//https://jsonplaceholder.typicode.com/photos
