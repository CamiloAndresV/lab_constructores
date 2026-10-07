// 3

function Estudiante(nota1, nota2, nota3) {
    this.nota1 = nota1
    this.nota2 = nota2
    this.nota3 = nota3
    this.aprobado = false
    if ((this.nota1 + this.nota2 + this.nota3)/3 >= 3.0) {
        this.aprobado = true
    }

    this.mostrarResultado = function() {
        if (this.aprobado) {
            return `Estudiante Aprobado!!!`
        } 
        return `Estudiante Desaprobado :(`
    }
}

const estudiante1 = new Estudiante(3.0, 4.5, 5.0)
const estudiante2 = new Estudiante(2.0, 1.5, 2.0)
const estudiante3 = new Estudiante(3.0, 3.5, 3.0)

console.log(`${estudiante1.mostrarResultado()}\n${estudiante2.mostrarResultado()}\n${estudiante3.mostrarResultado()}`)