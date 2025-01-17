/*Crea una página con un enlace, cuando pulses sobre el enlace, se mostrará una capa oculta con la posición donde has hecho clic.*/ 

document.getElementById('enlace').addEventListener('click', function(event) {
    event.preventDefault(); // Evita que el enlace navegue
    var x = event.clientX;
    var y = event.clientY;

    var capa = document.getElementById('capa');
    var posicion = document.getElementById('posicion');
    
    // Muestra las coordenadas en el elemento de texto
    posicion.textContent = `X: ${x}, Y: ${y}`;

    // Muestra la capa en la posición del clic
    capa.style.left = x + 'px';
    capa.style.top = y + 'px';
    capa.style.display = 'block';
});
