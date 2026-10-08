// 5

const prompt = require('prompt-sync')()

let informacion = []

// let marca
// let modelo
// let precio
// let kilometraje
// let descuento
// let disponible

for (let i = 1; i <= 3; i++) {
    let marca = prompt(`Ingresa la marca del vehiculo ${i}: `)
    let modelo = Number(prompt(`Ingresa el modelo del vehiculo ${i}: `))
    let precio = Number(prompt(`Ingresa el precio del vehiculo ${i}: `))
    let kilometraje = Number(prompt(`Ingresa el kilometraje del vehiculo ${i}: `))
    let descuento = prompt(`Ingresa el porcentaje de descuento del vehiculo ${i}: `)
    let disponible = prompt(`El vehiculo esta disponible (si/no): ${i}: `)
    const car = new Vehiculo(marca, modelo, precio, kilometraje, descuento, disponible)
    // const nuevo = {}
    // nuevo.marca = marca
    // nuevo.modelo = modelo
    // nuevo.precio = precio
    // nuevo.kilometraje = kilometraje
    // nuevo.descuento = descuento
    // nuevo.disponible = disponible
    informacion.push(car)
}

function Vehiculo(marca, modelo, precio, kilometraje, descuento, disponible) {
    this.marca = marca
    this.modelo = modelo
    this.precio = precio
    this.kilometraje = kilometraje
    this.descuento = descuento
    this.disponible = disponible

    // un metodo que muestre la info vacano
    this.mostrarInfo = function() {
            console.log(`\n---------- Carro ----------`)
            console.log(`Marca: ${this.marca} | Modelo: ${this.modelo} | Precio: $${this.precio.toLocaleString()}`)
            console.log(`Kilometraje: ${this.kilometraje} km | Descuento: ${this.descuento}% | Disponible: ${this.disponible}`)
            console.log(`--------------------\n`)
    }

    // comparar precios entre vehiculos (decir cual es mas caro que el otro y el otro)
    this.compararPrecio = function(vehiculoDos, vehiculoTres) {
        if (this.precio > vehiculoDos.precio && this.precio > vehiculoTres.precio) {
            return `El vehiculo ${this.marca} modelo ${this.modelo} es el mas caro. precio: $${this.precio.toLocaleString()}`
        } else if (vehiculoDos.precio > this.precio && vehiculoDos.precio > vehiculoTres.precio) {
            return `El vehiculo ${vehiculoDos.marca} modelo ${vehiculoDos.modelo} es el mas caro. precio: $${vehiculoDos.precio.toLocaleString()}`
        } else {
            return `El vehiculo ${vehiculoTres.marca} modelo ${vehiculoTres.modelo} es el mas caro. precio: $${vehiculoTres.precio.toLocaleString()}`
        }
    }

    // encontrar el mas barato para aplicarle el descuento con el metodo 
    this.buscarBarato = function(vehiculoDos, vehiculoTres) {
        if (this.precio < vehiculoDos.precio && this.precio < vehiculoTres.precio) {
            return this
        } else if (vehiculoDos.precio < this.precio && vehiculoDos.precio < vehiculoTres.precio) {
            return vehiculoDos
        } else {
            return vehiculoTres
        }
    }

    // comparar el modelo mas viejo del modelo mas nuevo
    this.compararModelo = function(vehiculoDos, vehiculoTres) {
        const añoActual = new Date().getFullYear();
        if (this.modelo < vehiculoDos.modelo && this.modelo < vehiculoTres.modelo) {
            return `El vehiculo ${this.marca} modelo ${this.modelo} es el mas antiguo. Antiguedad: ${añoActual - this.modelo} años`
        } else if (vehiculoDos.modelo < this.modelo && vehiculoDos.modelo < vehiculoTres.modelo) {
            return `El vehiculo ${vehiculoDos.marca} modelo ${vehiculoDos.modelo} es el mas antiguo. Antiguedad: ${añoActual - vehiculoDos.modelo} años`
        } else {
            return `El vehiculo ${vehiculoTres.marca} modelo ${vehiculoTres.modelo} es el mas antiguo. Antiguedad: ${añoActual - vehiculoTres.modelo} años`
        }
    }

    //aplique cierto porcentaje de descuento al vehiculo mas barato
    this.aplicarDescuento = function() {
        let descuento = (this.precio * this.descuento) / 100
        return this.precio -= descuento
    }

    // poner disponible en true o false, si esta true que se venda y si esta false que no se pueda vender 
    this.estaDisponible = function() {
        if(this.disponible == "si") {
            this.disponible = "no"
            return(`felicidades!!! Se ha vendido el vehiculo ${this.marca} modelo ${this.modelo} a ${this.precio.toLocaleString()}`)
        }
        return(`Lo sentimos, el vehiculo ${this.marca} modelo ${this.modelo} ya fue vendido`)
    }

    // clasificar estado del vehiculo
    this.clasificarEstado = function() {
        if (this.kilometraje == 0) {
            return `el vehiculo ${this.marca} esta Nuevo`
        } else if (this.kilometraje <= 50000) {
            return `el vehiculo ${this.marca} esta Seminuevo`
        } else if (this.kilometraje > 50000) {
            return `el vehiculo ${this.marca} esta Usado`
        }
    }

}
console.log(informacion)

//1
informacion[0].mostrarInfo()
informacion[1].mostrarInfo()
informacion[2].mostrarInfo()

//2
console.log(informacion[0].compararPrecio(informacion[1], informacion[2]))
console.log(informacion[1].compararModelo(informacion[2], informacion[0])) //cambiando de orden en los objetos

//3
let elVehiculoMasBarato = informacion[0].buscarBarato(informacion[1], informacion[2])
console.log(`El vehiculo mas barato es ${elVehiculoMasBarato.marca} Costo: $$${elVehiculoMasBarato.precio.toLocaleString()}, con descuento del ${elVehiculoMasBarato.descuento}% queda en: $${elVehiculoMasBarato.aplicarDescuento().toLocaleString()}`)

//4
console.log(informacion[0].estaDisponible())
console.log(informacion[1].estaDisponible())
console.log(informacion[0].estaDisponible())

//5
console.log(informacion[0].clasificarEstado())
console.log(informacion[1].clasificarEstado())
console.log(informacion[2].clasificarEstado())