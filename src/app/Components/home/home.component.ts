import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }
  jefesProyecto: any = [];


  ngOnInit(): void {
    this.http.post<any>('http://localhost:8090/obtener-jefes-proyecto',null).subscribe(data => {
      for(var jefe of data){
        const _jefe={
          "dni":jefe.dni,
          "nombreCompleto": jefe.nombreCompleto
        }
        this.jefesProyecto.push(_jefe)
        console.log(this.jefesProyecto)
      }
    })

  }
  ///localhost:8090/obtener-jefes-proyecto

}
