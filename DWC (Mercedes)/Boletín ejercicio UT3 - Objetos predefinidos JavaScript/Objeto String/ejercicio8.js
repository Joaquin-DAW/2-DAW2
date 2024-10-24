/*Realizar un programa que compruebe si una palabra es palíndromo, es decir, si se lee igual de izquierda a derecha que de derecha a izquierda. 
Por ejemplo: RADAR, ARA....*/ 

let palabra = prompt("Introduce una palabra");

let invertida;
let resultado="";

for (let i = palabra.length; i >= 0; i--) {
    invertida=palabra.charAt(i);
    resultado+=invertida;
}

if (palabra.toLowerCase() == resultado.toLowerCase()){
    console.log("La palabra "+palabra+" es un palíndromo");
}
else {
    console.log("La palabra "+palabra+" no es un palíndromo");
}