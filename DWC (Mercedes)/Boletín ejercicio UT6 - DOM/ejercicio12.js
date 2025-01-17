/*Crea una página con un enlace, cuando pulses sobre el enlace, se mostrará una capa oculta con la posición donde has hecho clic.*/ 

document.addEventListener('mousemove', function(event) {
    var seguimiento = document.getElementById('seguimiento');
    
    // Obtener las coordenadas del ratón
    var mouseX = event.clientX;
    var mouseY = event.clientY;
    
    // Establecer la posición del div para que siga al ratón
    seguimiento.style.left = mouseX - 25 + 'px'; // Centrado con respecto al ratón
    seguimiento.style.top = mouseY - 25 + 'px'; // Centrado con respecto al ratón
});
