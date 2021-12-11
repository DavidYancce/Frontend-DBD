import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {retry, catchError} from "rxjs/operators";
import {Actividad, FiltrosBE, Proyecto, RegEmpleadoXProyecto, RegTablaEmp} from "./model";
@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseurl = 'http://127.0.0.1:8090/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json;charset=utf-8'
    })
  };
  // @ts-ignore
  errorHandl(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
  constructor(private http: HttpClient) { }

  buscarEmpleado(data: FiltrosBE): Observable<RegTablaEmp[]>{
    return this.http.post<RegTablaEmp[]>(this.baseurl + 'busqueda-empleados', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  obtenerProyectos(): Observable<Proyecto[]>{
    return this.http.post<Proyecto[]>(this.baseurl + 'obtener-proyectos', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  obtenerRegsEmpleadoXProyecto(data: Proyecto): Observable<RegEmpleadoXProyecto[]>{
    return this.http.post<RegEmpleadoXProyecto[]>(this.baseurl + 'horas-empleado-proyecto', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  obtenerActividades(): Observable<Actividad[]>{
    return this.http.post<Actividad[]>(this.baseurl + 'obtener-actividades', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
}
