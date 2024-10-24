/*Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. 
Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador y el texto acaba con un punto, no existe ningún punto y 
aparte y las palabras son todas correctas.*/ 

let texto = prompt("Introduce un texto");
let empiezanA=0;

let palabras = texto.split(/\s+/);

for (let i = 0; i < palabras.length; i++) {
    if (palabras[i].indexOf("A")==0) {
        empiezanA++;
    }
}

console.log("Has introducido "+palabras.length+" palabras, de las cuales "+empiezanA+" comienzan por A");