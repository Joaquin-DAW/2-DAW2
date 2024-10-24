/*Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.*/

let fechaNacimiento = prompt("Introduce tu fecha de nacimiento en formato dia/mes");

let partes = fechaNacimiento.split("/");
let dia = parseInt(partes[0]);
let mes = parseInt(partes[1]); 

let fechaCumpleanios = new Date(cumpleanios);
let hoy = new Date();

let añoActual = hoy.getFullYear();
let proximoCumple = new Date(añoActual, fechaCumpleanios.getMonth(), fechaCumpleanios.getDate());

if (hoy > proximoCumple) {
    proximoCumple.setFullYear(añoActual + 1);
}

let diferencia = proximoCumple - hoy;

let diasFaltantes = parseInt(diferencia / (1000 * 60 * 60 * 24));

if (diasFaltantes === 0) {
    console.log("¡Felicidades! Es tu cumpleaños");
} else {
    console.log(`Faltan ${diasFaltantes} días para tu cumpleaños`);
}