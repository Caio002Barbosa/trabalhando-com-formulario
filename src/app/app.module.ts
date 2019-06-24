import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { Formulario1Component } from './pages/formulario1/formulario1.component';
import { ErroComponent } from './pages/erro/erro.component';
import { Formulario2Component } from './pages/formulario2/formulario2.component';
import { Formulario3Component } from './pages/formulario3/formulario3.component';
import { Formulario4Component } from './pages/formulario4/formulario4.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    Formulario1Component,
    ErroComponent,
    Formulario2Component,
    Formulario3Component,
    Formulario4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
