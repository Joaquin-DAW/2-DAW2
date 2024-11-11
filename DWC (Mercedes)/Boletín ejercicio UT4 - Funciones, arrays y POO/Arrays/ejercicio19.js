/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. 
    Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. 
    El programa debe guardar los datos en un array bidimensional.*/

let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas.");

let usuarios = [];

while (datos !=="") {
        let arrayDatos= datos.split(",");

        usuarios.push(arrayDatos);

        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
}

console.log(usuarios);