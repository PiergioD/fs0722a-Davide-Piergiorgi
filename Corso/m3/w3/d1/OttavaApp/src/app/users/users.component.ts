import { Component, OnInit, importProvidersFrom } from '@angular/core';

// importiamo queste tre cose
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent implements OnInit {
  sub!: Subscription; // l'oggetto che sottoscriverà l'observable
  conteggio: number = 0; // variabile che riceverà il valore dell'observable(observer)

  constructor() {}

  ngOnInit(): void {
    const intervallo = new Observable((observer) => {
      // creo l'observable
      let count = 0;
      setInterval(() => {
        observer.next(count); // in una varabile chiamata observer , l'observable emette un valore
        if (count === 5) {
          observer.complete(); // completo l'observable al raggiungimento di un dato valore
          console.log('Observer Completato');
        }
        if (count > 3) {
          observer.error(new Error('Count è tropppo grande!'));
        }
        count++; // incremento valore meesso dal'observable
      }, 1000);
    });

    this.sub = intervallo
      .pipe(
        // sotto scrivo obersvable
        map((conta) => {
          // mapppo l'obserrvable
          this.conteggio = Number(conta); // incremento la var conteggio con il valore dell'obserbale
          return `Siamo al numbero ${conta}`;
        })
      )
      .subscribe(
        (numero) => {
          // sotto scrivo l'observalbe memoirizzando il vcalore in una var numero
          console.log(numero);
        },
        (error) => {
          console.log(error);
          alert(error); // in caso di errore, emetto l'errore, ma non BLOCCO il flusso
        },
        () => {
          console.log('observable completato'); // al completamento dell'bosrrvable stampo il completamento
        }
      );
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
    console.log('Observable scaricato!');
  }
}
