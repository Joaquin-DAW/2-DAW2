/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo pero expresado en horas, 
minutos y segundos.*/

let tiempo = prompt("Introduce un tiempo en segundos");

let horas = Math.floor(tiempo / 3600);
let minutos = Math.floor((tiempo % 3600) / 60);
let segundos = tiempo % 60;

console.log("El tiempo introducido es "+horas+" horas "+minutos+" minutos " +segundos+ " segundos ");