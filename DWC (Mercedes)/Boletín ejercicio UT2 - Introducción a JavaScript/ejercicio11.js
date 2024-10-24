/*Hacer un algoritmo que lea el número correspondiente a un mes del calendario y presente en pantalla su nombre usando una estructura de 
control adecuada.*/

let num = parseInt(prompt("Escriba un número correspondiente a un mes"));

if (num==1){
    console.log("Enero");
}
else if(num==2){
    console.log("Febrero");
}
else if(num==3){
    console.log("Marzo");
}
else if(num==4){
    console.log("Abril");
}
else if(num==5){
    console.log("Mayo");
}
else if(num==6){
    console.log("Junio");
}
else if(num==7){
    console.log("Julio");
}
else if(num==8){
    console.log("Agosto");
}
else if(num==9){
    console.log("Septiembre");
}
else if(num==10){
    console.log("Octubre");
}
else if(num==11){
    console.log("Noviembre");
}
else if(num==12){
    console.log("Diciembre");
}
else{
    console.log("El número introducido no se corresponde con ningún mes")
}