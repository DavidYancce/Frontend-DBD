import { Component, OnInit } from '@angular/core';
import {ApiService} from "../../ApiService";
import {FiltrosBE, RegTablaEmp} from "../../model";
import {stringify} from "@angular/compiler/src/util";

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.scss']
})
export class EmpleadoComponent implements OnInit {
  filtro: FiltrosBE = {
    dni: "",
    nombreCompleto: "",
    apellidoMaterno: "",
    apellidoPaterno: "",
    rol: ""
  };
  listaRegistros: RegTablaEmp[] = [];
  constructor(private service: ApiService) { }

  ngOnInit(): void {
  }
  buscarEmpleado(): void{
    let filtros: FiltrosBE = {
      dni: this.filtro.dni,
      nombreCompleto: this.filtro.nombreCompleto,
      apellidoPaterno: this.filtro.apellidoPaterno,
      apellidoMaterno: this.filtro.apellidoMaterno,
      rol: this.filtro.rol
    };
    this.service.buscarEmpleado(filtros).subscribe((data)=>{
      this.listaRegistros = data;
    });
  }
}
