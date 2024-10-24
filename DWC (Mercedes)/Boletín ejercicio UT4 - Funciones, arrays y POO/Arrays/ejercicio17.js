/*Realizar un script que tome una serie de palabras ingresadas por el usuario (separadas por coma) y almacena esas palabras en un array. 
Posteriormente, manipule el array para mostrar en una nueva ventana los siguientes datos: 
        La primera palabra ingresada por el usuario 
        La última palabra ingresada por el usuario
        El número de palabras presentes en el array
        Todas las palabras ordenadas alfabéticamente*/

let palabra = prompt("Introduce un varias palabras separadas por coma");

let arrayPalabra = palabra.split(",");

let primeraPalabra = arrayPalabra[0];
let ultimaPalabra = arrayPalabra[arrayPalabra.length-1];
let numeroPalabra = arrayPalabra.length;
let ordenAlfabetico = arrayPalabra.sort();

function abrirVentana(){
        ventana = window.open("", "_blank", "height=400,width=800");
            ventana.document.write("Primera palabra del array: "+primeraPalabra+"<br></br>");
            ventana.document.write("Última palabra del array: "+ultimaPalabra+"<br></br>");
            ventana.document.write("Número de palabras del array: "+numeroPalabra+"<br></br>");
            ventana.document.write("Palabras ordenadas alfabéticamente: "+ordenAlfabetico+"<br></br>");
    }

abrirVentana();

console.log(arrayPalabra);