import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../ApiService';
import { Actividad, Proyecto } from '../../model';
import { ProyectoComponent } from '../proyecto/proyecto.component';

@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss'],
})
export class RegistroHorasComponent implements OnInit {
  listaActividades: Actividad[] = [];
  listaProyectos: Proyecto[] = [];

   idProyecto: number = 0;
  idActividad: number = 0;
  fechaIngresada: string = '';
  tiempoRequerido: number = 0;
  descripcion: string = '';

  constructor(private service: ApiService) {}



  ngOnInit(): void {
    this.obtenerActividades();
     this.obtenerProyectos();
  }
  obtenerActividades(): void {
    this.service.obtenerActividades().subscribe((data) => {
      this.listaActividades = data;
    });
  }
  obtenerProyectos(): void {
    this.service.obtenerProyectos().subscribe((data) => {
      this.listaProyectos = data;
    });
  }
  registrarNoPlanificado(): void {
    const data: Actividad = new Actividad();
    data.descripcion=this.descripcion
    data.dniEjecutor='44131494'
    data.idProyecto=this.idProyecto
    data.idActividad=this.idActividad
    data.tiempoRequerido=this.tiempoRequerido
    data.fechaIngresada = this.fechaIngresada
    console.log(data)
    this.service.registrarHoraNoPlanificado(data).subscribe(data=>{
      console.log(data);
    })
  }
}
