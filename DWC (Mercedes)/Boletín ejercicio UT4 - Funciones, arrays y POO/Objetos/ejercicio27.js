/*Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona)*/ 

let personas = [];

function capturarDatos() {
    let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Deja vacío para salir:");
    while (datos !== "") {
        let arrayDatos = datos.split(",");
        if (arrayDatos.length === 4) {
            const persona = new Persona(arrayDatos[0], arrayDatos[1], arrayDatos[2], arrayDatos[3]);
            personas.push(persona);
        } else {
            console.log("Por favor, ingresa los datos en el formato correcto.");
        }
        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
    }
}

function imprimirDatos() {
    console.log("Datos de las personas:");
    personas.forEach(persona => {
        console.log(persona.toString());
    });
}

// Función para buscar por apellidos
function buscarPorApellidos(apellidos) {
    return personas.filter(persona => persona.apellidos.toLowerCase() === apellidos.toLowerCase());
}

// Función para buscar por DNI
function buscarPorDNI(dni) {
    return personas.find(persona => persona.dni === dni);
}

// Función para buscar por edad
function buscarPorEdad(edad) {
    return personas.filter(persona => persona.getEdad() === edad);
}

// Función para filtrar y mostrar los mayores de edad
function mayorEdad() {
    const mayores = personas.filter(persona => persona.esMayorDeEdad());
    const nuevaVentana = window.open("", "", "width=400,height=400");
    nuevaVentana.document.write("<h2>Usuarios mayores de edad:</h2>");
    mayores.forEach(persona => {
        nuevaVentana.document.write(`<p>${persona.toString()}</p>`);
    });
}

// Función para filtrar y mostrar los menores de edad con tiempo restante para mayoría de edad
function menorEdad() {
    const menores = personas.filter(persona => !persona.esMayorDeEdad());
    const nuevaVentana = window.open("", "", "width=400,height=400");
    nuevaVentana.document.write("<h2>Usuarios menores de edad y tiempo para mayoría de edad:</h2>");
    menores.forEach(persona => {
        const añosRestantes = 18 - persona.getEdad();
        const diasRestantes = añosRestantes * 365;  // Aproximación de días
        nuevaVentana.document.write(`<p>${persona.toString()}, Años restantes: ${añosRestantes}, Días restantes: ${diasRestantes}</p>`);
    });
}

// Función para modificar datos de un usuario
function modificaDatos() {
    const dni = prompt("Introduce el DNI del usuario a modificar:");
    const persona = buscarPorDNI(dni);

    if (persona) {
        const campo = prompt("¿Qué campo deseas modificar? (nombre, apellidos, dni, fechaNacimiento):");
        const nuevoValor = prompt(`Introduce el nuevo valor para ${campo}:`);

        if (persona.hasOwnProperty(campo)) {
            persona[campo] = nuevoValor.trim();
            console.log(`El campo ${campo} ha sido modificado exitosamente.`);
        } else {
            console.log("El campo ingresado no es válido.");
        }
    } else {
        console.log("No se encontró un usuario con ese DNI.");
    }
}

// Función para eliminar un usuario por DNI
function eliminaUsuario() {
    const dni = prompt("Introduce el DNI del usuario a eliminar:");
    const personaIndex = personas.findIndex(persona => persona.dni === dni);

    if (personaIndex !== -1) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (confirmacion) {
            personas.splice(personaIndex, 1);
            console.log("Usuario eliminado exitosamente.");
        } else {
            console.log("Eliminación cancelada.");
        }
    } else {
        console.log("No se encontró un usuario con ese DNI.");
    }
}

capturarDatos();
imprimirDatos();

console.log("Búsqueda por apellidos 'Cabezas':", buscarPorApellidos("Cabezas").map(persona => persona.toString()));
console.log("Búsqueda por DNI '12345678X':", buscarPorDNI("12345678X")?.toString() || "No encontrado");
console.log("Búsqueda por edad 25:", buscarPorEdad(25).map(persona => persona.toString()));

// Funciones adicionales
mayorEdad();
menorEdad();
modificaDatos();
eliminaUsuario();