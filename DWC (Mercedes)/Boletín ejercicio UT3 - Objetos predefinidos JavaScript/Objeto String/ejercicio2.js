/*Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. Contar cuántos nombres se han leído, cuántos comienzan C.*/ 

let frase = prompt("Introduce una serie de nombres, intenta que haya algunos que empiecen por C");

let empiezanC= new RegExp(/\b[C]\w+/g);
let detectarEspacio = new RegExp (/\s/g);

let totalNombres = frase.split(detectarEspacio);
let totalC=0;

for (let i = 0; i < totalNombres.length; i++) {
    if (empiezanC.test(totalNombres[i])) {
        totalC++;
    }
  }

console.log ("Has introducido "+totalNombres.length+" nombres, de estos nombres "+totalC+" empiezan por C")