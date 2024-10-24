/*Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, la valide para que esté comprendida entre 0 y 10 y 
se escriba en letras de la siguiente manera:

    SUSPENSO si es menor que 5
    APROBADO mayor que 5 y menor que 6
    BIEN entre 6 y 7
    NOTABLE entre 7 y 8
    SOBRESALIENTE entre 9 y 10
*/

let nota = parseInt(prompt("Escriba una nota",0));

while (nota<0 || nota>10){

    console.log("Esta nota no es valida, debe estar entre 0 y 10");

    nota = parseInt(prompt("Escriba una nota valida"));
}

if (nota<5){
    console.log("Lo siento, pero estas suspenso")
}
else if (nota>5 && nota<6){
    console.log("Estas aprobado")
}
else if (nota>=6 && nota<7){
    console.log("Bien")
}
else if (nota>=7 && nota<=8){
    console.log("Notable")
}
else if (nota>=9 && nota<=10){
    console.log("Sobresaliente")
}