/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
        -buscar un alumno del aula por DNI.
        -ordenar por nota para un alumno en particular
        -ordenar el array de alumnos por apellido
        -imprimir los alumnos de un aula.*/

var notas1 = [
    ["Matemáticas", 8],
    ["Historia", 9],
    ["Ciencias", 7],
    ["Literatura", 9]
];

var notas2 = [
    ["Matemáticas", 6],
    ["Historia", 7],
    ["Ciencias", 8],
    ["Literatura", 5]
];

var notas3 = [
    ["Matemáticas", 9],
    ["Historia", 8],
    ["Ciencias", 9],
    ["Literatura", 8]
];

var alumno1 = new Alumno("Juan", "Pérez", "12345678A", "2º ESO", notas1);
var alumno2 = new Alumno("Ana", "Gómez", "23456789B", "2º ESO", notas2);
var alumno3 = new Alumno("Luis", "Martínez", "34567890C", "2º ESO", notas3);

var aula = new Aula();
aula.agregarAlumno(alumno1);
aula.agregarAlumno(alumno2);
aula.agregarAlumno(alumno3);

var dniBuscado = "12345678A";

// Buscar un alumno por DNI
var alumnoBuscado = aula.buscarAlumnoPorDNI("23456789B");
console.log("Alumno encontrado:", alumnoBuscado);

// Ordenar los alumnos por su nota
var notasOrdenadas = aula.ordenarPorNota(dniBuscado);
console.log("Notas ordenadas del alumno con DNI"+dniBuscado);
    notasOrdenadas.forEach(([modulo, nota]) => {
        console.log("Módulo: "+modulo+ " , Nota: "+ nota);
    });

// Ordenar los alumnos por apellido
console.log("Alumnos ordenados por apellido:");
aula.ordenarPorApellido().forEach(alumno => {
    console.log(alumno.nombre, alumno.apellidos);
});

// Imprimir todos los alumnos del aula
console.log("Listado de alumnos:");
aula.imprimirAlumnos();