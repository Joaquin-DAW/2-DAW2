window.addEventListener("load", inicializar);

function inicializar() {
    cargarDireccionGuardada();
    document.getElementById("formulario_envio").addEventListener("submit", guardarDireccionEnCookie);
}

function guardarDireccionEnCookie(event) {
    event.preventDefault(); // Evita el envío del formulario

    var direccion = document.getElementById("direccion").value;

    if (direccion.trim() !== "") {
        document.cookie = "direccion=" + encodeURIComponent(direccion) + "; path=/; max-age=31536000"; // 1 año
        document.getElementById("mensaje").textContent = "Dirección guardada correctamente.";
    }
}

function cargarDireccionGuardada() {
    var direccionGuardada = getCookie("direccion");

    if (direccionGuardada) {
        document.getElementById("direccion").value = direccionGuardada;
        document.getElementById("mensaje").textContent = "Se ha cargado su dirección guardada.";
    }
}

// Función para obtener una cookie por nombre
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