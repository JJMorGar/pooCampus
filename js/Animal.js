
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



const formAnimal = document.querySelector('#form-animal')
const formPerro = document.querySelector('#form-perro')
const citaAnimal = document.querySelector('#cita-animal')
const citaPerro = document.querySelector('#cita-perro')

const cargarAnimal = (e) => {
    e.preventDefault()
    const dataAnimal = Object.fromEntries(new FormData(formAnimal))
    const animal = new Animal(dataAnimal)
    citaAnimal.innerHTML = ""
    citaAnimal.append(animal.hacerSonido())
}   
const cargarPerro = (e)=> {
    e.preventDefault()
    const dataPerro = Object.fromEntries(new FormData(formPerro))
    const perro = new Perro(dataPerro)
    citaPerro.innerHTML = ""
    citaPerro.append(perro.moverCola())
} 

formAnimal.addEventListener('submit', cargarAnimal)
formPerro.addEventListener('submit', cargarPerro)






