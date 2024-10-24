/*Realiza un supertrim de una cadena, eliminando todos los espacios duplicados.*/ 

let frase = prompt("Introduce una frase, puede tener varios espacios en blanco al principio y al final");

let superTrim= new RegExp(/^\s+|\s+$/g);

let fraseSinEspacios = frase.replace(superTrim, '');

console.log("Tu frase sin espacios resulta ser así: "+"\""+fraseSinEspacios+"\"");