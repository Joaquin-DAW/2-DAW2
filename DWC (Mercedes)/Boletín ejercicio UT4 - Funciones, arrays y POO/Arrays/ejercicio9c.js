/*Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.

c)Escribe una función llamada uneArrays que acepte un número variable de parámetros (cada uno de ellos será un array) y 
devuelva un nuevo array con todos los parámetros concatenados.*/ 

var uneArrays = (...arrays) => {

  nuevoArray=[];

  nuevoArray = nuevoArray.concat( ...arrays);
  
  return nuevoArray;
}

console.log(uneArrays([1], [2], [3]));
console.log(uneArrays([1,2,3],[4,5,6],[7,8,9]));