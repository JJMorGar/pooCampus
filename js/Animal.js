
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
        return `hacer sonido`
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
        return `lanzar ladrido`
    }
    moverCola() {
        return `perro moviendo la cola`
    }
}








