import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../ApiService';
import { Empleado, FiltrosBE, RegTablaEmp } from '../../model';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss'],
})
export class EmpleadoComponent implements OnInit {
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
  cargoHere = 0;
  filtro: FiltrosBE = {
    dni: '',
    nombreCompleto: '',
    apellidoMaterno: '',
    apellidoPaterno: '',
    rol: '',
  };
  empleado: Empleado = {
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
    estado: 'Contratado',
    direccion: '',
    fechaNacimiento: '',
    idCargo: 0,
    sueldo: 0,
  };
  listaRegistros: RegTablaEmp[] = [];
  listaCargos: any[] = [];
  constructor(private service: ApiService) {}

  ngOnInit(): void {
    this.dataUsuario = JSON.parse(localStorage.getItem('usuario')||'')
    this.cargoHere=this.dataUsuario.idCargo;
    this.service.obtenerCargos().subscribe((data) => {
      this.listaCargos = data;
      console.log(data);
    });
    this.buscarEmpleado();
    this.obtenerOperarios();
  }
  buscarEmpleado(): void {
    let filtros: FiltrosBE = {
      dni: this.filtro.dni,
      nombreCompleto: this.filtro.nombreCompleto,
      apellidoPaterno: this.filtro.apellidoPaterno,
      apellidoMaterno: this.filtro.apellidoMaterno,
      rol: this.filtro.rol,
    };
    this.service.buscarEmpleado(filtros).subscribe((data) => {
      this.listaRegistros = data;
    });
  }
  insertarEmpleado():void {
    this.service.insertarEmpleado(this.empleado).subscribe(data => {
      console.log(data)
    });

  }
  obtenerOperarios():void {
    this.service.obtenerOperarios().subscribe(data => {
      console.log(data)
    })
  }
}
