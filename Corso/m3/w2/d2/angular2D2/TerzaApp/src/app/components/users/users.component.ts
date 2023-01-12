import { Component, OnInit } from '@angular/core';

// importo userservice e user
import { UsersService } from 'src/app/service/users.service';
import { User } from 'src/app/interface/user.interface';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  users: User[] = this.userSrv.getUsers();

  // dichiaro presenza del service nel constr
  constructor(private userSrv: UsersService) {}

  ngOnInit(): void {}
}
