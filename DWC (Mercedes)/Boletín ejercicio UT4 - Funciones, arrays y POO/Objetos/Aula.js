class Aula {
    constructor() {
        this.alumnos = []; //Inicializa un array vacío para almacenar los alumnos
    }

    agregarAlumno(alumno) {
        this.alumnos.push(alumno); //Agrega un nuevo alumno al array de alumnos
    }

    buscarAlumnoPorDNI(dni) {
        return this.alumnos.find(alumno => alumno.dni === dni); //Busca un alumno por su DNI
    }

    ordenarPorNota(dni) {
        var alumno = this.buscarAlumnoPorDNI(dni); //Busca al alumno con el DNI dado
        if (!alumno) return []; //Devuelve un array vacío si no se encuentra el alumno
        // Ordenar los módulos del alumno por nota
        var notasOrdenadas = Array.from(alumno.notasMap.entries()).sort((a, b) => b[1] - a[1]);
        return notasOrdenadas; // Devuelve el array de notas ordenadas
    }

    ordenarPorApellido() {
         /* Ordena los alumnos por apellido usando localeCompare para soportar acentos y comparaciones precisas */
        return this.alumnos.sort((a, b) => a.apellidos.localeCompare(b.apellidos));
    }

    imprimirAlumnos() {
        this.alumnos.forEach(alumno => {
            alumno.datosAlumnos(); // Llama al método datosAlumnos de cada objeto alumno
        });
    }
}