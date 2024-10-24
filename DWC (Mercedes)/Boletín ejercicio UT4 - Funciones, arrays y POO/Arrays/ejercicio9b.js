/*Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.

b)Escribe una función llamada colocaEnMedio que acepte como parámetros dos arrays y devuelva el primer array con todos los valores 
del segundo array colocados en el centro del primer array. */ 

function colocaEnMedio(array1, array2) {
  var mitad = array1.length/2;

  array1.splice(mitad, 0, ...array2);
  
  return array1;
}

console.log(colocaEnMedio([1, 2, 6, 7], [3, 4, 5]));
console.log(colocaEnMedio([1],[3,4,5]));
console.log(colocaEnMedio([1,6],[2,3,4,5]));
console.log(colocaEnMedio([],[2,3,4,5]));