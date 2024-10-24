/*Crea una expresión regular que reemplace todas las instancias de la palabra "malo" en un texto por "bueno". 
Ahora modifica tu código para que el usuario introduzca las palabras a reemplazar.*/ 

//Primera versión
/*let frase = prompt("Introduce una frase que contenga algunas palabras 'malo'");

let remplazarMalo= new RegExp(/\bmalo\b/g);

let nuevaFrase = frase.replace(remplazarMalo, "bueno");

console.log("Tu nueva frase alterada es: "+nuevaFrase);*/

//Segunda versión

let frase = prompt("Introduce una frase");

let palabra1 = prompt("Introduce la palabra que quieras sustituir");

let palabra2 = prompt("Introduce la palabra por la que la quieres sustituir");

let remplazarPalabra= new RegExp(palabra1, 'g');

let nuevaFrase = frase.replace(remplazarPalabra, palabra2);

console.log("Tu nueva frase alterada es: "+nuevaFrase);