import { Component, OnInit } from '@angular/core';
import { Empleado } from 'src/app/model';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.scss']
})
export class BarraNavegacionComponent implements OnInit {

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
  idCargo=0;
  constructor() { }

  ngOnInit(): void {
    this.dataUsuario = JSON.parse(localStorage.getItem('usuario')||'')
    this.idCargo=this.dataUsuario.idCargo;
    console.log(this.idCargo);
  }
  cerrarSesion():void{
    location.assign('');
    localStorage.removeItem('usuario')
  }

}
