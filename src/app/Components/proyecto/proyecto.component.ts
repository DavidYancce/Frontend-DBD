import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Empleado, Proyecto} from "../../model";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  listaJefes: Empleado[] = [];
  listaOperarios: Empleado[] = [];
  listaProyectos: Proyecto[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerJefesProyecto(),
    this.obtenerOperarios(),
    this.obtenerProyectos()
  }
  obtenerJefesProyecto(): void{
    this.service.obtenerJefesProyecto().subscribe((data)=>{
      this.listaJefes = data;
    });
  }
  obtenerOperarios(): void{
    this.service.obtenerOperarios().subscribe((data)=>{
      this.listaOperarios = data;
    });
  }
  obtenerProyectos(): void{
    this.service.obtenerProyectos().subscribe((data)=>{
      this.listaProyectos = data;
    });
  }
}
