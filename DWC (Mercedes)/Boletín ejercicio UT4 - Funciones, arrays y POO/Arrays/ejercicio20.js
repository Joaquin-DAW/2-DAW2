/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad.
¿Cómo podríamos optimizar la búsqueda? */

// Declaramos un array vacío llamado 'usuarios' donde almacenaremos los datos de las personas
let usuarios = [];

// Función para capturar los datos de las personas
function capturarDatos() {
    // Usamos 'prompt' para pedir al usuario que ingrese los datos, separados por comas (nombre, apellidos, DNI, fecha de nacimiento)
    let datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Deja vacío para salir:");

    // Usamos un ciclo 'while' que seguirá pidiendo datos mientras el usuario no ingrese una cadena vacía
    while (datos !== "") {
        // Usamos 'split' para dividir la cadena ingresada en un array de datos usando la coma como delimitador
        let arrayDatos = datos.split(",");

        // Verificamos si el array tiene exactamente 4 elementos (nombre, apellidos, DNI, fecha de nacimiento)
        if (arrayDatos.length === 4) {
            // Si es correcto, creamos un objeto con las propiedades 'nombre', 'apellidos', 'dni', 'fechaNacimiento' y lo agregamos al array 'usuarios'
            usuarios.push({
                nombre: arrayDatos[0].trim(), // Eliminamos los posibles espacios extra alrededor del nombre
                apellidos: arrayDatos[1].trim(), // Eliminamos los posibles espacios extra alrededor de los apellidos
                dni: arrayDatos[2].trim(), // Eliminamos los posibles espacios extra alrededor del DNI
                fechaNacimiento: arrayDatos[3].trim() // Eliminamos los posibles espacios extra alrededor de la fecha de nacimiento
            });
        } else {
            // Si no tiene 4 elementos, mostramos un mensaje de error
            console.log("Por favor, ingresa los datos en el formato correcto.");
        }

        // Volvemos a pedir los datos al usuario. Si el usuario deja vacío el campo, el ciclo terminará
        datos = prompt("Introduce nombre, apellidos, DNI y fecha de nacimiento separados por comas. Introduce cadena vacía para salir:");
    }
}

// Función para imprimir todos los datos de las personas almacenadas en el array 'usuarios'
function imprimirDatos() {
    // Mostramos un mensaje en consola indicando que vamos a imprimir los datos
    console.log("Datos de las personas:");

    // Usamos 'forEach' para recorrer cada objeto en el array 'usuarios' y lo mostramos en la consola
    usuarios.forEach(persona => {
        console.log(`Nombre: ${persona.nombre} Apellidos: ${persona.apellidos} DNI: ${persona.dni} Fecha de Nacimiento: ${persona.fechaNacimiento}`);
    });
}

// Función para buscar personas por apellidos
function buscarPorApellidos(apellidos) {
    // Usamos 'filter' para recorrer el array 'usuarios' y encontrar todas las personas cuyo apellido coincida
    // Convertimos los apellidos a minúsculas para hacer la búsqueda insensible a mayúsculas/minúsculas
    return usuarios.filter(persona => persona.apellidos.toLowerCase() === apellidos.toLowerCase());
}

// Función para buscar una persona por su DNI
function buscarPorDNI(dni) {
    // Usamos 'find' para encontrar el primer objeto cuyo DNI coincida con el ingresado
    // 'find' devuelve el primer elemento que cumpla con la condición
    return usuarios.find(persona => persona.dni === dni);
}

// Función para calcular la edad de una persona en función de su fecha de nacimiento
function calcularEdad(fechaNacimiento) {
    // Obtenemos la fecha actual
    const hoy = new Date();

    // Convertimos la fecha de nacimiento a un objeto Date
    const nacimiento = new Date(fechaNacimiento);

    // Calculamos la edad inicial restando los años
    let edad = hoy.getFullYear() - nacimiento.getFullYear();

    // Calculamos la diferencia de meses entre la fecha actual y la fecha de nacimiento
    const mes = hoy.getMonth() - nacimiento.getMonth();

    // Si aún no hemos llegado al cumpleaños este año, restamos un año
    if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
        edad--;
    }

    // Retornamos la edad calculada
    return edad;
}

// Función para buscar personas por su edad
function buscarPorEdad(edad) {
    // Usamos 'filter' para recorrer el array 'usuarios' y encontrar todas las personas cuya edad coincida
    return usuarios.filter(persona => calcularEdad(persona.fechaNacimiento) === edad);
}

// Llamamos a la función para capturar los datos de las personas
capturarDatos();

// Llamamos a la función para imprimir los datos de todas las personas registradas
imprimirDatos();

// Realizamos algunas búsquedas y mostramos los resultados en la consola

// Búsqueda de personas con el apellido 'Cabezas'
console.log("Búsqueda por apellidos 'Cabezas':", buscarPorApellidos("Cabezas"));

// Búsqueda de una persona con el DNI '12345678X'
console.log("Búsqueda por DNI '12345678X':", buscarPorDNI("12345678X"));

// Búsqueda de personas con la edad 25
console.log("Búsqueda por edad 25:", buscarPorEdad(25));