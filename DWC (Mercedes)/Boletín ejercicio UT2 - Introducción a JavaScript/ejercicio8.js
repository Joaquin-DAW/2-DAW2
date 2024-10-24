let num = parseInt(prompt("Introduce la cantidad de números naturales que quieras ver, mostraremos el cuadrado, su cubo y la suma de todos ellos",0));

let sumatorio=0;

for (let i = 1; i < num+1; i++) {
     console.log(i);
     console.log("El cuadrado de "+i+" es "+i*i);
     console.log("El cubo de "+i+" es "+Math.pow(i, 3));
     sumatorio= sumatorio+i;
   }

console.log("El sumatorio de todos los número naturales que hemos sacado es "+sumatorio)