let num = prompt("Introduce un número",0);
let inver=0;

if (num==0){
     alert("El 0 no tiene inverso.");
}
else{
     inver = num*1/num;
     alert("El valor inverso del número "+num+" es "+inver);
}