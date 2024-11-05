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
            console.log("Nombre: " + this.nombre);
            console.log("Apellido: " + this.apellidos);
            console.log("DNI: " + this.dni);
            console.log("Curso: " + this.curso);
            for (let [modulo, nota] of this.notasMap) {
                console.log("Modulo: " + modulo + " - Nota: " + nota);
            }
        }

        notaMedia() {
            var totalNotas = Array.from(this.notasMap.values()).reduce((acc, nota) => acc + nota, 0);
            var cantidadModulos = this.notasMap.size; 
            return totalNotas / cantidadModulos;
        };
    
        mejorNota() {
            let mejorNota = -1;
            let modulosConMejorNota = [];
    
            for (let [modulo, nota] of this.notasMap) {
                if (nota > mejorNota) {
                    mejorNota = nota;
                    modulosConMejorNota = [modulo];
                } else if (nota === mejorNota) {
                    modulosConMejorNota.push(modulo);
                }
            }
    
            return {
                nota: mejorNota,
                modulos: modulosConMejorNota
            };
        }
    }