/*Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.

d)Escribe una función llamada sumaArgPares que sume todos los argumentos pares que se pasen a la función.*/ 

/*var sumaArgPares = (...numeros) => {
let sum=0;
  for (let i = 0; i < numeros.length; i++) {
    if (numeros[i]%2 == 0) {
      sum= sum+numeros[i];
    }
  }
  return sum;
}*/

var sumaArgPares = (...numeros) => {
return numeros
    .filter(num => num % 2 == 0)
    .reduce((sum, num) => sum + num, 0);
}

console.log(sumaArgPares(1,2,3,4));
console.log(sumaArgPares(1,2,6));