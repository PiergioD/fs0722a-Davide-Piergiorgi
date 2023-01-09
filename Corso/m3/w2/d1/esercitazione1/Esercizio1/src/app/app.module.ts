import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PrimoComponenteComponent } from './primo-componente/primo-componente.component';
import { SecondoComponenteComponent } from './secondo-componente/secondo-componente.component';
import { TerzoComponenteComponent } from './terzo-componente/terzo-componente.component';
import { QuartoComponenteComponent } from './quarto-componente/quarto-componente.component';
import { QuintoComponenteComponent } from './quinto-componente/quinto-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    PrimoComponenteComponent,
    SecondoComponenteComponent,
    TerzoComponenteComponent,
    QuartoComponenteComponent,
    QuintoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
