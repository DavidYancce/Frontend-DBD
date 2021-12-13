import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpleadoComponent } from './Components/empleado/empleado.component';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { ProyectoComponent } from './Components/proyecto/proyecto.component';
import { RegistroHorasComponent } from './Components/registro-horas/registro-horas.component';
import {ReporteComponent} from "./Components/reporte/reporte.component";

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'empleado', component: EmpleadoComponent },
  { path: 'registro-horas', component: RegistroHorasComponent },
  { path: 'proyecto', component: ProyectoComponent },
  { path: 'reporte', component: ReporteComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
