export class FiltrosBE {
  dni = '';
  nombreCompleto = '';
  apellidoPaterno = '';
  apellidoMaterno = '';
  rol = '';
}
export class RegTablaEmp {
  dni = '';
  nombre = '';
  apellidos = '';
  rol = '';
  telefono = '';
  correoEmpresarial = '';
  nombreProyecto = '';
}
export class Proyecto {
  idProyecto = 0;
  idLinea = 0;
  estado = '';
  nombreProyecto = '';
  RUC = '';
  fechaInicio = '';
  fechaFin = '';
}
export class RegEmpleadoXProyecto {
  empleado = '';
  tiempoRequerido = 0;
  proyecto = '';
}
export class Actividad {
  fechaIngresada = '';
  tiempoRequerido = 0;
  descripcion = '';
  idProyecto = 0;
  dniEjecutor = '';
  dniPlanificador = '';
  fechaPlanificada = '';
  tiempoPlanificado = 0;
  idActividad = 0;
  planificado = 0;
}
export class Empleado {
  dni = '';
  nombre1 = '';
  nombre2 = '';
  apellidoPaterno = '';
  apellidoMaterno = '';
  nombreCompleto = '';
  correoEmpresarial = '';
  contrasenia = '';
  telefono = '';
  genero = '';
  estado = '';
  direccion = '';
  fechaNacimiento = '';
  idCargo = 0;
  sueldo = 0;
}
export class RangoFechas {
  fechaInicio = '';
  fechaFin = '';
}
export class RegHorasXProyecto {
  nombreProyecto = '';
  sumaHoras = 0;
}
export class LineaNegocio {
  idLinea = 0;
  nombreLinea = '';
}
export class RegHorasXLinea {
  sumaHoras = 0;
  nombreLinea = '';
}
export class FiltrosBP {
  nombreProyecto: string = '';
  nombreJefe: string = '';
  lineaNegocio: string = '';
  razonSocial: string = '';
  estadoProyecto: string = '';
  idProyecto: number = 0;
}
export class Cliente {
  ruc: string = '';
  razonSocial: string = '';
  pais: string = '';
  direccion: string = '';
}

export class RegPlanVSRep {
  proyecto = '';
  fechaReportada = '';
  fechaPlanificada = '';
  diferencia = '';
  tiempoRegistrado = '';
  tiempoPlanificado = '';
}
export class Datos {
  idProyecto: number=0;
  idLinea: number=0;
  nombreProyecto:string='';
  ruc:string='';
  fechaInicio:string='';
  fechaFin:string='';
  dni:string='';
}
