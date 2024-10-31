/*Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos 
ya implementados de Array y funciones flecha):
-mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
-menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
-modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
-eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. */

function capturarDatos() {
    let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Deja vacío para salir:");
    while (datos !== "") {
        let arrayDatos = datos.split(",");
        if (arrayDatos.length === 4) {
            arrayBidimensional.push({
                nombre: arrayDatos[0].trim(),
                apellidos: arrayDatos[1].trim(),
                dni: arrayDatos[2].trim(),
                fechaNacimiento: arrayDatos[3].trim()
            });
        } else {
            console.log("Por favor, ingresa los datos en el formato correcto.");
        }
        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
    }
}

function imprimirDatos() {
    console.log("Datos de las personas:");
    arrayBidimensional.forEach(persona => {
        console.log(`Nombre: ${persona.nombre} Apellidos: ${persona.apellidos} DNI: ${persona.dni} Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    });
}

function buscarPorApellidos(apellidos) {
    return arrayBidimensional.filter(persona => persona.apellidos.toLowerCase() === apellidos.toLowerCase());
}

function buscarPorDNI(dni) {
    return arrayBidimensional.find(persona => persona.dni === dni);
}

function calcularEdad(fechaNacimiento) {
    const hoy = new Date();
    const nacimiento = new Date(fechaNacimiento);
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }
    return edad;
}

function buscarPorEdad(edad) {
    return arrayBidimensional.filter(persona => calcularEdad(persona.fechaNacimiento) === edad);
}

function mayorEdad() {
    const mayores = arrayBidimensional.filter(persona => calcularEdad(persona.fechaNacimiento) >= 18);
    const nuevaVentana = window.open("", "", "width=400,height=400");
    nuevaVentana.document.write("<h2>Usuarios mayores de edad:</h2>");
    mayores.forEach(persona => {
        nuevaVentana.document.write(`<p>Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento}</p>`);
    });
}

function menorEdad() {
    const menores = arrayBidimensional.filter(persona => calcularEdad(persona.fechaNacimiento) < 18);
    const nuevaVentana = window.open("", "", "width=400,height=400");
    nuevaVentana.document.write("<h2>Usuarios menores de edad y tiempo para mayoría de edad:</h2>");
    menores.forEach(persona => {
        const edad = calcularEdad(persona.fechaNacimiento);
        const añosRestantes = 18 - edad;
        const diasRestantes = añosRestantes * 365;  // Aproximación de días
        nuevaVentana.document.write(`<p>Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Edad: ${edad}, Años restantes para mayoría de edad: ${añosRestantes}, Días restantes: ${diasRestantes}</p>`);
    });
}

function modificaDatos() {
    const dni = prompt("Introduce el DNI del usuario a modificar:");
    const persona = buscarPorDNI(dni);

    if (persona) {
        const campo = prompt("¿Qué campo deseas modificar? (nombre, apellidos, dni, fechaNacimiento):");
        const nuevoValor = prompt(`Introduce el nuevo valor para ${campo}:`);

        if (persona.hasOwnProperty(campo)) {
            persona[campo] = nuevoValor;
            console.log(`El campo ${campo} ha sido modificado exitosamente.`);
        } else {
            console.log("El campo ingresado no es válido.");
        }
    } else {
        console.log("No se encontró un usuario con ese DNI.");
    }
}

function eliminaUsuario() {
    const dni = prompt("Introduce el DNI del usuario a eliminar:");
    const personaIndex = arrayBidimensional.findIndex(persona => persona.dni === dni);

    if (personaIndex !== -1) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        if (confirmacion) {
            arrayBidimensional.splice(personaIndex, 1);
            console.log("Usuario eliminado exitosamente.");
        } else {
            console.log("Eliminación cancelada.");
        }
    } else {
        console.log("No se encontró un usuario con ese DNI.");
    }
}

console.log(buscarPorApellidos("Cabezas"));