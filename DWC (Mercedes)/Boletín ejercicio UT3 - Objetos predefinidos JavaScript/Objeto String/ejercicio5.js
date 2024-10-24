/*Realiza un script que pida una cadena de texto y la devuelva al revés. Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/ 

let texto = prompt("Introduce un texto");

let letras;
let resultado="";

for (let i = texto.length; i >= 0; i--) {
    letras=texto.charAt(i);
    resultado+=letras;
}

console.log(resultado);