let radio = prompt("Introduce el radio",0);
const PI = 3.14;

let area = Math.pow(parseInt(radio),2)*PI;
let volumen = 4/3*PI*Math.pow(parseInt(radio),3);

alert("El área de una circunferencia con radio "+radio+" es "+area);
alert("El volumen de una circunferencia con radio "+radio+" es "+volumen);