import { Component, OnInit } from '@angular/core';

import { ApiService } from '../../ApiService';
import { Actividad, Empleado, Proyecto } from '../../model';
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

  listaColaboradores: Empleado[] = [];
  proyecto: Proyecto = {
    idProyecto: 0,
    idLinea: 0,
    estado: '',
    nombreProyecto: '',
    RUC: '',
    fechaInicio: '',
    fechaFin: '',
  };

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
    data.descripcion = this.descripcion;
    data.dniEjecutor = '44131494';
    data.idProyecto = this.idProyecto;
    data.idActividad = this.idActividad;
    data.tiempoRequerido = this.tiempoRequerido;
    data.fechaIngresada = this.fechaIngresada;
    console.log(data);
    this.service.registrarHoraNoPlanificado(data).subscribe((data) => {
      console.log(data);
    });
  }

  obtenerColaboradores(): void {
    let proyecto: Proyecto = {
      idProyecto: this.proyecto.idProyecto,
      idLinea: this.proyecto.idLinea,
      estado: this.proyecto.estado,
      nombreProyecto: this.proyecto.nombreProyecto,
      RUC: this.proyecto.RUC,
      fechaInicio: this.proyecto.fechaInicio,
      fechaFin: this.proyecto.fechaFin,
    };
    this.service
      .obtenerColaboradores(proyecto)
      .subscribe((data: Empleado[]) => {
        this.listaColaboradores = data;
      });
  }
}
