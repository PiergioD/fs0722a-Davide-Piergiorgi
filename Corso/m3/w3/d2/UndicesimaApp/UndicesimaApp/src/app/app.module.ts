import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importiamo i reactive forms
import { ReactiveFormsModule } from '@angular/forms';

import AppComponent from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
