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
  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }

  validar(): void {
    this.service.login(this.datos_login).subscribe((data) => {
      console.log(data);
      if (data.dni != '') {
        location.assign('home'); //this.url+'login'
        localStorage.setItem('usuario', JSON.stringify(data))

      }
      else{
        console.log("No ingresaste")
      }
    });
  }

}
