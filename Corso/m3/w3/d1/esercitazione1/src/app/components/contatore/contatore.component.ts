import { Component, OnInit } from '@angular/core';
import { FotoService } from 'src/app/foto.service';

@Component({
  selector: 'app-contatore',
  templateUrl: './contatore.component.html',
  styleUrls: ['./contatore.component.scss']
})
export class ContatoreComponent implements OnInit {

  clicks: number = 0;

  constructor(private fotoSrv:FotoService) { }

  ngOnInit(): void {
    //tramite questo l'observer si aggiorna in automatico
    this.fotoSrv.clickObs.subscribe((res) => {
      this.clicks++;
    });
  }

}
