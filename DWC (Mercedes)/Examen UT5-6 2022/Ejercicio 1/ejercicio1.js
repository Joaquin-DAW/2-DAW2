window.addEventListener("load", inicializar, false);

function inicializar(){
    crearEstructura()
}

const jsonData = [
    {
        "url_escudo_eq1": "./escudos/rayo.png",
        "nombre_eq1": "Rayo",
        "resultado_eq1": "1",
        "url_escudo_eq2": "./escudos/getafe.png",
        "nombre_eq2": "Getafe",
        "resultado_eq2": "2"
    },
    {
        "url_escudo_eq1": "./escudos/osasuna.png",
        "nombre_eq1": "Osasuna",
        "resultado_eq1": "2",
        "url_escudo_eq2": "./escudos/betis.png",
        "nombre_eq2": "Betis",
        "resultado_eq2": "1"
    },
    {
        "url_escudo_eq1": "./escudos/real_madrid.png",
        "nombre_eq1": "Real Madrid",
        "resultado_eq1": "3",
        "url_escudo_eq2": "./escudos/barcelona.png",
        "nombre_eq2": "Barcelona",
        "resultado_eq2": "1"
    },
    {
        "url_escudo_eq1": "./escudos/sevilla.png",
        "nombre_eq1": "Sevilla",
        "resultado_eq1": "1",
        "url_escudo_eq2": "./escudos/villarreal.png",
        "nombre_eq2": "Villarreal",
        "resultado_eq2": "1"
    }
];

function crearEstructura() {

    var partidos = document.createElement("div");
    partidos.setAttribute("id","partidosAjax");

    var contenedor = document.getElementById("contenedor");
    contenedor.appendChild(partidos);

    jsonData.forEach(item => {
        var equipos = document.createElement("div");
        equipos.className="equipos";

        var escudo1 = document.createElement("div");
        escudo1.className="escudo";

        var imagen1 = document.createElement("img");
        imagen1.src=item.url_escudo_eq1;
        imagen1.alt=item.nombre_eq1
        imagen1.setAttribute("style","width: 100px");
        escudo1.appendChild(imagen1);

        var equipo1 = document.createElement("div");
        equipo1.className="equipo";
        var nequipo1 = document.createTextNode(item.nombre_eq1);
        equipo1.appendChild(nequipo1);

        var resultado1 = document.createElement("div");
        resultado1.className="resultado";
        var resultado1texto = document.createTextNode(item.resultado_eq1);
        resultado1.appendChild(resultado1texto);

        var resultado2 = document.createElement("div");
        resultado2.className="resultado";
        var resultado2texto = document.createTextNode(item.resultado_eq2);
        resultado2.appendChild(resultado2texto);

        var equipo2 = document.createElement("div");
        equipo2.className="equipo";
        var nequipo2 = document.createTextNode(item.nombre_eq2);
        equipo2.appendChild(nequipo2);

        var escudo2 = document.createElement("div");
        escudo2.className="escudo";

        var imagen2 = document.createElement("img");
        imagen2.src=item.url_escudo_eq2;
        imagen2.alt=item.nombre_eq2;
        imagen2.setAttribute("style","width: 100px");
        escudo2.appendChild(imagen2);

        var listaD = document.createElement("ul");
        listaD.style.overflow = "hidden"; // Oculta contenido extra
        listaD.style.height = "0"; // Inicialmente invisible
        listaD.style.transition = "height 0.5s ease"; // Deslizamiento suave

        var lista1 = document.createElement("li");
        var lista2 = document.createElement("li");

        var enlace1 = document.createElement("a");
        enlace1.href = "/"+item.nombre_eq1+item.nombre_eq2+"/";
        var texto1 = document.createTextNode("Crónica");
        enlace1.appendChild(texto1);


        var enlace2 = document.createElement("a");
        enlace2.href = "/"+item.nombre_eq1+item.nombre_eq2+"/"+"asilovivimos.html";
        var texto1 = document.createTextNode("Así lo vivimos");
        enlace2.appendChild(texto1);

        lista1.appendChild(enlace1);
        lista2.appendChild(enlace2);

        listaD.appendChild(lista1);
        listaD.appendChild(lista2);

        equipos.appendChild(escudo1);
        equipos.appendChild(equipo1);
        equipos.appendChild(resultado1);
        equipos.appendChild(resultado2);
        equipos.appendChild(equipo2);
        equipos.appendChild(escudo2);
        equipos.appendChild(listaD);

        partidos.appendChild(equipos);

        //let hideTimeout; // Variable para almacenar el setTimeout

        let intervalId;

         // Añade eventos al pasar el ratón por encima de las imágenes
         imagen1.addEventListener("mouseover", () => {
            mostrarListaDeslizar(listaD);
            //clearTimeout(hideTimeout); // Limpiar cualquier timeout pendiente
            clearInterval(intervalId);
            //hideTimeout = setTimeout(() => {
            intervalId = setInterval(() => {
                ocultarListaDeslizar(listaD);
            }, 3000); // Ocultar después de 3 segundos
        });

        /*imagen1.addEventListener("mouseleave", () => {
            clearTimeout(hideTimeout); // Limpiar el timeout si el ratón sale
            ocultarListaDeslizar(listaD);
        });*/

        imagen2.addEventListener("mouseover", () => {
            mostrarListaDeslizar(listaD);
            //clearTimeout(hideTimeout); // Limpiar cualquier timeout pendiente
            clearInterval(intervalId);
            //hideTimeout = setTimeout(() => {
            intervalId = setInterval(() => {
                ocultarListaDeslizar(listaD);
            }, 3000); // Ocultar después de 3 segundos
        });

        /*imagen2.addEventListener("mouseleave", () => {
            clearTimeout(hideTimeout); // Limpiar el timeout si el ratón sale
            ocultarListaDeslizar(listaD);
        });*/

        resultado1.addEventListener("mouseover", () => {
            aumentarFuente(resultado1);
        });
        
        resultado1.addEventListener("mouseout", () => {
            restaurarFuente(resultado1);
        });
        
        resultado2.addEventListener("mouseover", () => {
            aumentarFuente(resultado2);
        });
        
        resultado2.addEventListener("mouseout", () => {
            restaurarFuente(resultado2);
        });
    });
}

// Función para mostrar la lista deslizándose
function mostrarListaDeslizar(lista) {
    lista.style.height = lista.scrollHeight + "px"; // Ajusta la altura al contenido
}

// Función para ocultar la lista deslizándose
function ocultarListaDeslizar(lista) {
    lista.style.height = "0"; // Oculta ajustando la altura a 0
}


// Función para aumentar el tamaño de la fuente en 2px
function aumentarFuente(elemento) {
    let tamañoActual = elemento.style.fontSize || "16px"; // Valor predeterminado si no tiene estilo en línea
    let nuevoTamaño = parseInt(tamañoActual) + 20 + "px"; // Convierte a número, suma y vuelve a 'px'
    elemento.style.fontSize = nuevoTamaño; // Aplica el nuevo tamaño
}

// Función para restaurar el tamaño original de la fuente
function restaurarFuente(elemento) {
    elemento.style.fontSize = "";
}














window.addEventListener("load", inicializar, false);

function inicializar() {
    crearEstructura();  // Crear la estructura solo al cargar la página
}

const jsonViaje = [
    {"clase_pais": "usa", "ciudad_h2": "NewYork, NY", "detalle_precio_total": "1,899", "detalle_num_noches": 7, "precio_noche": 275, "ruta_imagen": "./photos/newyork.jpg", "pie_imagen": "Puente Brooklyn"},
    {"clase_pais": "paris", "ciudad_h2": "Paris, Francia", "detalle_precio_total": "1,499", "detalle_num_noches": 5, "precio_noche": 300, "ruta_imagen": "./photos/paris.jpg", "pie_imagen": "Notre Dame de Paris"},
    {"clase_pais": "uk", "ciudad_h2": "Londres, UK", "detalle_precio_total": "2,199", "detalle_num_noches": 5, "precio_noche": 440, "ruta_imagen": "./photos/london.jpg", "pie_imagen": "Torre de Londres"}
];

function crearEstructura() {
    var titulo = document.getElementById("mostrar");
    
    // Escuchar el clic en el título para alternar el contenido
    titulo.addEventListener("click", () => {
        ocultarContenido(titulo);
    });
}

function ocultarContenido(titulo) {
    // Si no existe la lista en el DOM, creamos todo el contenido
    if (!lista) {
        lista = document.createElement("ul");  // Crear lista de viajes
        jsonViaje.forEach(item => {
            var clase = document.createElement("li");
            clase.className = "viaje " + item.clase_pais;

            var ciudad = document.createElement("h2");
            ciudad.textContent = item.ciudad_h2;
            clase.appendChild(ciudad);

            var detalle = document.createElement("span");
            detalle.className = "detalle";
            detalle.textContent = item.detalle_precio_total + " por " + item.detalle_num_noches + " noches";
            clase.appendChild(detalle);

            var reserva = document.createElement("button");
            reserva.className = "reserva";
            reserva.textContent = "Resérvalo ya!";
            clase.appendChild(reserva);

            var fotos = document.createElement("ul");
            fotos.className = "fotos";
            clase.appendChild(fotos);

            var listaFotos = document.createElement("li");
            fotos.appendChild(listaFotos);

            var imagen = document.createElement("img");
            imagen.src = item.ruta_imagen;
            listaFotos.appendChild(imagen);

            var pie_imagen = document.createElement("span");
            pie_imagen.textContent = item.pie_imagen;
            listaFotos.appendChild(pie_imagen);

            // Añadir eventos para mostrar y ocultar el precio destacado
            imagen.addEventListener("mouseover", () => implementarDestacado(item.precio_noche, clase));
            pie_imagen.addEventListener("mouseover", () => implementarDestacado(item.precio_noche, clase));
            imagen.addEventListener("mouseout", ocultarDestacado);
            pie_imagen.addEventListener("mouseout", ocultarDestacado);

            lista.appendChild(clase);
        });

        // Cuando se genera la lista, se muestra y se cambia el título
        titulo.appendChild(lista);
        titulo.textContent = "Ocultar viajes"; // Cambiar título a "Ocultar"
    } else {
        // Si ya existe la lista, la eliminamos y cambiamos el título a "Mostrar"
        titulo.removeChild(lista);
        lista = null;  // Limpiar la referencia de lista
        titulo.textContent = "Mostrar viajes"; // Cambiar título a "Mostrar"
    }
}

// Función para mostrar el precio destacado sobre el precio de la noche
function implementarDestacado(precioNoche, clase) {
    var precioDestacado = document.createElement("p");
    precioDestacado.className = "precioDestacado";
    precioDestacado.textContent = "Precio por noche: $" + precioNoche;

    // Aseguramos que solo haya un precio destacado
    var precioExistente = clase.querySelector(".precioDestacado");
    if (!precioExistente) {
        clase.appendChild(precioDestacado);  // Añadir el precio destacado sobre el precio de la noche
    }
}

// Función para ocultar el precio destacado
function ocultarDestacado() {
    var precioDestacado = this.closest("li").querySelector(".precioDestacado");
    if (precioDestacado) {
        precioDestacado.remove();  // Eliminar el precio destacado
    }
}
