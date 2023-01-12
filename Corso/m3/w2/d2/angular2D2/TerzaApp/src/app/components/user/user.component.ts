import { Component, OnInit } from '@angular/core';

// importo anche qui interfaccia  e service
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/interface/user.interface';

// elementi per estrrarre url e determinati parametri
import { ActivatedRoute, Params } from '@angular/router';

// è un observable, un oggetto che sottoscritto da qualcuno, si mette in ascolto del suo stato e comunica il suo cambiamento di stato!( come una promise: eseguire un compito ed eseguire qualcosa) é una promise estesa, puo eseguire piu cose
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss'],
})
export class UserComponent implements OnInit {
  // se il service non riesce a riempire user, user puo essere undefined!
  user!: User | undefined;
  sub!: Subscription;

  // usersrv e router sono nomi di convenzione
  constructor(private userSrv: UsersService, private router: ActivatedRoute) {}

  // init funziona quando faccio click sull elemento lista!

  // il componente user quando nasce(ngoninit) deve:
  // interecceta url-> leggere parametro url che corrisponde all'id-> chiamare metodo getuser del service passandogli l'id-> ricevere risposta dal service e stamparla
  ngOnInit(): void {
    this.sub = this.router.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.user = this.userSrv.getUser(id);
    });
  }

  // de sottoscrivere l'boservable on destroy
  ngOnDestroy(): void {
    this.sub.unsubscribe;
  }
}
