/*Escribe una función a la que se le pase como parámetro un array y devuelva ese mismo array después de eliminar los elementos repetidos.*/ 

let palabras = ["Hola", "Hola", "que", "tal", "Tal", "?", "?"];
palabras = [...new Set(palabras)];
console.log(palabras); 