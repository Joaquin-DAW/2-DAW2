/*Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.*/

let cumpleanios = prompt("Introduce tu cumpleaños, en formato año-mes-dia");

let fechaCumpleanios = new Date(cumpleanios);

let diaCum = fechaCumpleanios.getDate();
let mesCum = fechaCumpleanios.getMonth();


let hoy = new Date();
let anioActual = hoy.getFullYear();
let cumpleaños = [];

let diaHoy = hoy.getDate();
let mesHoy = hoy.getMonth();

for (let i=0; i<50;i++){
    let proximoCum = new Date(anioActual+i, mesCum-1, diaCum);
}