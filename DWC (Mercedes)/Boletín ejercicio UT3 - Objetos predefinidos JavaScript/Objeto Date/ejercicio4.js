/*Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.*/

let fecha = prompt("Introduce varias fechas, separadas por coma");

let fechas = fecha.split(",");

let fechaMayor = fechas[0];
let fechaMenor = fechas[0];

for (let i=0; i<fechas.length; i++){
    if (fechaMayor<fechas[i]){
        fechaMayor = fechas[i];
    }
    if (fechaMenor>fechas[i]){
        fechaMenor = fechas[i];
    }
}

let diferenciaFechas = (new Date(fechaMayor)- new Date(fechaMenor));

let diferenciaFechasSegundos = diferenciaFechas/1000;

console.log("La fecha mayor es "+fechaMayor+" y la fecha menor es "+fechaMenor+ " y su diferencia en segundos es de "+diferenciaFechasSegundos);