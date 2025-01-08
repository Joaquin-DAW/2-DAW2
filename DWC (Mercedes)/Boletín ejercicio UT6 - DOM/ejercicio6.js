/*Crea un documento que contenga una tabla con al menos 20 filas y 20 columnas (sin copia-pega, usando bucles). 
Pon texto en las celdas, todo ello mediante DOM.*/ 

for (var i = 1; i <= 20; i++) {
    var tablaTr = document.createElement("tr");
    for (var j = 1; j <= 20; j++) {
    var tablaTd = document.createElement("td");
    tablaTd.style.border = "1px solid black"; //añadimos un borde negro a la tabla para poder verla.
    tablaTr.appendChild(tablaTd);
    var texto= document.createTextNode("prueba " + i +"-"+j);
    tablaTd.appendChild(texto);
    }

    tabletest.appendChild(tablaTr);
}