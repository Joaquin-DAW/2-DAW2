//Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.

let num = parseInt(prompt("Cuantos números quieres introducir",0));

let sumatorio=0;
let mayor=0;
let menor=0;

let primerValor = parseInt(prompt("Introduce un número",0));

mayor=primerValor;
menor=primerValor;

for (let i = 1; i < num; i++) {
  let valor = parseInt(prompt("Introduce un número",0));

  sumatorio=sumatorio+valor;

  if(valor>mayor){
    mayor=valor;
  }
  if(valor<menor){
    menor=valor;
  }
}

console.log("El menor de los números introducidos es "+menor)
console.log("El mayor de los números introducidos es "+mayor)
console.log("La media de los número es "+(sumatorio+primerValor)/num)