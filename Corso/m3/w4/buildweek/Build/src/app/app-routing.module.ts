import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { ModificaComponent } from './components/modifica/modifica.component';
import { CreaNuovoComponent } from './components/crea-nuovo/crea-nuovo.component';
import { HomeComponent } from './components/home/home.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'dettagli/:id',
    component: DettagliComponent,
  },
  {
    path: 'modifica/:id',
    component: ModificaComponent,
  },
  {
    path: 'nuovoPost',
    component: CreaNuovoComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
