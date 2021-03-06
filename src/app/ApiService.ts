import {Injectable} from "@angular/core";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, throwError} from "rxjs";
import {retry, catchError} from "rxjs/operators";
import {
  Actividad,
  Empleado,
  FiltrosBE, LineaNegocio,
  Proyecto,
  RangoFechas,
  RegEmpleadoXProyecto, RegHorasXLinea,
  RegHorasXProyecto, RegPlanVSRep,
  RegTablaEmp,
  FiltrosBP,
  Cliente, Datos, ContactoCliente, FiltroEmpleadoProyecto, RegTablaAct, EmpleadoXProyecto

} from "./model";
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

  constructor(private http: HttpClient) {
  }

  buscarEmpleado(data: FiltrosBE): Observable<RegTablaEmp[]> {
    return this.http.post<RegTablaEmp[]>(this.baseurl + 'busqueda-empleados', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerProyectos(): Observable<Proyecto[]> {
    return this.http.post<Proyecto[]>(this.baseurl + 'obtener-proyectos', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerRegsEmpleadoXProyecto(data: Proyecto): Observable<RegEmpleadoXProyecto[]> {
    return this.http.post<RegEmpleadoXProyecto[]>(this.baseurl + 'horas-empleado-proyecto', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerActividades(data: FiltroEmpleadoProyecto): Observable<Actividad[]> {
    return this.http.post<Actividad[]>(this.baseurl + 'obtener-actividades', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerJefesProyecto(): Observable<Empleado[]> {
    return this.http.post<Empleado[]>(this.baseurl + 'obtener-jefes-proyecto', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerOperarios(): Observable<Empleado[]> {
    return this.http.post<Empleado[]>(this.baseurl + 'obtener-empleados', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  registrarHoras(actividad: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.baseurl + 'insertar-actividad', actividad, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerRegsHorasXProyecto(data: RangoFechas): Observable<RegHorasXProyecto[]> {
    return this.http.post<RegHorasXProyecto[]>(this.baseurl + 'obtener-horas-registradas-proyecto', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerColaboradores(data: Proyecto): Observable<Empleado[]> {
    return this.http.post<Empleado[]>(this.baseurl + 'obtener-colaboradores', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerRegsHorasXLinea(data: RangoFechas): Observable<RegHorasXLinea[]> {
    return this.http.post<RegHorasXLinea[]>(this.baseurl + 'tabla-lineas', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerLineas(): Observable<LineaNegocio[]> {
    return this.http.post<LineaNegocio[]>(this.baseurl + 'obtener-lineas', this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerRegsPlanVSRep(data: Proyecto): Observable<RegPlanVSRep[]> {
    return this.http.post<RegPlanVSRep[]>(this.baseurl + 'proyecto-registrado-planificado', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerCargos(): Observable<any[]> {
    return this.http.post<Empleado[]>(this.baseurl + 'obtener-cargos', null, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  insertarEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.baseurl + 'insertar-empleado', empleado, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  buscarProyectos(filtros: FiltrosBP): Observable<FiltrosBP[]> {
    return this.http.post<FiltrosBP[]>(this.baseurl + 'busqueda-proyectos', filtros, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerClientes(): Observable<Cliente[]> {
    return this.http.post<Cliente[]>(this.baseurl + 'obtener-clientes', null, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  insertarProyecto(data: Datos): Observable<Datos> {
    return this.http.post<Datos>(this.baseurl + 'insertar-proyecto', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  actualizarActividad(datos: Actividad): Observable<Actividad> {
    return this.http.post<Actividad>(this.baseurl + 'actualizar-actividad', datos, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  registrarContactoCliente(data: ContactoCliente): Observable<ContactoCliente> {
    return this.http.post<ContactoCliente>(this.baseurl + 'insertar-contacto-cliente', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  registrarCliente(data: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.baseurl + 'insertar-cliente', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  login(datos: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.baseurl + 'validar-login', datos, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }

  obtenerRegsActividad(data: Empleado): Observable<RegTablaAct[]> {
    return this.http.post<RegTablaAct[]>(this.baseurl + 'obtener-registros-actividad', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
  insertarEmpleadoXProyecto(data: EmpleadoXProyecto):Observable<EmpleadoXProyecto> {
    return this.http.post<EmpleadoXProyecto>(this.baseurl + 'insertar-empleados-proyecto', data, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.errorHandl)
      );
  }
}
