import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {FiltrosBE, Proyecto, RangoFechas, RegEmpleadoXProyecto, RegHorasXProyecto} from "../../model";

@Component({
  selector: 'app-reporte',
  templateUrl: './reporte.component.html',
  styleUrls: ['./reporte.component.scss']
})
export class ReporteComponent implements OnInit {
  listaProyectos: Proyecto[] = [];
  proyectoSeleccionado : Proyecto = {
    idProyecto: 0,
    idLinea: 0,
    estado: "",
    nombreProyecto: "",
    RUC: "",
    fechaInicio: "",
    fechaFin: ""
  };
  listaRegistros: RegEmpleadoXProyecto[] = [];
  rangFechas: RangoFechas = {
    fechaInicio: "",
    fechaFin: ""
  };
  regsHP: RegHorasXProyecto[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerProyectos();
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
}
