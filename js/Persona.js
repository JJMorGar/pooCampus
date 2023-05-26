class Persona {
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
    console.log(`hola soy ${this.#nombre}`);
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
    console.log(`estoy estudiando ${this.#carrera} `);
  }
}
