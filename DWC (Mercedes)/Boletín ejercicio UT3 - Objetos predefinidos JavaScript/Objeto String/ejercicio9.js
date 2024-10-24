/*Usa una expresión regular para eliminar todos los espacios en blanco de una cadena.*/ 

let frase = prompt("Introduce una frase, puede tener varios espacios en blanco");

let comprobarEspacios= new RegExp(/\s/g);

let fraseSinEspacios = frase.replace(comprobarEspacios, "");

console.log("Tu frase sin espacios resulta ser así: "+"\""+fraseSinEspacios+"\"");