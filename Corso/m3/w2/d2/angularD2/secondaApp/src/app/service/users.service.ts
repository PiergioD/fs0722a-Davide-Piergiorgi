// il service come il models interface non sono iniettabili! non sono documenti!

import { User } from '../modules/user';
import { Injectable } from '@angular/core';
@Injectable({
  providedIn: 'root',
})
// importando l'interfaccia, non ho bisogno di scrivere implements nella classe
export class UsersService {
  users: User[] = [];
  constructor() {}
  createUser(nome: string) {
    this.users.push({ nome, stato: 'occupato' });
    console.log(this.users);
  }

  updateUser(index: number, newStatus: string) {
    this.users[index].stato = newStatus;
  }
}
