// Inicializar el script una vez que la ventana cargue
window.addEventListener("load", inicializar, false);

function inicializar() {
    /*cargarCodigoGuardado();*/ 
    agregarCodigos();
}


function agregarCodigos() {
    var codigo = document.getElementById('codigo');
    var formulario = document.getElementById("formulario");

    codigo.addEventListener("blur", validarCodigo);
    formulario.addEventListener("submit", validarFormulario);
}

function validarCodigo() {
    var codigo = document.getElementById('codigo');
    var mensajeError = document.getElementById('mensajeError');
    var regexCodigo = /^[A-Z]{3}-\d{1,5}$/;

    if (!regexCodigo.test(codigo.value)) {
        mensajeError.textContent = "Código no válido. Debe tener 3 letras mayúsculas, guión y entre 1 y 5 números (Ej: ASX-23).";
    } else {
        mensajeError.textContent = ""; // Limpia el mensaje si el código es válido
    }
}

function validarFormulario(event) {
    var codigo = document.getElementById('codigo');
    var mensajeError = document.getElementById('mensajeError');
    var regexCodigo = /^[A-Z]{3}-\d{1,5}$/;

    if (!regexCodigo.test(codigo.value)) {
        event.preventDefault(); // Evita el envío si el código no es válido
        mensajeError.textContent = "Corrige el código antes de enviar.";
    } else {
        guardarCodigo(codigo.value);
    }
}

function guardarCodigo(codigo) {
    localStorage.setItem("codigoProducto", codigo);
}

/*function cargarCodigoGuardado() {
    var codigo = document.getElementById('codigo');
    var codigoGuardado = localStorage.getItem("codigoProducto");

    if (codigoGuardado) {
        codigo.value = codigoGuardado;
    }
} */