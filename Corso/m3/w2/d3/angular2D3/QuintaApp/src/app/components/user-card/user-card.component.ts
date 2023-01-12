import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
})
export class UserCardComponent implements OnInit {
  // ricevera qualcosa che si chiama data, lo infilera qualcosa che si chiama element e lo usera nell html per fare data biinding
  @Input('data') element!: User;

  constructor() {}

  ngOnInit(): void {}
}
