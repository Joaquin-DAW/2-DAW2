window.addEventListener("load", inicializar);

function inicializar() {
    const enlace = document.getElementById('link');
    enlace.addEventListener('mouseover', cambiarColor);
    enlace.addEventListener('mouseout', restaurarColor);
}

function cambiarColor(event) {
    event.target.style.backgroundColor = 'lightblue';
}

function restaurarColor(event) {
    event.target.style.backgroundColor = '';
}