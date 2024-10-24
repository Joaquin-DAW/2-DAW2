/*Escribe una expresión regular que extraiga todas las URLs de un texto HTML.*/ 

let frase = prompt("Introduce un texto html con urls."+
    "<a href='https://www.ejemplo1.com'>Ejemplo</a>"+
    "<a href='http://otro-ejemplo2.com/pagina'>Otro Ejemplo</a>");

let buscar = new RegExp(/href=['"]+.+["']/g);

let soloURL = frase.match(buscar);

for (let i=0; i<soloURL.length; i++){
    console.log("Tus URL son: "+soloURL[i]);
}
