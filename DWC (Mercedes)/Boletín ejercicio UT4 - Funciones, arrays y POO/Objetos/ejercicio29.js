/*Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
        -buscar un alumno del aula por DNI.
        -ordenar por nota para un alumno en particular
        -ordenar el array de alumnos por apellido
        -imprimir los alumnos de un aula. */ 

class Aula extends Persona{
    constructor() {
        this.alumnos = [];
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno);
    }

    buscarAlumnoPorDNI(dni) {
        return this.alumnos.find(alumno => alumno.dni === dni);
    }

    ordenarPorNota(dni) {
        var alumno = this.buscarAlumnoPorDNI(dni);
        if (!alumno) return [];
        // Ordenar los módulos del alumno por nota
        var notasOrdenadas = Array.from(alumno.notasMap.entries()).sort((a, b) => b[1] - a[1]);
        return notasOrdenadas;
    }

    ordenarPorApellido() {
        return this.alumnos.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    }

    imprimirAlumnos() {
        this.alumnos.forEach(alumno => {
            alumno.datosAlumnos();
        });
    }
}