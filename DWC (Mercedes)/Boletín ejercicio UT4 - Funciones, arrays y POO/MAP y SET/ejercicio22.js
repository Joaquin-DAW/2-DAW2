/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). 
Añade la información con posterioridad a la creación de la estructura.

        Muestra cuántos módulos hay almacenados
        Muestra el contenido de la estructura
        Devuelve las abreviaturas de todos los módulos guardados
        Devuelve el nombre completo de todos los módulos
        Consulta si está el módulo "DAW"
        Si está, elimínalo.
        Ordena alfabéticamente el map según las abreviaturas de los módulos*/ 

let modulos = new Map();

modulos.set("DWECL", "Desarrollo Web en Entorno Cliente");
modulos.set("DWES", "Desarrollo Web en Entorno Servidor");
modulos.set("DAW", "Desarrollo de Aplicaciones Web");
modulos.set("DIW", "Diseño de Interfaces Web");
modulos.set("EIE", "Empresa e Iniciativa Emprendedroa");

console.log("Cantidad de módulos almacenados: " + modulos.size);
console.log();

console.log("Contenido del Map:");
modulos.forEach((value, key) => {
    console.log(key +": "+ value );
});
console.log();

console.log("Las abreviaturas de todos los módulos:");
for (var key of modulos.keys()){
    console.log(key);
}
console.log();

console.log("El nombre completo de  todos los módulos:");
for (var value of modulos.values()){
    console.log(value);
}
console.log();

var moduloBuscar = "DAW";

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
    console.log(key +": "+ value );
});
console.log();

//Ordenar el map

var arrayOrdenado = [...modulos];

var mapOrdenado = new Map(arrayOrdenado.sort());

console.log("Contenido del Map después de ordenarlo:");
mapOrdenado.forEach((value, key) => {
    console.log(key +": "+ value );
});