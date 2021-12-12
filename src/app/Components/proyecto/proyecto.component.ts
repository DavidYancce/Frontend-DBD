import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Empleado, Proyecto, Cliente, LineaNegocio} from "../../model";

@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  listaJefes: Empleado[] = [];
  listaOperarios: Empleado[] = [];
  listaProyectos: Proyecto[] = [];
  listaClientes: Cliente[] = [];
  listaLineas: LineaNegocio[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerJefesProyecto(),
    this.obtenerOperarios(),
    this.obtenerProyectos(),
    this.obtenerClientes(),
    this.obtenerLineas()
  }
  obtenerJefesProyecto(): void{
    this.service.obtenerJefesProyecto().subscribe((data)=>{
      this.listaJefes = data;
    });
  }
  obtenerClientes(): void{
    this.service.obtenerClientes().subscribe((data)=>{
      this.listaClientes = data;
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
  obtenerLineas(): void{
    this.service.obtenerLineas().subscribe((data)=>{
      console.log(data);
      this.listaLineas = data;
    });
  }
}
