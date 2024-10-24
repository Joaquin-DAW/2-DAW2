/*Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. Después el programa debe mostrar la edad 
del usuario por pantalla.*/ 

let texto = prompt("Introduce tu nombre, tu profesión y por último tu edad, deben estar separados por coma:");

let edad=0;

let secciones = texto.split(",");

edad= secciones[2];

console.log("Tu edad es de "+edad+" años");