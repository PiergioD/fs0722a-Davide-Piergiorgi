import { Injectable } from '@angular/core';
import { User } from '../interface/user.interface';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private users: User[] = [
    {
      id: 1,
      nome: 'Banana',
      cognome: 'In Pigiama',
      email: 'banana@inPigiama.com',
    },
    {
      id: 2,
      nome: 'Eleuterio',
      cognome: 'coppaDirame',
      email: 'eleuterio@copadirame.com',
    },
  ];
  constructor() {}

  getUsers() {
    return this.users;
  }

  getUser(idUser: number) {
    return this.users.find((user) => user.id === idUser); // ricevo tutti gli oggetti dell'array in una variabile user ed estraggo l'oggetto che ha lo stesso id arrivato come parametro
  }
}
