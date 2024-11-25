window.addEventListener("load", inicializar);

function inicializar() {
    const campos = ['password1', 'password2'];
    campos.forEach(id => {
        document.getElementById(id).addEventListener('blur', validarCampo);
    });
}

function validarCampo(event) {
    const campo = event.target;
    if (!campo.value.trim()) {
        alert('Este campo es obligatorio.');
        campo.focus();
    }
}