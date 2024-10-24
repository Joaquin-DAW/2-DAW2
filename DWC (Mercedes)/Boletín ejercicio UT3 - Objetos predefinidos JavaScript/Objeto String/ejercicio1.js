/*Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". Contar cuántos nombres se han leído, cuántos comienzan C 
y cuántos contienen la ñ.*/ 

let nombre = prompt("Introduce un nombre");

let contador=0;
let comienzanC=0;
let contienenÑ=0;

while (nombre != "ULTIMO"){

    if (nombre.indexOf("C")==0){
        comienzanC++;
    }

    if (nombre.match("ñ")){
        contienenÑ++;
    }

    nombre = prompt("Introduce otro nombre");

    contador++;
}

console.log("Se han leido "+contador+" nombres, "+comienzanC+" que comiencen por la C y "+contienenÑ+" que contengan la ñ");