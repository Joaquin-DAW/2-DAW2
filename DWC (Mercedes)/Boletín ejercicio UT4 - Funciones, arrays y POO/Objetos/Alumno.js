/*Crear un clase Alumno con su nombre, DNI, ... (objeto Persona), curso y notas de cada módulo. Crear su constructor y un método para imprimir 
un Alumno, otro que devuelva la nota media y otro para obtener su mejor nota y el nombre del módulo con esa nota (puede tener la misma nota 
en varios módulos). */

class Alumno extends Persona { /*Se define una clase Alumno que hereda de la clase Persona, lo que significa que Alumno tiene todas las propiedades y 
                                métodos de Persona y puede añadir más o sobrescribir los existentes.*/

    constructor(nombre, apellidos, dni, curso, notasMap) {
        super(nombre, apellidos, dni) //Llamamos al constructor de la clase persona
        this.curso = curso;
        this.notasMap = new Map(notasMap); /*Inicializa notasMap como un objeto Map, que es una estructura de datos clave-valor. 
                                            Se usa Map porque permite un acceso eficiente y puede almacenar cualquier tipo de clave.*/
    };

    datosAlumnos() {        //Método que imprime la información del alumno.
        console.log("Nombre: " + this.nombre); //Imprime en la consola las propiedades nombre, apellidos, dni y curso del alumno.
        console.log("Apellido: " + this.apellidos);
        console.log("DNI: " + this.dni);
        console.log("Curso: " + this.curso);
        for (let [modulo, nota] of this.notasMap) { //Itera sobre notasMap, que es un Map. Cada iteración devuelve un par [modulo, nota].
            console.log("Modulo: " + modulo + " - Nota: " + nota); //Imprime el nombre del módulo y su respectiva nota.
        }
    }

    notaMedia() {        //Método que calcula y devuelve la nota media del alumno.
        var totalNotas = Array.from(this.notasMap.values())    /*Convierte los valores de notasMap (las notas) en un array. reduce solo funciona con arrays, 
                                                                por lo que es necesario convertir el iterador de valores de Map en un array.*/
        .reduce((acumulador, nota) => acumulador + nota, 0); /*Aplica una función que suma todos los elementos del array. El 0 es el valor inicial del acumulador.*/ 
       
        var cantidadModulos = this.notasMap.size; //Obtiene el número de módulos
        return totalNotas / cantidadModulos; //Devuelve la nota media dividiendo la suma total de notas por el número de módulos.
    };

    mejorNota() {       //Método que encuentra la mejor nota y los módulos que tienen esa nota.
        let mejorNota = -1;  //Inicializa mejorNota con un valor bajo para poder comparar con las notas reales
        let modulosConMejorNota = []; //Array vacío para almacenar los nombres de los módulos con la mejor nota.

        for (let [modulo, nota] of this.notasMap) {  //Recorre notasMap obteniendo pares [modulo, nota].
            if (nota > mejorNota) {  //Si la nota actual es mayor que mejorNota, actualiza mejorNota y reinicia modulosConMejorNota con el módulo actual.
                mejorNota = nota;
                modulosConMejorNota = [modulo];
            } else if (nota == mejorNota) {  //Si la nota actual es igual a mejorNota, añade el módulo a modulosConMejorNota.
                modulosConMejorNota.push(modulo);
            }
        }

        return { //Devuelve un objeto con la mejor nota y los módulos que tienen esa nota.
            nota: mejorNota,
            modulos: modulosConMejorNota
        };
    }
}