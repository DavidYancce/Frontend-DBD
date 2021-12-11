import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import { AppComponent } from './app.component';
import { BarraNavegacionComponent } from './Components/barra-navegacion/barra-navegacion.component';
import { HomeComponent } from './Components/home/home.component';
import { EmpleadoComponent } from './Components/empleado/empleado.component';
import { RegistroHorasComponent } from './Components/registro-horas/registro-horas.component';
import { ReporteComponent } from './Components/reporte/reporte.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './Components/login/login.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    BarraNavegacionComponent,
    HomeComponent,
    EmpleadoComponent,
    RegistroHorasComponent,
    ReporteComponent,
    LoginComponent,
    ProyectoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
