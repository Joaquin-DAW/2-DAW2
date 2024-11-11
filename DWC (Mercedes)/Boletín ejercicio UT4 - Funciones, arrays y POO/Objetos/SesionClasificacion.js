// Clase SesionClasificacion que representa una sesión de calificación con un piloto y su mejor tiempo
// Extiende de la clase Piloto para heredar sus atributos y métodos
class SesionClasificacion extends Piloto {
    // Constructor de la clase que recibe un objeto piloto y un tiempo
    constructor(piloto, tiempo) {
        super(piloto.nombre, piloto.equipo); // Llamada al constructor de la clase base (Piloto)
        this.piloto = piloto;
        this.tiempo = tiempo;
    }
}

// Creación de instancias de la clase Piloto y sus respectivas sesiones de calificación
let piloto1 = new Piloto("Joseco", "Renault"); // Crea un piloto llamado "Joseco" con la escudería "Renault"
let clasificacion1 = new SesionClasificacion(piloto1, 300000); // Crea una sesión de calificación con tiempo 300000 ms

let piloto2 = new Piloto("Ruben", "Ferrari"); // Crea un piloto llamado "Ruben" con la escudería "Ferrari"
let clasificacion2 = new SesionClasificacion(piloto2, 280000); // Crea una sesión de calificación con tiempo 280000 ms

let piloto3 = new Piloto("Huascar", "Lamborghini"); // Crea un piloto llamado "Huascar" con la escudería "Lamborghini"
let clasificacion3 = new SesionClasificacion(piloto3, 310000); // Crea una sesión de calificación con tiempo 310000 ms

// Lista de sesiones de calificación que agrupa todas las instancias creadas
let listaClasificaciones = [clasificacion1, clasificacion2, clasificacion3];

// Función para ordenar la lista de sesiones por tiempo de menor a mayor
// Esta es una función flecha que toma una lista como argumento y devuelve una lista ordenada
const listaClasiOrdenada = (lista) => {
    // Uso del operador spread (...) para crear una copia superficial de la lista
    // y mantener inmutable la lista original
    return [...lista].sort((a, b) => a.tiempo - b.tiempo);
    // sort() es un método que ordena la lista. Aquí se usa una función de comparación
    // que resta los tiempos de dos elementos (orden ascendente)
};

// Ordena la lista de clasificaciones por tiempo y la imprime
let listaOrdenadaTiempo = listaClasiOrdenada(listaClasificaciones); // Llama a la función de ordenación
console.log("Lista ordenada por tiempo:"); // Imprime un encabezado
for (let clasificacion of listaOrdenadaTiempo) {
    // Itera sobre la lista ordenada y muestra el nombre del piloto y su tiempo
    console.log(`Nombre: ${clasificacion.piloto.nombre} - Tiempo: ${clasificacion.tiempo}`);
}

// Función para ordenar la lista de sesiones por nombre de piloto alfabéticamente
const listaOrdenadaNombre = (lista) => {
    // Se crea una copia de la lista original usando el operador spread (...)
    return [...lista].sort((a, b) =>
        a.piloto.nombre.toLowerCase().localeCompare(b.piloto.nombre.toLowerCase())
    );
    // localeCompare() compara cadenas de texto alfabéticamente sin tener en cuenta mayúsculas y minúsculas
};

// Ordena la lista de clasificaciones por nombre y la imprime
let listaOrdNombre = listaOrdenadaNombre(listaClasificaciones); // Llama a la función de ordenación por nombre
console.log("\nLista ordenada por nombre:"); // Imprime un encabezado
for (let clasificacion of listaOrdNombre) {
    // Itera sobre la lista ordenada y muestra el nombre del piloto y su tiempo
    console.log(`Nombre: ${clasificacion.piloto.nombre} - Tiempo: ${clasificacion.tiempo}`);
}

// Comprobación de funcionalidades adicionales
console.log("\nComprobación de orden y funcionalidades:");

// Función para agregar una nueva sesión o actualizar el tiempo si el piloto ya existe
function agregarOActualizarSesion(lista, nuevaSesion) {
    // findIndex() busca la posición de un elemento en la lista que cumple con la condición
    let indice = lista.findIndex(sesion => sesion.piloto.nombre === nuevaSesion.piloto.nombre);
    if (indice !== -1) {
        // Si el índice es diferente de -1, significa que el piloto ya existe en la lista
        if (nuevaSesion.tiempo < lista[indice].tiempo) {
            // Actualiza el tiempo solo si el nuevo es menor al existente
            lista[indice].tiempo = nuevaSesion.tiempo;
            console.log(`Tiempo actualizado para ${nuevaSesion.piloto.nombre}`);
        }
    } else {
        // Si no se encuentra el piloto, agrega la nueva sesión al final de la lista
        lista.push(nuevaSesion);
        console.log(`Nueva sesión añadida para ${nuevaSesion.piloto.nombre}`);
    }
}

// Función para eliminar una sesión si existe en la lista
function eliminarSesion(lista, nombrePiloto) {
    // Busca el índice de la sesión con el nombre del piloto dado
    let indice = lista.findIndex(sesion => sesion.piloto.nombre === nombrePiloto);
    if (indice !== -1) {
        // Si se encuentra la sesión, se elimina con splice()
        lista.splice(indice, 1);
        console.log(`Sesión eliminada para ${nombrePiloto}`);
    } else {
        // Si no se encuentra, imprime un mensaje de error
        console.log(`No se encontró sesión para ${nombrePiloto}`);
    }
}

// Ejemplo de uso de agregarOActualizarSesion y eliminarSesion

// Crear una nueva sesión de calificación para agregar o actualizar
let nuevoPiloto = new Piloto("Carlos", "McLaren");
let nuevaSesion = new SesionClasificacion(nuevoPiloto, 290000);

// Llamar a la función para agregar o actualizar la sesión
agregarOActualizarSesion(listaClasificaciones, nuevaSesion);

// Mostrar la lista de clasificaciones después de agregar o actualizar
console.log("\nLista de clasificaciones después de agregar o actualizar:");
listaClasificaciones.forEach(clasificacion => {
    console.log(`Nombre: ${clasificacion.piloto.nombre} - Tiempo: ${clasificacion.tiempo}`);
});

// Llamar a la función para eliminar una sesión de un piloto
eliminarSesion(listaClasificaciones, "Ruben");

// Mostrar la lista de clasificaciones después de eliminar
console.log("\nLista de clasificaciones después de eliminar:");
listaClasificaciones.forEach(clasificacion => {
    console.log(`Nombre: ${clasificacion.piloto.nombre} - Tiempo: ${clasificacion.tiempo}`);
});