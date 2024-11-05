/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir 
un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota 
en varios módulos). */

var notas = [
    ["Matemáticas", 8],
    ["Historia", 9],
    ["Ciencias", 7],
    ["Literatura", 9]
];

var alumno = new Alumno("Juan", "Pérez", "12345678A", "2º ESO", notas);
alumno.datosAlumnos();
console.log("Nota media:", alumno.notaMedia());
console.log("Mejor nota y módulo(s):", alumno.mejorNota());