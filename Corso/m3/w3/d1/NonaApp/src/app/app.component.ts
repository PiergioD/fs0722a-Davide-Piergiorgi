import { Component } from '@angular/core';

// import user interfaccia, il srrvice e subscriptiuon
import { User } from './interface/user';
import { UsersService } from './services/users.service';
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'NonaApp';

  // variabile che ipmacchettera i dati
  newUser: {
    first_name: string;
    last_name: string;
  } = {
    first_name: '',
    last_name: '',
  };
  // inizializzo una istanza vuota!

  sub!: Subscription;

  // array in cui ci saranno gli users dall'api
  users!: User[];

  // aggiungiamo il constructor nell app component
  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {
    this.recuperaUtenti();
  }

  // prendo gli utenti dall'api e li mettto nel array users!
  recuperaUtenti() {
    this.sub = this.userSrv.get().subscribe((ris) => {
      console.log(ris);
      this.users = ris;
    });
  }

  creaUtente() {
    // this. newUser sarà popolato dai dati del form! che verrà caricato nell'array degli users
    this.sub = this.userSrv.post(this.newUser).subscribe((res) => {
      console.log(res);
      this.users?.push(res);
    });
  }

  // chiamo nel service il metodo delete che utilizza l'id come parametro!
  cancellaUtente(id: number) {
    this.sub = this.userSrv.delete(id).subscribe(() => {
      this.users = this.users?.filter((user) => user.id != id);
      console.log(`utente ${id} cancellato!`);
    });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
