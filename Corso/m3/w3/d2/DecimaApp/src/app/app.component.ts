import { Component, ViewChild } from '@angular/core';
// viewchild permette di vedere, fare una querry sulla vista
// crea un gruppo di form di primo di livello!
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'DecimaApp';

  // static definisce fondamentalmente ricevere dati prima del change detetction
  // fai il binding di qualcosa che si chiamerà from, ricevi e infila in una var che si chiama form di tipo ngform
  @ViewChild('form', { static: true }) form!: NgForm;
  stampa: boolean = false;
  // elementi necessari per il form
  // oggettino per fare genera username bottone
  userForm = {
    defUserName: '',
    email: '',
    question: '',
  };

  generi = [
    {
      label: 'uomo',
      value: 'uomo',
    },
    {
      label: 'donna',
      value: 'donna',
    },
  ];

  risposta = '';

  user: any = {
    username: '',
    email: '',
    secret: '',
    sesso: '',
    risposta: '',
  };

  ngOnInit(): void {
    // è un observable!
    this.form.statusChanges?.subscribe((status) =>
      console.log('status del form: ', status)
    ); // ad ogni cambiamento del form verrà stampato in console lo stato del form(valid/invalid)
  }

  // metodo per bottone getusername
  generateUsername() {
    // il primo form è l'app component il seocndo è formgroup
    this.form.form.patchValue({
      userInfo: {
        email: 'pippo@pippo.com',
        username: 'pippo',
      },
    });
  }

  submit() {
    this.stampa = true;
    console.log('form inviato ', this.form);
    this.user.username = this.form.value.userInfo.username;
    this.user.email = this.form.value.userInfo.email;
    this.user.secret = this.form.value.userInfo.secret;
    this.user.sesso = this.form.value.userInfo.sesso;
    this.user.risposta = this.form.value.userInfo.risposta;

    this.form.reset();
  }
}
