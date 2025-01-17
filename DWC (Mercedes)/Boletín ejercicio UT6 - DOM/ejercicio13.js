// Elementos
const origen = document.getElementById('origen');
const destino = document.getElementById('destino');

// Eventos de arrastrar
origen.addEventListener('dragstart', function(event) {
    event.dataTransfer.setData('text', event.target.id);
});

destino.addEventListener('dragover', function(event) {
    event.preventDefault(); // Permite el evento de soltar
    destino.classList.add('dragover');
});

destino.addEventListener('dragleave', function(event) {
    destino.classList.remove('dragover');
});

destino.addEventListener('drop', function(event) {
    event.preventDefault();
    destino.classList.remove('dragover');
    
    // Obtener el id del elemento arrastrado
    const data = event.dataTransfer.getData('text');
    const element = document.getElementById(data);
    
    // Colocar el elemento dentro del destino
    destino.appendChild(element);
});
