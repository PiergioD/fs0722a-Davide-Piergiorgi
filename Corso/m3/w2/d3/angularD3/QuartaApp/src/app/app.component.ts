import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'QuartaApp';

  users = [
    {
      nome: 'mario',
      cognome: 'Rossi',
    },
    {
      nome: 'Albo',
      cognome: 'Baglio',
    },
    {
      nome: 'Giovanni',
      cognome: 'Storti',
    },
    {
      nome: 'Eleuterio',
      cognome: 'Coppa di rame',
    },
  ];
}
