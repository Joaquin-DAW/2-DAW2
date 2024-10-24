/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre 
los paréntesis. Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. Si no existe el signo “(“ mostrará una cadena vacía y si 
existe el signo “(“ pero no el signo “)” mostrará desde el primer paréntesis hasta el final.*/ 

let texto = prompt("Introduce un texto");

let primerP = texto.indexOf("(");
let ultimoP = texto.indexOf(")");

if (primerP>-1 && ultimoP>-1){
    console.log(texto.substring(primerP+1, ultimoP));
}
else if (primerP==-1){
    console.log(" ");
}
else if (primerP>-1 && ultimoP==-1){      
    console.log(texto.substring(primerP+1));
}