
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
    return `el area la figura es ${this.#area}`
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
    return `area es: ${Math.PI * this.#radio ** 2} `;
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
    return `area del rectangulo es ${this.#ancho * this.#largo}`
  }
}


const $ = (element) => document.querySelector(element)

const $formFigura = $('#form-figura')
const $formCirculo = $('#form-circulo')
const $formRectangulo = $('#form-rectangulo')


const $citaFigura = $('#cita-figura')
const $citaCirculo = $('#cita-circulo')
const $citaRectangulo = $('#cita-rectangulo')

const cargarFigura = (e) => {
  e.preventDefault()
  const dataFigura = Object.fromEntries(new FormData($formFigura))
  const figura1 = new Figura(dataFigura)
  $citaFigura.innerHTML = ""
  $citaFigura.append(figura1.calcularArea())
}
const cargarCirculo = (e) => {
  e.preventDefault()
  const dataCirculo = Object.fromEntries(new FormData($formCirculo))
  const circulo = new Circulo(dataCirculo)
  $citaCirculo.innerHTML = ''
  $citaCirculo.append(circulo.calcularArea())
}

const cargarRectangulo = (e) => {
  e.preventDefault()
  const dataRectangulo = Object.fromEntries(new FormData($formRectangulo))
  const rectangulo = new Rectangulo(dataRectangulo)
  $citaRectangulo.innerHTML = ''
  $citaRectangulo.append(rectangulo.calcularArea())
}


$formFigura.addEventListener('submit', cargarFigura)
$formCirculo.addEventListener('submit', cargarCirculo)
$formRectangulo.addEventListener('submit', cargarRectangulo)