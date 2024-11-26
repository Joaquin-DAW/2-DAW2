window.addEventListener("load", inicializar);

function inicializar() {
    var campos = ['password1', 'password2'];
    campos.forEach(id => {
        document.getElementById(id).addEventListener('blur', validarCampo);
        document.getElementById(id).addEventListener('input', limpiarError);
    });
}

function validarCampo(event) {
    var campo = event.target;
    var mensajeError = document.getElementById(campo.getAttribute('data-error'));
    if (campo.value == "") {
        mensajeError.textContent = "Este campo es obligatorio."; // Muestra mensaje de error
    } else {
        mensajeError.textContent = ""; // Limpia el mensaje de error
    }
}

function limpiarError(event) {
    var campo = event.target;
    var mensajeError = document.getElementById(campo.getAttribute('data-error'));
    mensajeError.textContent = ""; // Limpia el mensaje al escribir
}