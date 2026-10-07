// 4

function Libro(nombre, autor, cantHojas, añoLanzamiento, prestado = false) {
    this.nombre = nombre
    this.autor = autor
    this.cantHojas = cantHojas
    this.añoLanzamiento = añoLanzamiento
    this.prestado = prestado
    this.prestar = function() {
        if (this.prestado) {
            return "alerta ya esta prestado"
        }
        this.prestado = true
        return "se presto correctamente"
    }
    this.devolver = function() {
        if(this.prestado) {
            this.prestado = false
            return "devolución, pasa a no prestado"
        }
        return "inconsistencia"
    }
}

const libro1 = new Libro("El principito", "Saint-Exupéry", 120, 1943)
console.log(libro1.prestar()); 
console.log(libro1.prestar());  
console.log(libro1.devolver());  
console.log(libro1.devolver());

