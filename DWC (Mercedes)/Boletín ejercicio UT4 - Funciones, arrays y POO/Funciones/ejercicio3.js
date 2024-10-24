/*Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el número 
de cifras del mismo. Utiliza el operador spread.*/ 

var num = prompt("Introduce un número, puede tener una o varis cifras");

function numCifras(numero) {

    var digitos = [...numero];
  
    return digitos.length;
}

console.log(numCifras(num));