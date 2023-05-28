
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
    this.#velocidad = Number(velocidad);
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
    return this.#velocidad += 10;
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
    return super.velocidad += 20;
  }
}


const $ = (element) => document.querySelector(element)

const $formVehiculo = $('#form-vehiculo')
const $citaVehiculo = $('#cita-vehiculo')
const $formCoche = $('#form-coche')
const $citaCoche = $('#cita-coche')

const cargarVehiculo = (e) => {
  e.preventDefault()
  const dataVehiculo = Object.fromEntries(new FormData($formVehiculo))
  const vehiculo = new Vehiculo(dataVehiculo)
  $citaVehiculo.innerHTML = ''
  $citaVehiculo.append(vehiculo.acelerar())
}

const cargarCoche = (e) => {
  e.preventDefault()
  const dataCoche = Object.fromEntries(new FormData($formCoche))
  const coche = new Coche(dataCoche)
  $citaCoche.innerHTML = ''
  $citaCoche.append(coche.acelerar())
}

$formVehiculo.addEventListener('submit', cargarVehiculo)
$formCoche.addEventListener('submit',cargarCoche)
