/* Crea un página con un div y a medida que mueves el ratón por la pantalla, dentro de el div se visualizan las coordenadas.*/ 

// Crear un div donde se mostrarán las coordenadas
const coordenadasDiv = document.createElement("div");
coordenadasDiv.style.position = "fixed"; // Posicionarlo de forma fija en la pantalla
coordenadasDiv.style.top = "10px"; // Un poco de espacio desde la parte superior
coordenadasDiv.style.left = "10px"; // Un poco de espacio desde el lado izquierdo
coordenadasDiv.style.padding = "10px";
coordenadasDiv.style.backgroundColor = "rgba(0, 0, 0, 0.7)"; // Fondo oscuro
coordenadasDiv.style.color = "white"; // Texto blanco
coordenadasDiv.style.fontSize = "16px";
coordenadasDiv.style.borderRadius = "5px";

// Agregar el div al cuerpo del documento
document.body.appendChild(coordenadasDiv);

// Función para actualizar las coordenadas dentro del div
function mostrarCoordenadas(event) {
    // Obtener las coordenadas del ratón respecto a la ventana
    const x = event.clientX;
    const y = event.clientY;

    // Actualizar el contenido del div con las coordenadas
    coordenadasDiv.textContent = `Coordenadas: X: ${x}, Y: ${y}`;
}

// Añadir el evento 'mousemove' al documento para detectar el movimiento del ratón
document.addEventListener("mousemove", mostrarCoordenadas);
