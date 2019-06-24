import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { Formulario1Component } from './pages/formulario1/formulario1.component';
import { Formulario2Component } from './pages/formulario2/formulario2.component';
import { Formulario3Component } from './pages/formulario3/formulario3.component';
import { Formulario4Component } from './pages/formulario4/formulario4.component';
import { ErroComponent } from './pages/erro/erro.component';

const routes: Routes = [
  { path: '',  redirectTo: '/home', pathMatch: 'full' },
  { path: 'home',         component: HomeComponent        },
  { path: 'formulario1',  component: Formulario1Component },
  { path: 'formulario2',  component: Formulario2Component },
  { path: 'formulario3',  component: Formulario3Component },
  { path: 'formulario4',  component: Formulario4Component },

  { path: '**', component:  ErroComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
