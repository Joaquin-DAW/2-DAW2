// Array inicial con los datos de los usuarios, ahora representados por objetos
let guardaDatos = [
    { nombre: 'carlos', apellidos: 'perea', dni: '222z', fechaNacimiento: '91-12-2005' },
    { nombre: 'alvaro', apellidos: 'conde', dni: '333c', fechaNacimiento: '20-04-2000' }
];

let datos = "";
let opc = 0;

// Función para imprimir los datos de una persona
const imprimirPersona = (persona) => {
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellidos: ${persona.apellidos}`);
    console.log(`DNI: ${persona.dni}`);
    console.log(`Fecha de nacimiento: ${persona.fechaNacimiento}`);
};

// Función para calcular la edad de una persona basada en su fecha de nacimiento
const calculaEdad = (fecha) => {
    let añoPersona = parseInt(fecha.split("-")[2]); // Extraemos el año de la fecha de nacimiento
    let añoActual = new Date().getFullYear(); // Obtenemos el año actual
    let edad = añoActual - añoPersona; // Calculamos la edad
    return edad; // Devolvemos la edad calculada
};

// Función para mostrar los usuarios mayores de edad en una nueva ventana
const mayorEdad = () => {
    let nuevaVentana = window.open("", "_blank", "width=400,height=400"); // Abrimos una nueva ventana

    // Recorremos todos los usuarios
    for (let i = 0; i < guardaDatos.length; i++) {
        // Verificamos si el usuario es mayor de edad (18 años o más)
        if (calculaEdad(guardaDatos[i].fechaNacimiento) >= 18) {
            // Si lo es, mostramos sus datos en la nueva ventana
            nuevaVentana.document.write(`
                <p>Nombre: ${guardaDatos[i].nombre}</p>
                <p>Apellidos: ${guardaDatos[i].apellidos}</p>
                <p>DNI: ${guardaDatos[i].dni}</p>
                <p>Fecha de nacimiento: ${guardaDatos[i].fechaNacimiento}</p>
                <br>
            `);
        }
    }

    nuevaVentana.document.close(); // Cerramos el documento de la nueva ventana para procesarlo
};

// Función para mostrar los usuarios menores de edad en una nueva ventana, junto con los años que les faltan para ser mayores
const menorEdad = () => {
    let nuevaVentana = window.open("", "_blank", "width=400,height=400"); // Abrimos una nueva ventana

    // Recorremos todos los usuarios
    for (let i = 0; i < guardaDatos.length; i++) {
        // Verificamos si el usuario es menor de 18 años
        if (calculaEdad(guardaDatos[i].fechaNacimiento) < 18) {
            let añosRestantes = 18 - calculaEdad(guardaDatos[i].fechaNacimiento); // Calculamos los años restantes
            // Mostramos la información en la nueva ventana
            nuevaVentana.document.write(`
                <p>Le queda ${añosRestantes} años para ser mayor de edad</p>
                <br>
            `);
        }
    }

    nuevaVentana.document.close(); // Cerramos el documento de la nueva ventana
};

// Función para modificar los datos de un usuario, seleccionando el dato a modificar (nombre, apellidos, DNI)
const modificaDatos = (array) => {
    let dni = prompt("Ingresa el DNI del usuario que deseas modificar"); // Pedimos el DNI
    let persona = array.find(persona => persona.dni === dni); // Buscamos al usuario por su DNI

    if (persona) {
        let opc = parseInt(prompt("1. Modificar nombre:\n 2. Modificar apellidos:\n 3. Modificar DNI:\n 4. Salir:")); // Mostramos las opciones de modificación
        switch (opc) {
            case 1:
                let nombreNuevo = prompt("Ingresa el nuevo nombre del usuario"); // Pedimos el nuevo nombre
                persona.nombre = nombreNuevo; // Modificamos el nombre
                console.log(`El nombre se ha cambiado a ${nombreNuevo}`);
                break;
            case 2:
                let apellidoNuevo = prompt("Ingresa el nuevo apellido"); // Pedimos el nuevo apellido
                persona.apellidos = apellidoNuevo; // Modificamos los apellidos
                break;
            case 3:
                let dniNuevo = prompt("Ingresa el nuevo DNI"); // Pedimos el nuevo DNI
                persona.dni = dniNuevo; // Modificamos el DNI
                break;
            case 4:
                console.log("Saliendo del programa"); // Si se elige salir, mostramos un mensaje
                break;
            default:
                console.log("Opción no válida"); // Si la opción no es válida, mostramos un mensaje
        }
    } else {
        console.log(`El usuario con DNI ${dni} no existe. Ingresa un DNI válido.`); // Si no se encuentra el usuario, mostramos un mensaje de error
    }
};

// Función para eliminar un usuario de la lista, solicitando el DNI del usuario a eliminar
const eliminaPersona = (array) => {
    let dni = prompt("Ingresa el DNI del usuario que deseas eliminar"); // Pedimos el DNI
    let index = array.findIndex(persona => persona.dni === dni); // Buscamos al usuario por su DNI

    if (index !== -1) {
        let confirmacion = confirm("¿Estás seguro de que deseas eliminar a este usuario?"); // Pedimos confirmación antes de eliminar
        if (confirmacion) {
            array.splice(index, 1); // Si se confirma, eliminamos al usuario del array
            console.log(`El usuario con DNI ${dni} ha sido eliminado.`);
        } else {
            console.log("El usuario no ha sido eliminado.");
        }
    } else {
        console.log(`No se ha encontrado un usuario con DNI ${dni}`); // Si no se encuentra el usuario, mostramos un mensaje
    }
};

// Ejemplo de ejecución
// Modificar datos de un usuario
modificaDatos(guardaDatos);
// Eliminar un usuario
eliminaPersona(guardaDatos);

// Mostrar la lista actual de usuarios
console.log("Lista de usuarios después de las modificaciones:");
guardaDatos.forEach(persona => imprimirPersona(persona)); // Imprimimos todos los usuarios restantes
