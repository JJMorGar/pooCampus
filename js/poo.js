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

class Animal {
  #nombre;
  #edad;
  constructor({ nombre, edad }) {
    this.#nombre = nombre;
    this.#edad = edad;
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
  hacerSonido() {
    console.log(`hacer sonido`);
  }
}

class Perro extends Animal {
  #raza;
  constructor({ nombre, edad, raza }) {
    super({ nombre, edad });
    this.#raza = raza;
  }
  get raza() {
    return this.#raza;
  }
  set raza(raza) {
    this.#raza = raza;
  }

  hacerSonido() {
    console.log(`lanzar ladrido`);
  }
  moverCola() {
    console.log(`perro moviendo la cola`);
  }
}

class Figura {
  #color;
  #area;
  constructor({ color, area }) {
    this.#color = color;
    this.#area = area;
  }
  get color() {
    return this.#color;
  }
  set color(color) {
    this.#color = color;
  }
  get area() {
    return this.#area;
  }
  set area(area) {
    this.#area = area;
  }
  calcularArea() {
    console.log(`el area la figura es ${this.#area}`);
  }
}

class Circulo extends Figura {
  #radio;
  constructor({ radio, color, area }) {
    super({ color, area });
    this.#radio = radio;
  }
  get radio() {
    return this.#radio;
  }
  set radio(radio) {
    this.#radio = radio;
  }
  calcularArea() {
    console.log(`area es: ${Math.PI * this.#radio ** 2} `);
    return Math.PI * this.#radio ** 2;
  }
}

class Rectangulo extends Figura {
  #largo;
  #ancho;
  constructor({ largo, ancho, color, area }) {
    super({ color, area });
    this.#largo = largo;
    this.#ancho = ancho;
  }
  get largo() {
    return this.#largo;
  }
  set largo(largo) {
    this.#largo = largo;
  }
  get ancho() {
    return this.#ancho;
  }
  set ancho(ancho) {
    this.#ancho = ancho;
  }
  calcularArea() {
    console.log(`area del rectangulo ${this.#ancho * this.#largo}`);
    return this.#ancho * this.#largo;
  }
}

class Vehiculo {
  static convertirKmHEnMph(velocidadEnKm) {
    return velocidadEnKm / 1.60934;
  }
  #marca;
  #modelo;
  #velocidad;
  constructor({ marca, modelo, velocidad }) {
    this.#marca = marca;
    this.#modelo = modelo;
    this.#velocidad = velocidad;
  }
  get velocidad() {
    return this.#velocidad;
  }
  set velocidad(velocidad) {
    this.#velocidad = velocidad;
  }
  get marca() {
    return this.#marca;
  }
  set marca(marca) {
    this.#marca = marca;
  }
  get modelo() {
    return this.#modelo;
  }
  set modelo(modelo) {
    this.#modelo = modelo;
  }

  acelerar() {
    this.#velocidad += 10;
  }
}

class Coche extends Vehiculo {
  #combustible;
  constructor({ marca, modelo, velocidad, combustible }) {
    super({ marca, modelo, velocidad });
    this.#combustible = combustible;
  }

  get combustible() {
    return this.#combustible;
  }
  set combustible(combustible) {
    this.#combustible = combustible;
  }

  acelerar() {
    super.velocidad += 20;
  }
}

class Empleado {
  #nombre;
  #edad;
  #sueldo;
  constructor({ nombre, edad, sueldo }) {
    this.#nombre = nombre;
    this.#edad = edad;
    this.#sueldo = sueldo;
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
    this.sueldo += this.sueldo * 0.1;
    return super.calcularSalarioAnual();
  }
}
