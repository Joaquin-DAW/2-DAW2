// Elementos y contenedores
const elemento = document.getElementById('elem1');
const contenedor2 = document.getElementById('contenedor2');

// Evento de arrastrar (para copiar el elemento)
elemento.addEventListener('dragstart', function(event) {
    // Usamos un dato temporal que indica que se debe copiar
    event.dataTransfer.setData('text', event.target.id);
    event.dataTransfer.effectAllowed = 'copy'; // Solo permitir copiar
});

// Evento de "dragover" en el contenedor 2 (para permitir el "drop")
contenedor2.addEventListener('dragover', function(event) {
    event.preventDefault();
    event.dataTransfer.dropEffect = 'copy'; // Solo permitir el efecto de copiar
});

// Evento de "drop" en el contenedor 2 (para copiar el elemento aquí)
contenedor2.addEventListener('drop', function(event) {
    event.preventDefault();
    
    // Obtener los datos transferidos (el ID del elemento)
    const idElemento = event.dataTransfer.getData('text');
    const elementoOriginal = document.getElementById(idElemento);
    
    // Crear una copia del elemento
    const copiaElemento = elementoOriginal.cloneNode(true);
    
    // Añadir la copia al contenedor 2
    contenedor2.appendChild(copiaElemento);
});
