import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appColora]',
})
export class ColoraDirective {
  // chiamo elemento generico e sarà rosso in input come dault color
  @Input() defaultColor: string = 'red';
  //quando verra applicata la direttiva ci arrivera un newCOlor
  @Input('appColora') newColor: string = 'black';
  // fa il binding della proprreita color del testo che usera questa direttiva
  @HostBinding('style.color') color: string = 'black';
  // anche di active
  @HostBinding('class.active') active: boolean = false;

  // sono in ascolto di due event, mousenter e mouseleave
  // mouseenter sarò newCOlor
  @HostListener('mouseenter') mouseEnter() {
    this.color = this.newColor;
    this.active = true;
  }

  // mouseleave ritorna il colore come era
  @HostListener('mouseleave') mouseLeave() {
    this.color = this.defaultColor;
    this.active = false;
  }
  constructor(private ref: ElementRef) {}

  ngOnInit(): void {
    console.log(this.ref);
    this.color = this.defaultColor;
  }
}

//la direttiva deve agire su un elemento html! importa element ref che intercetta un leemento nativo della vista! ritorna il renedering di uno specifico elemento-> tag html

// ci serve un interfaccia che collega elemento del dom che forinisce dei metadata di configurazione--> Hostlistener

// ascolta quale elemento del dom che sta chiamando e con HostBinding fa collegamento dei metadati

// con input manderemo le direttive che stanno qua dentro
