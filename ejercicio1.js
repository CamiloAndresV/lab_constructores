// 1

function Computador(marca, procesador, ram, precio) {
    this.marca = marca
    this.procesador = procesador
    this.ram = ram
    this.precio = precio

    this.imprimir = function() {
        return(`${this.marca} - ${this.procesador} - ${this.ram}ram - $${this.precio.toLocaleString()}`)
    }
}

const pc1 = new Computador("Lenovo", "Ryzen 7", "32", 3000000)
const pc2 = new Computador("Asus", "core i5", "16", 2500000)
const pc3 = new Computador("Msi", "core ultra 9", "64", 12000000)
console.log(`${pc1.imprimir()}\n${pc2.imprimir()}\n${pc3.imprimir()}`)

