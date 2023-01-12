import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// importo il router module e route
import { RouterModule, Route } from '@angular/router';

import { AppComponent } from './app.component';
import { UsersComponent } from './components/users/users.component';
import { UserComponent } from './components/user/user.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { HomeComponent } from './components/home/home.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: 'id',
        component: UserComponent,
      },
    ],
  },
  {
    // qualsiasi path che non sia il precedente
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    NotFoundComponent,
    HomeComponent,
  ],
  // router module dice di gestire le rotte! usando una sorta di menu di navigazione della variabile routes
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
