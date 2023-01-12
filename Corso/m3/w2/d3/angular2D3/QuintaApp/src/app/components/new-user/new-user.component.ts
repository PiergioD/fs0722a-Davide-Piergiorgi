import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/interface/user.interface';
@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  // variabili che riceveranno dati dal form

  // l'emitter utilizzas interfaccia User
  @Output() OnManCreated = new EventEmitter<User>();
  @Output() OnWoManCreated = new EventEmitter<User>();

  newName = '';
  newSurname = '';
  newEta = 0;
  constructor() {}

  // i due metodi che dovranno essere eventemitter
  onAddMAn() {
    this.OnManCreated.emit({
      name: this.newName,
      surname: this.newSurname,
      sex: 'Uomo',
      eta: this.newEta,
    });
  }

  onAddWoMAn() {
    this.OnWoManCreated.emit({
      name: this.newName,
      surname: this.newSurname,
      sex: 'Donna',
      eta: this.newEta,
    });
  }

  // questi due metodi , scateni dal click, attiveranno due event emiter che metteranno un oggetto impachettato come linterfaccia e lo manderanno a chi lo riceverà --> user-card(grazie ad output)
  ngOnInit(): void {}
}
