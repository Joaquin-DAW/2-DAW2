window.addEventListener("load", inicializar);

function inicializar() {
    const inputTexto = document.getElementById('textInput');
    inputTexto.addEventListener('blur', convertirMinusculas);
}

function convertirMinusculas(event) {
    const campo = event.target;
    campo.value = campo.value.toLowerCase();
}
