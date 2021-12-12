import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Empleado, Proyecto,FiltrosBP, Cliente, LineaNegocio } from "../../model";



@Component({
  selector: 'app-proyecto',
  templateUrl: './proyecto.component.html',
  styleUrls: ['./proyecto.component.scss']
})
export class ProyectoComponent implements OnInit {
  listaJefes: Empleado[] = [];
  listaOperarios: Empleado[] = [];
  listaProyectos: Proyecto[] = [];
  listaClientes: Cliente[] =[];
  listaLineaNegocios: LineaNegocio[]=[];
  listaProyectosFiltrados: FiltrosBP[]=[];
  filtros: FiltrosBP = {
    nombreProyecto: '',
    nombreJefe: '',
    lineaNegocio: '',
    razonSocial: '',
    estadoProyecto: '',
    idProyecto: 0
  }

  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerJefesProyecto(),
    this.obtenerOperarios(),
    this.obtenerProyectos(),
    this.obtenerClientes(),
    this.obtenerLineasNegocio(),
    this.buscarProyectos()

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

  obtenerLineasNegocio():void{
    this.service.obtenerLineas().subscribe(data=>{
      this.listaLineaNegocios=data;
      console.log(data)
    })
  }
  buscarProyectos():void{
    this.service.buscarProyectos(this.filtros).subscribe(data=>{
      this.listaProyectosFiltrados=data;
      console.log(this.filtros)
      console.log(data)
    })
  }
}
