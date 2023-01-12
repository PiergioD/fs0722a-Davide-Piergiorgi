import { Component, OnInit, ViewChild } from '@angular/core';
// deve visualizzare il componenete chidl!  importiamo!
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  // static stabilisce se deve essere statica o dinamica, e deve essere sempre cosi
  // si chiamerò child!

  // quale seleettore usare, se la vista deve essere statica
  @ViewChild(ChildComponent, { static: true }) child!: ChildComponent;
  constructor() {}

  ngOnInit(): void {}
}
