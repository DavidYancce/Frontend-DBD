import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {Empleado, Proyecto, FiltrosBP, Cliente, LineaNegocio, Datos, ContactoCliente, EmpleadoXProyecto} from "../../model";



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
  };
  dataProyecto: Datos ={
    idProyecto: 0,
    idLinea: 0,
    nombreProyecto: '',
    ruc: '',
    fechaInicio: '',
    fechaFin: '',
    dni: ''
  };
  dataCliente: Cliente ={
    ruc: '',
    razonSocial: '',
    pais: '',
    direccion: ''
  };
  dataContactoCliente: ContactoCliente ={
    nombreCompleto: '',
    telefono: '',
    correoElectronico: '',
    direccion: '',
    ruc: ''
  };
  dataEmpleadoXProyecto: EmpleadoXProyecto ={
    DNI: '',
    idProyecto: 0,
    rol: '',
    descripcion: ''
  };
  rol = "";
  descripcion = "";
  proyectoSeleccionado: Proyecto = {
    idProyecto: 0,
    idLinea: 0,
    estado: "",
    nombreProyecto: "",
    RUC: "",
    fechaInicio: "",
    fechaFin: ""
  };
  empleadoSeleccionado: Empleado = {
    dni : '',
    nombre1 : '',
    nombre2 : '',
    apellidoPaterno : '',
    apellidoMaterno : '',
    nombreCompleto : '',
    correoEmpresarial : '',
    contrasenia : '',
    telefono : '',
    genero : '',
    estado : '',
    direccion : '',
    fechaNacimiento : '',
    idCargo : 0,
    sueldo : 0
  }
  constructor(private service: ApiService) { }

  ngOnInit(): void {
    this.obtenerJefesProyecto(),
    this.obtenerOperarios(),
    this.obtenerProyectos(),
    this.obtenerClientes(),
    this.obtenerLineasNegocio(),
    this.buscarProyectos()
    console.log(JSON.parse(localStorage.getItem('usuario')||''));

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
    })
  }
  buscarProyectos():void{
    this.service.buscarProyectos(this.filtros).subscribe(data=>{
      this.listaProyectosFiltrados=data;
    })
  }
  insertarProyecto():void{
    console.log("hola")
    this.service.insertarProyecto(this.dataProyecto).subscribe(data=>{
      console.log(data)
    })
  }
  registrarContactoCliente():void{
    this.dataContactoCliente.ruc = this.dataCliente.ruc,
    console.log(this.dataContactoCliente)
    this.service.registrarContactoCliente(this.dataContactoCliente).subscribe(data=>{
      console.log(data)
    })
  }
  registrarCliente():void{
    console.log(this.dataCliente)
    this.service.registrarCliente(this.dataCliente).subscribe(data=>{
      console.log(data)
    })
  }
  registrarEmpleadoXProyecto():void{
    let empleadoxproyecto: EmpleadoXProyecto ={
      idProyecto: this.proyectoSeleccionado.idProyecto,
      DNI: this.empleadoSeleccionado.dni,
      rol: this.rol,
      descripcion: this.descripcion
    }
    this.service.insertarEmpleadoXProyecto(empleadoxproyecto).subscribe((data) =>{
      console.log(data);
      console.log(empleadoxproyecto);
      this.dataEmpleadoXProyecto = data;
    });
  }
}
