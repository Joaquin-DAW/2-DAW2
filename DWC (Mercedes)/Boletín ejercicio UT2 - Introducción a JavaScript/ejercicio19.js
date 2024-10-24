/*Diseña un algoritmo para simular el juego de ¿dónde está la bolita? (trileros), famoso timo practicado por los llamados trileros.
En nuestro caso el ordenador será un honrado trilero que no engañará al usuario que juegue con él.*/

let opcion = prompt("¿Donde crees que esta la bolita? ¿Izquierda, derecha o centro?","0");

let bolita = ["Izquierda", "Derecha", "Centro"];

let aleatorio = parseInt(Math.random()* (3 - 0));

let resultado = bolita[aleatorio];

if (resultado == opcion){
    console.log("Enhorabuena, haz acertado, la bolita estaba en "+opcion)
}
else{
    console.log("Oh que pena, la bolita no estaba en "+opcion)
}

console.log(resultado)