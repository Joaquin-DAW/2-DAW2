/*Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad.
¿Cómo podríamos optimizar la búsqueda? */

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

capturarDatos();
imprimirDatos();

console.log("Búsqueda por apellidos 'Cabezas':", buscarPorApellidos("Cabezas"));
console.log("Búsqueda por DNI '12345678X':", buscarPorDNI("12345678X"));
console.log("Búsqueda por edad 25:", buscarPorEdad(25));