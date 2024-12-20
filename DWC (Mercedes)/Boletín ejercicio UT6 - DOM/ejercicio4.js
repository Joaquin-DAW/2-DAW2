/*Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera que no use innerHTML, es decir, 
crea los nodos elementos y textos necesarios y añádelos a un HTML. 

function get_fortune() {
    var hoy = new Date(); dichos = new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.",
        "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir."
    );
    var n = dichos.length;
    numero = Math.floor(Math.random() * n);
    dicho = "Hoy es: " + hoy + ".<br /><br />Hoy la suerte te dice:
        < br /><br /><em>" +dichos[numero] +"</em>"; document.getElementById('divdicho').innerHTML = dicho;
}
*/

window.addEventListener("load", function () {
    function get_fortune() {
        var hoy = new Date();
        var dichos = new Array(
            "Carpe Diem.",
            "El silencio es oro, pero la cinta aislante es plata.",
            "Una manzana al día, mantiene al doctor en la lejanía.",
            "A cada uno lo suyo.",
            "Si a la primera no lo consigues, inténtalo de nuevo.",
            "No te conformes con la mediocridad, pelea por el éxito",
            "Vive y deja vivir."
        );

        // Generar un índice aleatorio para seleccionar un dicho
        var numero = Math.floor(Math.random() * dichos.length);

        // Obtener el contenedor donde se mostrará la fortuna
        var contenedor = document.getElementById('divdicho');

        // Crear un nodo para mostrar la fecha
        var parrafoFecha = document.createElement('p');
        var textoFecha = document.createTextNode("Hoy es: " + hoy);
        parrafoFecha.appendChild(textoFecha); // Añadir el texto al párrafo
        contenedor.appendChild(parrafoFecha); // Añadir el párrafo al contenedor

        // Crear un nodo para mostrar el mensaje introductorio
        var parrafoIntro = document.createElement('p');
        var textoIntro = document.createTextNode("Hoy la suerte te dice:");
        parrafoIntro.appendChild(textoIntro); // Añadir el texto al párrafo
        contenedor.appendChild(parrafoIntro); // Añadir el párrafo al contenedor

        // Crear un nodo para el dicho, con un formato en cursiva
        var parrafoDicho = document.createElement('p');
        var textoDicho = document.createElement('em'); // Crear elemento <em> para texto en cursiva
        var textoDichoContenido = document.createTextNode(dichos[numero]);
        textoDicho.appendChild(textoDichoContenido); // Añadir el contenido al <em>
        parrafoDicho.appendChild(textoDicho); // Añadir el <em> al párrafo
        contenedor.appendChild(parrafoDicho); // Añadir el párrafo al contenedor
    }
    get_fortune();
});