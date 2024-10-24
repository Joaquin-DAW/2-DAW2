/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad.
¿Cómo podríamos optimizar la búsqueda? */

let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas.");

let arrayBidimensional = [];

while (datos !="") {
        let arrayDatos= datos.split(",");

        arrayBidimensional.push(arrayDatos);

        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
}

function imprimirDatos() {
    console.log("Datos de las personas:");
    arrayBidimensional.forEach(persona => {
        console.log("Nombre: "+persona[0]+ " Apellidos: "+persona[1]+ " DNI: "+persona[2]+ " Fecha de Nacimiento: "+persona[3]);
    });
}

imprimirDatos();

var buscarApellidos = (arr, apellidos) => arr.filter(pos) => pos.filter((dato) =>dato => apellido)

console.log(buscarApellidos("Cabezas"));