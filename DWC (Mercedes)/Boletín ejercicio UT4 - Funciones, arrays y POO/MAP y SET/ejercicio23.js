/*En este ejercicio, de cada módulo se desea guardar su nombre, duración y alumnos matriculados (módulo, duración, numAlumnos).
Utiliza la estructura que sea más conveniente. 
        Comprueba si existe en tu estructura el módulo “DWS” (Servidor) y si es así devuelve el número de alumnos matriculados en dicho módulo.
        Calcula el número total de alumnos matriculados en todos los módulos*/ 

let modulos = new Map();

modulos.set("DWS", { nombre: "Desarrollo Web en Servidor", duracion: "6 meses", numAlumnos: 15 });
modulos.set("DWECL", { nombre: "Desarrollo Web en Entorno Cliente", duracion: "5 meses", numAlumnos: 25 });
modulos.set("DAW", { nombre: "Desarrollo de Aplicaciones Web", duracion: "9 meses", numAlumnos: 30 });
modulos.set("DIW", { nombre: "Diseño de Interfaces Web", duracion: "4 meses", numAlumnos: 20 });
modulos.set("EIE", { nombre: "Empresa e Inicitiva Emprendedora", duracion: "7 meses", numAlumnos: 10 });


console.log("Cantidad de módulos almacenados: " + modulos.size);
console.log();

console.log("Contenido del Map:");
modulos.forEach((value, key) => {
    console.log("Modulo: "+key+ ", Nombre: "+value.nombre+", Duración: "+value.duracion+", Alumnos Matriculados: "+value.numAlumnos);
});

var moduloBuscar = "DWS";

if (modulos.has(moduloBuscar)) {
    console.log("El módulo "+moduloBuscar+" está presente: "+modulos.get(moduloBuscar));
    modulos.delete(moduloBuscar);
    console.log("El módulo "+moduloBuscar+" ha sido eliminado.");
} else {
    console.log("El módulo "+moduloBuscar+" no está presente.");
}
console.log();

console.log("Contenido del Map después de eliminar el módulo:");
modulos.forEach((value, key) => {
    console.log("Modulo: "+key+ ", Nombre: "+value.nombre+", Duración: "+value.duracion+", Alumnos Matriculados: "+value.numAlumnos);
});
