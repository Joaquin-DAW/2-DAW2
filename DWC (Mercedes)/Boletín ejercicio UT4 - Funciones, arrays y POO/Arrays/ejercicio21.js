/*Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos 
ya implementados de Array y funciones flecha):
-mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
-menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
-modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
-eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. */

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

function buscarPorApellidos(apellido) {
    let resultado = arrayBidimensional.find(function(persona) {
        return persona[1].toLowerCase() == apellido.toLowerCase();
    });

    if (resultado) {
        return "La persona con ese apellido es: "+resultado;
    } else {
        return "No se encontró a ninguna persona con ese apellido.";
    }
}

console.log(buscarPorApellidos("Cabezas"));