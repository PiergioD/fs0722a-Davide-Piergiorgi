import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-eta',
  templateUrl: './eta.component.html',
  styleUrls: ['./eta.component.scss'],
})
export class EtaComponent implements OnInit {
  // riceve un valore in input che si chiamera eta
  @Input() eta!: number;
  // in out put butterò fuori il risulato di un metodo
  // app riceve eta, che il comp riceve in input, che quando la cambia tirera fuori in eventmitter che cambierà in ap.html
  @Output() etaChange = new EventEmitter<number>();
  constructor() {}

  add() {
    this.eta++;
    this.etaChange.emit(this.eta);
  }

  sott() {
    this.eta--;
    if (this.eta >= 0) {
      this.etaChange.emit(this.eta);
    } else {
      this.eta = 0;
    }
  }

  ngOnInit(): void {}
}
