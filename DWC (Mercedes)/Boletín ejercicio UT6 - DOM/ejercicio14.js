/*Crea una página con un enlace, cuando pulses sobre el enlace, se mostrará una capa oculta con la posición donde has hecho clic.*/ 
// Elementos y contenedores
const elementos = document.querySelectorAll('.elemento');
const contenedor2 = document.getElementById('contenedor2');
const papelera = document.getElementById('papelera');

// Eventos de arrastrar
elementos.forEach(elemento => {
    elemento.addEventListener('dragstart', function(event) {
        event.dataTransfer.setData('text', event.target.id);
    });
});

// Evento de "dragover" en el contenedor 2 (donde se pueden mover los elementos)
contenedor2.addEventListener('dragover', function(event) {
    event.preventDefault();
});

// Evento de "drop" en el contenedor 2 (mueve el elemento aquí)
contenedor2.addEventListener('drop', function(event) {
    event.preventDefault();
    const idElemento = event.dataTransfer.getData('text');
    const elemento = document.getElementById(idElemento);
    contenedor2.appendChild(elemento);
});

// Evento de "dragover" en la papelera (permite soltar elementos para eliminar)
papelera.addEventListener('dragover', function(event) {
    event.preventDefault();
    papelera.classList.add('dragover');
});

// Evento de "dragleave" en la papelera (restaura el color cuando el elemento deja de estar sobre ella)
papelera.addEventListener('dragleave', function(event) {
    papelera.classList.remove('dragover');
});

// Evento de "drop" en la papelera (elimina el elemento)
papelera.addEventListener('drop', function(event) {
    event.preventDefault();
    papelera.classList.remove('dragover');
    const idElemento = event.dataTransfer.getData('text');
    const elemento = document.getElementById(idElemento);
    elemento.remove(); // Elimina el elemento
});
