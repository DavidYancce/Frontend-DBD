import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Actividad, Empleado, Proyecto} from "../../model";
import {ProyectoComponent} from "../proyecto/proyecto.component";

@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss']
})
export class RegistroHorasComponent implements OnInit {
  listaActividades: Actividad[] = [];
  listaProyectos: Proyecto[] = [];
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
    this.obtenerActividades(),
    this.obtenerProyectos()
  }
  obtenerActividades(): void{
    this.service.obtenerActividades().subscribe((data)=>{
      this.listaActividades = data;
    });
  }
  obtenerProyectos(): void{
    this.service.obtenerProyectos().subscribe((data)=>{
      this.listaProyectos = data;
    });
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
}
