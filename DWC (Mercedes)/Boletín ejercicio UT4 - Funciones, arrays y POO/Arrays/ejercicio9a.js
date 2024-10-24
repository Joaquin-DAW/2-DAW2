/*Escribe todas las funciones en ES5 y con la notación de función flecha de ES6.

a)Escribe una función llamada elMenor que acepte un número variable de parámetros y devuelva el parámetro de menor valor pasado a la función.*/ 

function elMenor() {
    var menor = arguments[0];
    for (var i = 0; i < arguments.length; i++) {
      if (arguments[i] < menor) {
        menor = arguments[i];
      }
    }
    return menor;
  }

var elMenor = (...numeros) => {
    let menor = numeros[0];
    for (let i = 0; i < numeros.length; i++) {
      if (numeros[i] < menor) {
        menor = numeros[i];
      }
    }
    return menor;
  }

console.log(elMenor(1, 10, 5, 8, 20));