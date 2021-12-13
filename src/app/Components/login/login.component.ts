import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import { ApiService } from '../../ApiService';
import { Empleado } from '../../model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
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
  datos_login: Empleado = {
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
  url = 'http://localhost:4200/';
  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

  validar(): void {
    let empleado_ingresado : Empleado= {
      correoEmpresarial: this.empleado.correoEmpresarial,
      contrasenia: this.empleado.contrasenia,
      dni: '',
      nombre1: '',
      nombre2: '',
      apellidoPaterno: '',
      apellidoMaterno: '',
      nombreCompleto: '',
      telefono: '',
      genero: '',
      estado: 'Contratado',
      direccion: '',
      fechaNacimiento: '',
      idCargo: 0,
      sueldo: 0,
    };
    this.service.login(empleado_ingresado).subscribe((data) => {
      this.datos_login = data;
    });
    if (this.datos_login.dni == '') {
      location.assign('login'); //this.url+'login'
    }
    else{
      location.assign(''); //this.url+''
    }
  }

}
