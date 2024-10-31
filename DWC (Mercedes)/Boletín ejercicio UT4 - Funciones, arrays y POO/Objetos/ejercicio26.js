/*Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. 
Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.*/ 


class Rectangulo {
    constructor(Punto1, Punto2) {
        this.Punto1 = Punto1;
        this.Punto2 = Punto2;
    }

    // Método para calcular la base
    base() {
        return Math.abs(this.Punto2.x - this.Punto1.x);
    }

    // Método para calcular la altura
    altura() {
        return Math.abs(this.Punto2.y - this.Punto1.y);
    }

    // Método para calcular el perímetro
    perimetro() {
        return 2 * (this.base() + this.altura());
    }

    // Método para calcular el área
    area() {
        return this.base() * this.altura();
    }
}

var Punto1 = { x:1 , y:2 }
var Punto2 = { x:5 , y:7 }

var rectangulo = new Rectangulo(Punto1, Punto2);

console.log("El perímetro es " + rectangulo.perimetro());
console.log("El área es " + rectangulo.area());