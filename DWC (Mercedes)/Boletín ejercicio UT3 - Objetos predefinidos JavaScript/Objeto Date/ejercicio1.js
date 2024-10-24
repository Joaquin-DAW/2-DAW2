/*Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.*/

let fechaNacimiento = prompt("Introduce una fecha de nacimiento");

let fechaNacimiento2 = new Date(fechaNacimiento)

let fechaActual = Date.now();

console.log(fechaActual);

if (fechaActual>fechaNacimiento2){
    console.log("La fecha que has introducido es menor que la actual");
}
else{
    console.log("La fecha que has introducido es mayor que la actual");
}

