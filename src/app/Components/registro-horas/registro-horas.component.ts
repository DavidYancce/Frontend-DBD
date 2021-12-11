import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Actividad, Proyecto} from "../../model";
import {ProyectoComponent} from "../proyecto/proyecto.component";

@Component({
  selector: 'app-registro-horas',
  templateUrl: './registro-horas.component.html',
  styleUrls: ['./registro-horas.component.scss']
})
export class RegistroHorasComponent implements OnInit {
  listaActividades: Actividad[] = [];
  listaProyectos: Proyecto[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerActividades(),
    this.obtenerProyectos()
  }
  obtenerActividades(): void{
    this.service.obtenerActividades().subscribe((data)=>{
      this.listaActividades = data;
      console.log(this.listaActividades)
    });
  }
  obtenerProyectos(): void{
    this.service.obtenerProyectos().subscribe((data)=>{
      this.listaProyectos = data;
    });
  }
}
