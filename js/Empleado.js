
class Empleado {
  static incrementId = 0;
  #idEmpleado;
  #nombre;
  #edad;
  #sueldo;
  constructor({ nombre, edad, sueldo }) {
    Empleado.incrementId +=1
    this.#idEmpleado = Empleado.incrementId
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sueldo = Number(sueldo);
  }
  get nombre() {
    return this.#nombre;
  }
  set nombre(nombre) {
    this.#nombre = nombre;
  }
  get edad() {
    return this.#edad;
  }
  set edad(edad) {
    this.#edad = edad;
  }
  get sueldo() {
    return this.#sueldo;
  }
  set sueldo(sueldo) {
    this.#sueldo = sueldo;
  }
  calcularSalarioAnual() {
    return this.#sueldo * 12;
  }
  generarIdEmpleado(){
    return this.#idEmpleado
  }
}

class Gerente extends Empleado {
  #departamento;

  constructor({ nombre, edad, sueldo, departamento }) {
    super({ nombre, edad, sueldo });
    this.#departamento = departamento;
  }

  get departamento() {
    return this.#departamento;
  }
  set departamento(departamento) {
    this.#departamento = departamento;
  }

  calcularSalarioAnual() {
    this.sueldo = this.sueldo + this.sueldo * 0.1;
    return super.calcularSalarioAnual();
  }
}

// estaticos id
const gerente = new Gerente({ nombre: "carlos", edad: 232, sueldo: 343 })
console.log(gerente.generarIdEmpleado());
const getente2 =new Gerente({ nombre: "carlos", edad: 232, sueldo: 343 })
console.log(getente2.generarIdEmpleado());

const $ = (element) => document.querySelector(element)
const $formEmpleado = $('#form-empleado')
const $formGerente = $('#form-gerente')
const $citaEmpleado = $('#cita-empleado')
const $citaGerente = $('#cita-gerente')

const cargarEmpleado = (e) => {
  e.preventDefault()
  const dataEmpleado = Object.fromEntries(new FormData($formEmpleado))
  const empleado1 = new Empleado(dataEmpleado)
  $citaEmpleado.innerHTML = ""
  $citaEmpleado.append(empleado1.calcularSalarioAnual())
}
const cargarGerente = (e) => {
  e.preventDefault()
  const dataGerente = Object.fromEntries(new FormData($formGerente))
  const gerente = new Gerente(dataGerente)
  $citaGerente.innerHTML = ''
  $citaGerente.append(gerente.calcularSalarioAnual())
}

$formEmpleado.addEventListener('submit', cargarEmpleado)
$formGerente.addEventListener('submit', cargarGerente)



