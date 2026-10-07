// 2

function Mascota(nombre, especie, edad, peso) {
    this.nombre = nombre
    this.especie = especie
    this.edad = edad
    this.peso = peso

    this.presentarse = function() {
        return `Consulta: --- \n-${this.nombre} \n-${this.especie} \n-${this.edad} años \n-${this.peso}kg \n\n`
    }
}

const mascota1 = new Mascota("Tobby", "perro", 8, 30)
const mascota2 = new Mascota("Muñeca", "vaca", 6, 90)
const mascota3 = new Mascota("Kira", "gato", 7, 8)

console.log(mascota1.presentarse(),mascota2.presentarse(),mascota3.presentarse())