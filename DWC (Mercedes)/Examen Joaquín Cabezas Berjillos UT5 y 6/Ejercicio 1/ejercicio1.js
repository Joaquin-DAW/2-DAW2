window.addEventListener("load", inicializar, false);

function inicializar(){
    crearEstructura()
}

const jsonViaje = [
    {"clase_pais":"usa","ciudad_h2":"NewYork,NY","detalle_precio_total":"1,899","detalle_num_noches":7,
    "precio_noche":275,"ruta_imagen":"./photos/newyork.jpg","pie_imagen":"Puente Brooklyn"},
    {"clase_pais":"paris","ciudad_h2":"Paris,Francia","detalle_precio_total":"1,499","detalle_num_noches":5,
    "precio_noche":300,"ruta_imagen":"./photos/paris.jpg","pie_imagen":"Notre Dame de Paris"},
    {"clase_pais":"uk","ciudad_h2":"Londres,UK","detalle_precio_total":"2,199","detalle_num_noches":5,
    "precio_noche":440,"ruta_imagen":"./photos/london.jpg","pie_imagen":"Torre de Londres"}
];

var titulo = document.getElementById("mostrar");


function crearEstructura() {

    titulo.addEventListener("click", (event) => {
        if (event.target.tagName == "H1") {
            ocultarContenido(lista, titulo);
        }
    });

    var lista = document.createElement("ul");
    lista.style.display="none";

    jsonViaje.forEach(item => {
        var clase = document.createElement("li");
        clase.className="viaje "+item.clase_pais;

        var ciudad  = document.createElement("h2");
        ciudad.textContent=item.ciudad_h2;
        clase.appendChild(ciudad);

        var detalle = document.createElement("span");
        detalle.className="detalle";
        detalle.textContent=item.detalle_precio_total+ " por "+item.detalle_num_noches+" noches";
        clase.appendChild(detalle);

        var reserva = document.createElement("button");
        reserva.className="reserva";
        reserva.textContent="Resérvalo ya!";
        reserva.addEventListener("click", () => mostrarFormulario(reserva, item));
        clase.appendChild(reserva);

        var fotos = document.createElement("ul");
        fotos.className="fotos";
        clase.appendChild(fotos);

        var listaFotos = document.createElement("li");
        fotos.appendChild(listaFotos);

        var imagen = document.createElement("img");
        imagen.src=item.ruta_imagen;
        listaFotos.appendChild(imagen);

        var pie_imagen = document.createElement("span");
        pie_imagen.textContent=item.pie_imagen;
        listaFotos.appendChild(pie_imagen);

        /*imagen.addEventListener("mouseover", () => implementarDestacado(item.precio_noche, clase));
        pie_imagen.addEventListener("mouseover", () => implementarDestacado(item.precio_noche, clase));
        imagen.addEventListener("mouseout", ocultarDestacado);
        pie_imagen.addEventListener("mouseout", ocultarDestacado);*/

        lista.appendChild(clase);

    });

    titulo.appendChild(lista);
}

function ocultarContenido(lista, titulo) {
    if (lista.style.display == "none") {
        lista.style.display = "block";
        titulo.querySelector("h1").textContent = "OCULTAR VIAJES";

    } else {
        lista.style.display = "none";
        titulo.querySelector("h1").textContent = "MOSTRAR VIAJES";
    }
}

function mostrarFormulario(reservaBoton) {

    var estructuraForm = document.createElement("div");

    var formulario = document.createElement("input");
    formulario.type = "text";

    var botonAceptar = document.createElement("button");
    botonAceptar.textContent = "Aceptar";
    botonAceptar.addEventListener("click", () => guardarNombre(formulario));

    estructuraForm.appendChild(formulario);
    estructuraForm.appendChild(botonAceptar);

    reservaBoton.closest("li").appendChild(estructuraForm);
}


function guardarNombre(input) {
    var nombre = input.value;
    if (nombre !== "") {
        localStorage.setItem("nombreUsuario", nombre);

        alert("Nombre guardado.");
    } else {
        alert("Por favor, introduce un nombre.");
    }
}

/*function implementarDestacado(precioNoche, clase) {
    var precioDestacado = document.createElement("p");
    precioDestacado.className = "precioDestacado";
    precioDestacado.textContent = "Precio por noche: $" + precioNoche;

    var precioExistente = clase.querySelector(".precioDestacado");
    if (!precioExistente) {
        clase.appendChild(precioDestacado); 
    }
}*/