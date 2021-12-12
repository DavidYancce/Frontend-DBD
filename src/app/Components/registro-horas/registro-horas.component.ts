import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../ApiService";
import {Actividad, Empleado, Proyecto} from "../../model";
import {ProyectoComponent} from "../proyecto/proyecto.component";


@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss'],
})
export class RegistroHorasComponent implements OnInit {
  listaActividades: Actividad[] = [];
  listaProyectos: Proyecto[] = [];
  actividadPlanReg: Actividad = {
    fechaIngresada: 'this.fechaIngresada',
    tiempoRequerido: 0,
    descripcion: '',
    idProyecto: 0,
    dniEjecutor: '44131494', //cambiar por el de localstorage
    dniPlanificador: '',
    fechaPlanificada: '',
    tiempoPlanificado: 0,
    idActividad: 0,
    planificado: 1
  }
  idProyecto: number = 0;
  idActividad: number = 0;
  fechaIngresada: string = '';
  tiempoRequerido: number = 0;
  descripcion: string = '';

  idProyecto2: number = 0;
  dniEjecutor2: string="";
  fechaPlanificada2: string = '';
  tiempoPlanificado2: number = 0;
  descripcion2: string = '';

  listaColaboradores: Empleado[] = [];
  proyecto: Proyecto ={
    idProyecto: 0,
    idLinea: 0,
    estado: "",
    nombreProyecto: "",
    RUC: "",
    fechaInicio: "",
    fechaFin: ""
  }
  constructor(private service: ApiService) { }


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
    data.dniEjecutor='44131494' //cambiar por el de localstorage
    data.idProyecto=this.idProyecto
    data.idActividad=this.idActividad
    data.tiempoRequerido=this.tiempoRequerido
    data.fechaIngresada = this.fechaIngresada
    this.service.registrarHoras(data).subscribe(data=>{
      console.log(data);
    })
  }
  registrarPlanificado():void{
    const data2: Actividad = new Actividad();
    data2.descripcion=this.descripcion2
    data2.dniEjecutor=this.dniEjecutor2
    data2.idProyecto=this.proyecto.idProyecto
    data2.fechaPlanificada=this.fechaPlanificada2
    data2.tiempoPlanificado=this.tiempoPlanificado2
    data2.dniPlanificador='44131494'//cambiar por el de localstorage
    data2.planificado=1
    //console.log(data2)
    this.service.registrarHoras(data2).subscribe(data2=>{
      console.log(data2);
    })
  }
  obtenerColaboradores(): void{
    let proyecto: Proyecto ={
      idProyecto: this.proyecto.idProyecto,
      idLinea: this.proyecto.idLinea,
      estado: this.proyecto.estado,
      nombreProyecto: this.proyecto.nombreProyecto,
      RUC: this.proyecto.RUC,
      fechaInicio: this.proyecto.fechaInicio,
      fechaFin: this.proyecto.fechaFin
    }
    this.service.obtenerColaboradores(proyecto).subscribe((data)=>{
      this.listaColaboradores = data;
    });
  }
  actualizarActividad(): void{
    let actividad: Actividad ={
      fechaIngresada: this.fechaIngresada,
      tiempoRequerido: this.tiempoRequerido,
      descripcion: this.descripcion,
      idProyecto: this.idProyecto,
      dniEjecutor: '44131494', //cambiar por el de localstorage
      dniPlanificador: '',
      fechaPlanificada: '',
      tiempoPlanificado: 0,
      idActividad: this.idActividad,
      planificado: 1
    }
    this.service.actualizarActividad(actividad).subscribe((data)=>{
      this.actividadPlanReg = data;
    });
  }
}
