import { Injectable } from '@angular/core';

// importo questo per fare la chiamata
import { HttpClient } from '@angular/common/http';
import { User } from '../interface/user';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private http: HttpClient) {}

  get() {
    // impacchetterà un array di oggetti
    // quando ti arrivano i risultati infilali in un map(pipe)
    return this.http
      .get<{ data: User[] }>('https://reqres.in/api/users')
      .pipe(map((ris) => ris.data));
  }

  // in questa vr newUser non ci sarà tutto user, ma parziale, non ti arrivvano tutti i dati, quelli che non ti arrivano valorizzateli tu vuoti
  post(newUser: Partial<User>) {
    // dal momemnto che non possiamo tutti i dati, avvisiamo l'aaplicazione che arriveranno dei dati parziali: quelli che non arrivvano sarano comunque valorizzati con strringhe vuote
    return this.http.post<User>('https://reqres.in/api/users', newUser);
  }

  delete(id: number) {
    return this.http.delete(`https://reqres.in/api/users/${id}`);
  }
}
