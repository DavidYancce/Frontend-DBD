import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {
  FiltrosBE,
  LineaNegocio,
  Proyecto,
  RangoFechas,
  RegEmpleadoXProyecto,
  RegHorasXLinea,
  RegHorasXProyecto, RegPlanVSRep
} from "../../model";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  listaProyectos: Proyecto[] = [];
  listaLineas: LineaNegocio[] = [];
  proyectoSeleccionado : Proyecto = {
    idProyecto: 0,
    idLinea: 0,
    estado: "",
    nombreProyecto: "",
    RUC: "",
    fechaInicio: "",
    fechaFin: ""
  };
  lineaSeleccionada : LineaNegocio = {
    idLinea: 0,
    nombreLinea: ""
  };
  listaRegistros: RegEmpleadoXProyecto[] = [];
  rangFechas: RangoFechas = {
    fechaInicio: "",
    fechaFin: ""
  };
  rangFechasInit: RangoFechas = {
    fechaInicio: "1800-01-01",
    fechaFin: "2099-12-31"
  };
  regsHP: RegHorasXProyecto[] = [];
  regsPR: RegPlanVSRep[] = [];
  regsHL: RegHorasXLinea [] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
    this.obtenerLineas();
    this.obtenerRegsPlanVSRep();
    this.obtenerRegsHorasXProyectoInit();
    this.obtenerRegsEmpleadoXProyecto();
    this.obtenerRegsHorasXLineaInit();
  }
  obtenerProyectos(): void{
    this.service.obtenerProyectos().subscribe((data)=>{
      this.listaProyectos = data;
    });
  }
  obtenerRegsEmpleadoXProyecto(): void{
    let proyecto: Proyecto ={
      idProyecto: this.proyectoSeleccionado.idProyecto,
      idLinea: this.proyectoSeleccionado.idLinea,
      estado: this.proyectoSeleccionado.estado,
      nombreProyecto: this.proyectoSeleccionado.nombreProyecto,
      RUC: this.proyectoSeleccionado.RUC,
      fechaInicio: this.proyectoSeleccionado.fechaInicio,
      fechaFin: this.proyectoSeleccionado.fechaFin
    }
    this.service.obtenerRegsEmpleadoXProyecto(proyecto).subscribe((data)=>{
      this.listaRegistros = data;
    });
  }
  obtenerRegsHorasXProyecto(): void{
    let fechas: RangoFechas ={
      fechaInicio: this.rangFechas.fechaInicio,
      fechaFin: this.rangFechas.fechaFin
    }
    this.service.obtenerRegsHorasXProyecto(fechas).subscribe((data)=>{
      this.regsHP = data;
    });
  }
  obtenerRegsHorasXProyectoInit(): void{
    let fechas: RangoFechas ={
      fechaInicio: this.rangFechasInit.fechaInicio,
      fechaFin: this.rangFechasInit.fechaFin
    }
    this.service.obtenerRegsHorasXProyecto(fechas).subscribe((data)=>{
      this.regsHP = data;
    });
  }
  obtenerRegsHorasXLinea(): void{
    let fechas: RangoFechas ={
      fechaInicio: this.rangFechas.fechaInicio,
      fechaFin: this.rangFechas.fechaFin
    }
    this.service.obtenerRegsHorasXLinea(fechas).subscribe((data)=>{
      this.regsHL = data;
    });
  }
  obtenerRegsHorasXLineaInit(): void{
    let fechas: RangoFechas ={
      fechaInicio: this.rangFechasInit.fechaInicio,
      fechaFin: this.rangFechasInit.fechaFin
    }
    this.service.obtenerRegsHorasXLinea(fechas).subscribe((data)=>{
      this.regsHL = data;
    });
  }
  obtenerLineas(): void{
    this.service.obtenerLineas().subscribe((data)=>{
      this.listaLineas = data;
    });
  }
  obtenerRegsPlanVSRep(): void{
    let proyecto: Proyecto ={
      idProyecto: this.proyectoSeleccionado.idProyecto,
      idLinea: this.proyectoSeleccionado.idLinea,
      estado: this.proyectoSeleccionado.estado,
      nombreProyecto: this.proyectoSeleccionado.nombreProyecto,
      RUC: this.proyectoSeleccionado.RUC,
      fechaInicio: this.proyectoSeleccionado.fechaInicio,
      fechaFin: this.proyectoSeleccionado.fechaFin
    }
    this.service.obtenerRegsPlanVSRep(proyecto).subscribe((data)=>{
      this.regsPR = data;
    });
  }
}
