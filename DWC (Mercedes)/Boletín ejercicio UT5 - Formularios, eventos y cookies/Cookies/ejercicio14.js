window.addEventListener("load", inicializar);

function inicializar() {
    cargarDatosDeCookies();
    var form = document.getElementById("formulario_cafe");
    form.addEventListener("submit", guardarDatosEnCookies);
}

function guardarDatosEnCookies(event) {
    event.preventDefault();

    // Guardar nombre y habitación en cookies
    document.cookie = "nombre=" + document.getElementById("nombre").value + "; path=/; max-age=86400";
    document.cookie = "habitacion=" + document.getElementById("habitacion").value + "; path=/; max-age=86400";

    // Obtener los tipos de café seleccionados
    var tiposCafes = Array.from(document.querySelectorAll(".cafe:checked"))
                          .map(checkbox => checkbox.value)
                          .join(', ');

    document.cookie = "cafe=" + tiposCafes + "; path=/; max-age=86400";

    // Incrementar contador de pedidos
    let pedidos = getCookie("pedidos") ? parseInt(getCookie("pedidos")) : 0;
    pedidos++;

    // Guardar contador de pedidos en cookies
    document.cookie = "pedidos=" + pedidos + "; path=/; max-age=86400";

    // Verificar si el usuario tiene café gratis
    if (pedidos >= 3) {
        alert("¡Felicidades! Su próximo café será gratuito.");
    } else {
        alert("Pedido guardado. Su café será enviado a la habitación " + document.getElementById("habitacion").value);
    }
}

function cargarDatosDeCookies() {
    // Cargar datos si existen
    document.getElementById("nombre").value = getCookie("nombre") || "";
    document.getElementById("habitacion").value = getCookie("habitacion") || "";

    let cafeGuardado = getCookie("cafe");
    if (cafeGuardado) {
        let cafesSeleccionados = cafeGuardado.split(", ");
        cafesSeleccionados.forEach(cafe => {
            let checkbox = document.querySelector(".cafe[value='" + cafe + "']");
            if (checkbox) {
                checkbox.checked = true;
            }
        });
    }

    let pedidos = getCookie("pedidos") ? parseInt(getCookie("pedidos")) : 0;
    if (pedidos >= 3) {
        alert("¡Recuerda! Su próximo café es gratuito.");
    }
}

// Función para obtener el valor de una cookie por su nombre
function getCookie(nombre) {
    let cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
        let [clave, valor] = cookies[i].split("=");
        if (clave === nombre) {
            return decodeURIComponent(valor);
        }
    }
    return null;
}
