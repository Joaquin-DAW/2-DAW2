/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/ 

var Punto1 = { x:1 , y:2 }
var Punto2 = { x:5 , y:7 }

var Rectangulo = { Punto1, Punto2,
    base () {
        var resultado = (this.Punto2.x - this.Punto1.x)
            return resultado;
    },
    altura () {
        var resultado = (this.Punto2.y - this.Punto1.y)
            return resultado;
    },
    perimetro () {
        var resultado = (this.base()+this.altura())*2
            return "El perimetro es "+resultado;
    },
    area (){
        var resultado = this.base()*this.altura()
            return "El area es "+resultado;
    }
}

console.log (Rectangulo.perimetro())
console.log (Rectangulo.area())