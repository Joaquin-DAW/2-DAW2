/*Añade al ejercicio anterior las siguientes funciones, utiliza además las funciones creadas anteriormente (utiliza los métodos 
ya implementados de Array y funciones flecha):
-mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana.
-menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.
-modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.
-eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicita confirmación antes de eliminar. */

// Array donde almacenaremos los datos de los usuarios
let usuarios = [];

// Función que captura los datos de los usuarios
function capturarDatos() {
    // Solicitamos los datos al usuario con un prompt (nombre, apellidos, DNI, fecha de nacimiento)
    let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Deja vacío para salir:");
    
    // Mientras el usuario no haya ingresado una cadena vacía, sigue pidiendo datos
    while (datos !== "") {
        // Separamos los datos introducidos por comas y los almacenamos en un array
        let arrayDatos = datos.split(",");
        
        // Comprobamos que se hayan introducido 4 elementos (nombre, apellidos, DNI, fechaNacimiento)
        if (arrayDatos.length === 4) {
            // Agregamos un nuevo objeto al array usuarios con los datos introducidos
            usuarios.push({
                nombre: arrayDatos[0].trim(),       // Eliminamos los posibles espacios antes o después del nombre
                apellidos: arrayDatos[1].trim(),    // Eliminamos los espacios en los apellidos
                dni: arrayDatos[2].trim(),          // Eliminamos los espacios en el DNI
                fechaNacimiento: arrayDatos[3].trim() // Eliminamos los espacios en la fecha de nacimiento
            });
        } else {
            // Si no se introdujeron los 4 elementos correctamente, mostramos un mensaje de error
            console.log("Por favor, ingresa los datos en el formato correcto.");
        }
        
        // Pedimos los datos nuevamente, o finalizamos si se ingresa una cadena vacía
        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
    }
}

// Función que imprime los datos de todos los usuarios en la consola
function imprimirDatos() {
    console.log("Datos de las personas:");
    
    // Recorremos cada usuario en el array 'usuarios' y mostramos sus datos
    usuarios.forEach(persona => {
        console.log(`Nombre: ${persona.nombre} Apellidos: ${persona.apellidos} DNI: ${persona.dni} Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    });
}

// Función para buscar usuarios por apellidos
function buscarPorApellidos(apellidos) {
    // Filtramos los usuarios cuyo apellido coincida con el valor pasado (sin importar mayúsculas/minúsculas)
    return usuarios.filter(persona => persona.apellidos.toLowerCase() === apellidos.toLowerCase());
}

// Función para buscar un usuario por DNI
function buscarPorDNI(dni) {
    // Usamos 'find' para obtener el primer usuario cuyo DNI coincida con el proporcionado
    return usuarios.find(persona => persona.dni === dni);
}

// Función que calcula la edad de una persona a partir de su fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    // Creamos un objeto de tipo Date con la fecha actual (hoy)
    const hoy = new Date();
    
    // Creamos un objeto Date con la fecha de nacimiento proporcionada
    const nacimiento = new Date(fechaNacimiento);
    
    // Calculamos la edad inicial tomando la diferencia de los años actuales y los años de nacimiento
    let edad = hoy.getFullYear() - nacimiento.getFullYear();
    
    // Calculamos si ya pasó el cumpleaños este año. Si no, restamos un año a la edad
    const mes = hoy.getMonth() - nacimiento.getMonth();
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--; // Restamos 1 si aún no ha cumplido años este año
    }
    
    // Devolvemos la edad calculada
    return edad;
}

// Función para buscar usuarios que tengan una edad específica
function buscarPorEdad(edad) {
    // Filtramos los usuarios cuya edad coincida con la edad solicitada
    return usuarios.filter(persona => calcularEdad(persona.fechaNacimiento) === edad);
}

// Función para mostrar los usuarios mayores de edad
function mayorEdad() {
    // Filtramos los usuarios que son mayores o igual a 18 años
    const mayores = usuarios.filter(persona => calcularEdad(persona.fechaNacimiento) >= 18);
    
    // Creamos una cadena de texto con la información de los usuarios mayores de edad
    let resultado = "Usuarios mayores de edad:\n";
    mayores.forEach(persona => {
        resultado += `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Fecha de Nacimiento: ${persona.fechaNacimiento}\n`;
    });
    
    // Abrimos una nueva ventana y escribimos el resultado en ella
    window.open().document.write(resultado);
}

// Función para mostrar los usuarios menores de edad y el tiempo que les queda para la mayoría de edad
function menorEdad() {
    // Filtramos los usuarios que son menores de 18 años
    const menores = usuarios.filter(persona => calcularEdad(persona.fechaNacimiento) < 18);
    
    // Creamos una cadena de texto con la información de los menores de edad
    let resultado = "Usuarios menores de edad y el tiempo que les queda para ser mayores de edad:\n";
    menores.forEach(persona => {
        const edad = calcularEdad(persona.fechaNacimiento); // Calculamos la edad de la persona
        const aniosRestantes = 18 - edad; // Calculamos los años restantes para la mayoría de edad
        resultado += `Nombre: ${persona.nombre}, Apellidos: ${persona.apellidos}, DNI: ${persona.dni}, Edad: ${edad}, Le quedan ${aniosRestantes} años para la mayoría de edad.\n`;
    });
    
    // Abrimos una nueva ventana y escribimos el resultado en ella
    window.open().document.write(resultado);
}

// Función para modificar los datos de un usuario
function modificaDatos() {
    // Pedimos al usuario el DNI del usuario que desea modificar
    const dni = prompt("Introduce el DNI del usuario que deseas modificar:");
    
    // Buscamos al usuario por DNI
    const usuario = buscarPorDNI(dni);
    
    // Si el usuario existe, pedimos qué dato desea modificar
    if (usuario) {
        const datoAModificar = prompt("¿Qué dato deseas modificar? (nombre, apellidos, dni, fechaNacimiento):");
        
        // Pedimos el nuevo valor para ese dato
        const nuevoValor = prompt(`Introduce el nuevo valor para ${datoAModificar}:`);
        
        // Modificamos el dato del usuario
        usuario[datoAModificar] = nuevoValor.trim();
        
        // Imprimimos el usuario modificado
        console.log("Datos modificados correctamente:", usuario);
    } else {
        console.log("Usuario no encontrado.");
    }
}

// Función para eliminar un usuario del array
function eliminaUsuario() {
    // Pedimos el DNI del usuario a eliminar
    const dni = prompt("Introduce el DNI del usuario que deseas eliminar:");
    
    // Buscamos al usuario en el array por DNI
    const usuarioIndex = usuarios.findIndex(persona => persona.dni === dni);
    
    // Si encontramos al usuario, pedimos confirmación para eliminarlo
    if (usuarioIndex !== -1) {
        const confirmacion = confirm("¿Estás seguro de que deseas eliminar este usuario?");
        
        // Si el usuario confirma, eliminamos el usuario del array
        if (confirmacion) {
            usuarios.splice(usuarioIndex, 1); // Elimina el usuario encontrado
            console.log("Usuario eliminado.");
        } else {
            console.log("Eliminación cancelada.");
        }
    } else {
        console.log("Usuario no encontrado.");
    }
}

// Llamamos a las funciones para probar su funcionamiento
capturarDatos(); // Llama a la función para capturar los datos de los usuarios
imprimirDatos(); // Llama a la función para imprimir todos los datos capturados

// Realizamos algunas búsquedas para probar las funciones de búsqueda
console.log("Búsqueda por apellidos 'Cabezas':", buscarPorApellidos("Cabezas"));
console.log("Búsqueda por DNI '12345678X':", buscarPorDNI("12345678X"));
console.log("Búsqueda por edad 25:", buscarPorEdad(25));

// Llamamos a las nuevas funciones
mayorEdad(); // Muestra los usuarios mayores de edad
menorEdad(); // Muestra los usuarios menores de edad y el tiempo que les queda para ser mayores
modificaDatos(); // Modifica los datos de un usuario
eliminaUsuario(); // Elimina un usuario después de confirmar