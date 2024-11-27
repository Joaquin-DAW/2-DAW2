/* Crear   un   formulario   que   contiene   dos   campos   de   texto   contraseña.   Cuando   el   usuario   sale   de   cada   campo   
    de   texto,   utilice   el   controlador   de eventos   para   Blur   y   comprobar   si   el   usuario   ha   introducido   nada   en   
    el   campo   respectivo. Si   el   usuario   no   lo   hizo,   enviar   una   alerta   para   decírselo,   y   utilizar   el   método   
    focus()   para devolver el foco al campo de texto que el usuario acaba de abandonar. */ 

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
        mensajeError.textContent = "Este campo es obligatorio.";
        campo.focus();
    } else {
        mensajeError.textContent = "";
    }
}

function limpiarError(event) {
    var campo = event.target;
    var mensajeError = document.getElementById(campo.getAttribute('data-error'));
    mensajeError.textContent = "";
}