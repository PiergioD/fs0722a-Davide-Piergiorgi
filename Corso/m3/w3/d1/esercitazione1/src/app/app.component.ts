import { Component } from '@angular/core';
import { Foto } from './foto';
import { FotoService } from './foto.service';
import { Subscription, Observable, fromEvent } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  sub!: Subscription;
  fotoArr!: Foto[];

  constructor(private fotoSrv: FotoService) {}

  ngOnInit(): void {
    this.recuperaFoto(); //recupera array dal json al loading
  }

  //funzione per inserire json nel nostro array fotoArr
  recuperaFoto() {
    this.sub = this.fotoSrv.get().subscribe((ris) => {
      console.log(ris);
      this.fotoArr = ris;
    });
  }

  //funzione per cancellare card tramite id
  cancellaFoto(id: number) {
    this.sub = this.fotoSrv.delete(id).subscribe(() => {
      this.fotoArr = this.fotoArr?.filter((foto) => foto.id != id);
      console.log(this.fotoArr);
      console.log(`Foto ${id} cancellata :'(`);
    });
  }

  //funzione collegata al service
  addClick(){
    //this.fotoSrv.clickSubj.next(null)
    this.fotoSrv.addC()
   }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
//clickObservable: Observable<Event> = fromEvent(document,'click');
