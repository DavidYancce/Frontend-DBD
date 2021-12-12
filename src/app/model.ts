export class FiltrosBE{
  dni = "";
  nombreCompleto = "";
  apellidoPaterno = "";
  apellidoMaterno = "";
  rol = "";
}
export class RegTablaEmp{
  dni = "";
  nombre = "";
  apellidos = "";
  rol = "";
  telefono = "";
  correoEmpresarial = "";
  nombreProyecto = "";
}
export class Proyecto{
  idProyecto = 0;
  idLinea = 0;
  estado = "";
  nombreProyecto = "";
  RUC = "";
  fechaInicio = "";
  fechaFin = "";
}
export class RegEmpleadoXProyecto{
  empleado = "";
  tiempoRequerido = 0;
  proyecto = "";
}
export class Actividad{
  fechaIngresada = "";
  tiempoRequerido = 0;
  descripcion = "";
  idProyecto = 0;
  dniEjecutor = "";
  dniPlanificador = "";
  fechaPlanificada = "";
  tiempoPlanificado = 0;
  idActividad = 0;
  planificado = 0;
}
export class Empleado{
  dni = "";
  nombre1 = "";
  nombre2 = "";
  apellidoPaterno = "";
  apellidoMaterno = "";
  nombreCompleto = "";
  correoEmpresarial = "";
  contrasenia = "";
  telefono = "";
  genero = "";
  estado = "";
  direccion = "";
  fechaNacimiento = "";
  idCargo = 0;
  sueldo = 0;
}
export class RangoFechas{
  fechaInicio = "";
  fechaFin = "";
}
export class RegHorasXProyecto{
  nombreProyecto = "";
  sumaHoras = 0;
}
export class LineaNegocio{
  idLinea = 0;
  nombreLinea = "";
}
export class RegHorasXLinea{
  sumaHoras = 0;
  nombreLinea = "";
}
export class Cliente{
  RUC = "";
  razonSocial = "";
  pais = "";
  direccion = "";
}
