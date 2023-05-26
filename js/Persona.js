class Persona {
  static esMayorDeEdad(edad) {
    return edad >= 18
  }

  #nombre;
  #edad;
  #sexo;
  constructor({ nombre, edad, sexo }) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sexo = sexo;
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
  get sexo() {
    return this.#sexo;
  }
  set sexo(sexo) {
    this.#sexo = sexo;
  }
  saludar() {
    return `hola soy ${this.#nombre}`
  }
}

class Estudiante extends Persona {
  #carrera;
  constructor({ nombre, edad, sexo, carrera }) {
    super({ nombre, edad, sexo });
    this.#carrera = carrera;
  }
  get carrera() {
    return this.#carrera;
  }
  set carrera(carrera) {
    this.#carrera = carrera;
  }
  estudiar() {
    return `estoy estudiando ${this.#carrera} `
  }
}

const estudiante1 = new Estudiante({ nombre: "carlos", edad: 34, sexo: "a", carrera: "si" })
console.log(Persona.esMayorDeEdad(estudiante1.edad));


const formPersona = document.querySelector('#form-persona');
const formEstudiante = document.querySelector('#form-estudiante')
const citaPersona = document.querySelector('#cita-persona')
const citaEstudiante = document.querySelector('#cita-estudiante')

const cargarPersona = (e) => {
  e.preventDefault()
  const dataPersona = Object.fromEntries(new FormData(formPersona))
  const persona = new Persona(dataPersona)
  citaPersona.innerHTML = ""
  citaPersona.append(persona.saludar())
}
const cargarEstudiane = (e) => {
  e.preventDefault()
  const dataEstudiante = Object.fromEntries(new FormData(formEstudiante))
  const estudiante = new Estudiante(dataEstudiante)
  const button = e.submitter
  citaEstudiante.innerHTML = ""
  citaEstudiante.append(button.id === "estudiar" ? estudiante.estudiar() : estudiante.saludar())
}

formPersona.addEventListener('submit', cargarPersona)
formEstudiante.addEventListener('submit', cargarEstudiane)









