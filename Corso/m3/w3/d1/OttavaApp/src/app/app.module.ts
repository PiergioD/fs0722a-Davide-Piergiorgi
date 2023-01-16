import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Route, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NavbarComponent } from './navbar/navbar.component';
import { UsersComponent } from './users/users.component';

const routes: Route[] = [
  {
    path: 'utente',
    component: UserComponent,
  },
  {
    path: 'utenti',
    component: UsersComponent,
  },
];

@NgModule({
  declarations: [AppComponent, UserComponent, NavbarComponent, UsersComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
