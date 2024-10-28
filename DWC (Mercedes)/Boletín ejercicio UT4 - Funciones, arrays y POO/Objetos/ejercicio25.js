/*Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está.*/ 

var Punto = { x:2 , y:7,

/*Equivalente a: 
var Punto = new Object(); 
Punto.x = 2;
Punto.y = 7;*/

    averiguarCuadrante (x, y) {
        if (this.x > 0 && this.y > 0) {
            return "Primer cuadrante";
        }
        else if (this.x < 0 && this.y > 0) {
            return "Segundo cuadrante";
        }
        else if (this.x < 0 && this.y < 0) {
            return "Tercer cuadrante";
        }
        else if (this.x > 0 && this.y < 0) {
            return "Cuarto cuadrante";
        }
    }
}

console.log(Punto.averiguarCuadrante())