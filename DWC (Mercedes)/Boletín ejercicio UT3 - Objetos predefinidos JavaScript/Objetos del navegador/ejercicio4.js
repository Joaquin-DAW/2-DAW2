/*En un cuadro de diálogo de alerta, muestre el alto y ancho en píxeles y la profundidad de color de su pantalla. 
Cada valor será separado por un salto de línea.*/ 

function mostrarInformacionPantalla() {
    // Obtener el ancho y alto de la pantalla
    let anchoPantalla = window.screen.width;
    let altoPantalla = window.screen.height;

    // Obtener la profundidad de color (número de bits por píxel)
    let profundidadColor = window.screen.colorDepth;

    // Mostrar la información en un cuadro de alerta
    alert(`Ancho de la pantalla: ${anchoPantalla} píxeles\nAlto de la pantalla: ${altoPantalla} píxeles\nProfundidad de color: ${profundidadColor} bits`);
}

// Llamar a la función cuando la página cargue
window.onload = mostrarInformacionPantalla;