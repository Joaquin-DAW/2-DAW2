/*Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción. 
El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.*/

let num = parseInt(prompt("Introduce la cantidad de Euros que quieres convertir"));

while (num !=0){
    let moneda = prompt("¿A que otra moneda quieres pasarlo? Escribe Dólares, Libras, Yenes, Franco Sizo o Corona Noruega.");

    if (moneda=="Dólares"){
        moneda=num*1.12
        console.log("La conversión de "+num+"€ a dólares es igual a "+parseFloat(moneda)+"$")
    }

    else if (moneda=="Libras"){
        moneda=num*0.83
        console.log("La conversión de "+num+"€ a libras es igual a "+parseFloat(moneda)+"£")
    }

    else if (moneda=="Franco Suizo"){
        moneda=num*0.94
        console.log("La conversión de "+num+"€ a franco suizo es igual a "+parseFloat(moneda)+"Fr")
    }

    else if (moneda=="Corona Noruega"){
        moneda=num*11.72
        console.log("La conversión de "+num+"€ a corona noruega es igual a "+parseFloat(moneda)+"kr")
    }
    else{
        moneda = prompt("Ese valor no es valido");
    }

    num = parseInt(prompt("¿Quieres introducir otra cantidad o salir? Para salir escribe 0",0));
}