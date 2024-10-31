/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir 
un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota 
en varios módulos). */
    
    class Alumno extends Persona {

        constructor(nombre, apellidos, dni, curso, notasMap) {
            super(nombre, apellidos, dni)
            this.curso = curso;
            this.notasMap = new Map(notasMap);
        };
    
        datosAlumnos() {
            console.log ("Nombre: "+Alumno.nombre);
            console.log ("Apellido: "+Alumno.apellidos);
            console.log ("DNI: "+Alumno.dni);
            console.log ("Curso: "+Alumno.curso);
            for(let [modulo, nota] of notasMap)
                {
                    console.log("Modulo: " + modulo + "Nota: " + nota);
                } 
        }

        notaMedia() {
            const totalNotas = Array.from(this.notas.values()).reduce((acc, nota) => acc + nota, 0);
            const cantidadModulos = this.notas.size; // Usando size en lugar de contar
            return totalNotas / cantidadModulos;
        };
    }
