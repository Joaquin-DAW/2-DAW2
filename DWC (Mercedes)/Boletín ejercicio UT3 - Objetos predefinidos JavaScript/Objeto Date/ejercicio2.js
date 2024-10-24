/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.*/

let fecha1 = prompt("Introduce una fecha, formato día, mes y año");

let fecha2 = prompt("Introduce otra fecha, formato día, mes y año");

let fechaPosterior;
let fechaAnterior;

let fecha1milisegundos = new Date(fecha1);

let fecha2milisegundos = new Date(fecha2);

if (fecha1milisegundos>fecha2milisegundos){
    fechaPosterior = fecha1milisegundos;
    fechaAnterior = fecha2milisegundos;
}
else{
    fechaPosterior = fecha2milisegundos;
    fechaAnterior = fecha1milisegundos;
}


let anioP = fechaPosterior.getFullYear();

let mesP = fechaPosterior.getMonth() + 1; 

let diaP = fechaPosterior.getDate();


if (fechaPosterior<fechaAnterior){
    console.log("La fecha "+diaP+"/"+mesP+"/"+anioP+" es anterior a la fecha "+ fechaAnterior);
}
else{
    console.log("La fecha "+diaP+"/"+mesP+"/"+anioP+" es posterior a la fecha "+ fechaAnterior);
}