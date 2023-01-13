import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appComparsa]',
})
export class ComparsaDirective {
  // agira direttamente sul template con template Ref
  // viewCOntainer rappresenta un container al quale puo essere agganciate una o piu vista
  constructor(private tRef: TemplateRef<any>, private cRef: ViewContainerRef) {}

  @Input() set appComparsa(variabile: boolean) {
    // prendi il template condiviso e fammelo vedere
    if (!variabile) {
      this.cRef.createEmbeddedView(this.tRef);
    } else {
      this.cRef.clear();
    }
  }
}
