import { Component, OnInit } from '@angular/core';

import {ApiService} from "../../ApiService";
import {Actividad, Empleado, FiltroEmpleadoProyecto, Proyecto, RegTablaAct} from "../../model";
import {ProyectoComponent} from "../proyecto/proyecto.component";
import {colors} from "@angular/cli/utilities/color";


@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss'],
})
export class RegistroHorasComponent implements OnInit {
  dataUsuario : Empleado ={
    dni: '',
    nombre1: '',
    nombre2: '',
    apellidoPaterno: '',
    apellidoMaterno: '',
    nombreCompleto: '',
    correoEmpresarial: '',
    contrasenia: '',
    telefono: '',
    genero: '',
    estado: '',
    direccion: '',
    fechaNacimiento: '',
    idCargo: 0,
    sueldo: 0
  };
  dniHere = "";
  cargoHere = 0;
  listaActividades: Actividad[] = [];
  listaProyectos: Proyecto[] = [];
  regsActividad: RegTablaAct[] = [];
  actividadPlanReg: Actividad = {
    fechaIngresada: '',
    tiempoRequerido: 0,
    descripcion: '',
    idProyecto: 0,
    dniEjecutor: '43373869', //cambiar por el de localstorage
    dniPlanificador: '',
    fechaPlanificada: '',
    tiempoPlanificado: 0,
    idActividad: 0,
    planificado: 1
  }
  actividadSeleccionada: Actividad = {
    fechaIngresada: '',
    tiempoRequerido: 0,
    descripcion: '',
    idProyecto: 0,
    dniEjecutor: '43373869',
    dniPlanificador: '',
    fechaPlanificada: '',
    tiempoPlanificado: 0,
    idActividad: 0,
    planificado: 0
  }
  parametrosInput: FiltroEmpleadoProyecto = {
    idProyecto: 0,
    dniEmpleado: ''
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
    this.dataUsuario = JSON.parse(localStorage.getItem('usuario')||'')
    this.dniHere=this.dataUsuario.dni;
    this.cargoHere=this.dataUsuario.idCargo;
    this.parametrosInput.dniEmpleado=this.dataUsuario.dni;
    console.log(this.dniHere);
    this.obtenerProyectos();
    this.obtenerRegsActividad();
  }
  //obtenerActividades(): void {
  //  this.service.obtenerActividades().subscribe((data) => {
  //    this.listaActividades = data;
  //  });
  //}
  obtenerProyectos(): void {
    this.service.obtenerProyectos().subscribe((data) => {
      this.listaProyectos = data;
    });
  }

  registrarNoPlanificado(): void {
    const data: Actividad = new Actividad();
    data.descripcion=this.actividadSeleccionada.descripcion
    data.dniEjecutor=this.dniHere //cambiar por el de localstorage
    data.idProyecto=this.parametrosInput.idProyecto
    data.idActividad=this.actividadSeleccionada.idActividad
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
    data2.dniPlanificador=this.dniHere//cambiar por el de localstorage
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
      descripcion: this.actividadSeleccionada.descripcion,
      idProyecto: this.parametrosInput.idProyecto,
      dniEjecutor: this.dniHere, //cambiar por el de localstorage
      dniPlanificador: '',
      fechaPlanificada: '',
      tiempoPlanificado: 0,
      idActividad: this.actividadSeleccionada.idActividad,
      planificado: 1
    }
    this.service.actualizarActividad(actividad).subscribe((data)=>{
      this.actividadPlanReg = data;
      this.obtenerRegsActividad();
      console.log(this.actividadPlanReg)
    });
  }
  actividadesXEmpleadoXProyecto(): void{
    let parametros: FiltroEmpleadoProyecto ={
      idProyecto: this.parametrosInput.idProyecto,
      dniEmpleado: this.parametrosInput.dniEmpleado
    }
    this.service.actividadesXEmpleadoXProyecto(parametros).subscribe((data)=>{
      this.listaActividades = data;
    });
  }
  obtenerRegsActividad(): void{
    let empleado: Empleado ={
      dni: this.dniHere,
      nombre1: '',
      nombre2: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      nombreCompleto: '',
      correoEmpresarial: '',
      contrasenia: '',
      telefono: '',
      genero: '',
      estado: '',
      direccion: '',
      fechaNacimiento: '',
      idCargo: 0,
      sueldo: 0
    }
    this.service.obtenerRegsActividad(empleado).subscribe((data)=>{
      this.regsActividad = data;
      console.log(data);
    });
  }
}
