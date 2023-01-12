import { Component, OnInit } from '@angular/core';
// importiamo la classe
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
  providers: [UsersService],
})
export class NewUserComponent implements OnInit {
  // il punto esclamativo serve a dire ad angular che questa var verra usata
  name!: string;
  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {}

  onNewUser(nome: string) {
    if (nome != undefined && nome.length > 0) {
      this.userSrv.createUser(nome);
    }
  }
}
