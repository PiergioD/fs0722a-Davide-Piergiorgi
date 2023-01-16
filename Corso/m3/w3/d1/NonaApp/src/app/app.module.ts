import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// importiamo module e httopclient
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// importiamo gli interceptors
import { OutInterceptor } from './interceptors/out.interceptor';
import { LogInterceptor } from './interceptors/log.interceptor';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [
    // scrivo nel providers in questo modo gli interceptors
    // gli interceptors dichiarati tra i provisders id servizi tercetteranno TUTTE le chiamate http per il solo fatto di esistere, non vanno iniettati nei servivce che effettuano le chiamate
    {
      provide: HTTP_INTERCEPTORS,
      useClass: OutInterceptor,
      multi: true,
    },
    { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
