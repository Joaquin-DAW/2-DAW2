window.addEventListener("load", inicializar, false);

function inicializar(){
    crearEstructura()
}

const noticiasJSON = [
    {titular: "Noticia 1", resumen: "Resumen de la noticia 1", descripcion: "Esta es la noticia 1"},
    {titular: "Noticia 2", resumen: "Resumen de la noticia 2", descripcion: "Esta es la noticia 2"},
    {titular: "Noticia 3", resumen: "Resumen de la noticia 3", descripcion: "Esta es la noticia 3"}];

function crearEstructura() {
    var contenedor = document.getElementById("noticias");

    noticiasJSON.forEach((item, index) =>{
        var divNoticia = document.createElement("div");
        divNoticia.id = "noticia"+(index+1);

        var titulo =document.createElement("h1");
        titulo.textContent=item.titular;
        divNoticia.appendChild(titulo);

        var resumen = document.createElement("p");
        resumen.id="resumen"+(index+1);
        resumen.textContent=item.resumen;
        divNoticia.appendChild(resumen);

        var imagen = document.createElement("img");
        imagen.src="./imagenes/mostrar.jpg";
        imagen.setAttribute("name", "mostrar");
        imagen.setAttribute("style","width: 30px");
        divNoticia.appendChild(imagen);

        var descripcion = document.createElement("h4");
        descripcion.setAttribute("style", "display: none");
        descripcion.textContent=item.descripcion;
        divNoticia.appendChild(descripcion);

        contenedor.appendChild(divNoticia);

        imagen.addEventListener("click", () => {
            mostrarDescripcion(descripcion, imagen);
        });
    })

    function mostrarDescripcion(descripcion, imagen) {
        if (descripcion.style.display == "block" ) { /*Con esta condición comprobamos que ambos elementos se encuentren visibles, si es True
                                                                                                (que esten visibles) pasarán a estar ocultos (none). Pero en el primer caso ninguna de las
                                                                                                dos imagenes tiene un elemento display por lo que no se cumplirá esta condición y pasarán a 
                                                                                                estar ocultas*/
            descripcion.style.display = "none";  // Ocultar
            imagen.src="./imagenes/mostrar.jpg";
        } else {
            descripcion.style.display = "block";   // Mostrar
            imagen.src="./imagenes/ocultar.png";
        }
    }
}