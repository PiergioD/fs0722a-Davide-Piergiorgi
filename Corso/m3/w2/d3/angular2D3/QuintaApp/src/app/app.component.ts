import { Component } from '@angular/core';
import { User } from './interface/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'QuintaApp';

  users: User[] = [];

  onAddMAn(user: User) {
    this.users.push(user);
  }

  onAddWoMAn(user: User) {
    this.users.push(user);
  }
}
