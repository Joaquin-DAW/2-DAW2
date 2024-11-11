/*Crea una página web que realice las siguientes funciones desde la página principal. Crea botones para cada realizar cada una de las siguientes opciones:
	- Abrir ventana flotante
	- Abrir ventana flotante y detenerla
	- Cerrar ventana flotante
	- Dar foco a la ventana flotante
	- Quitar foco ventana nueva
	- Scroll absoluto (0, 1000)
Desde la ventana secundaria se podrá realizar:
	- Mover absoluto (500, 150)
	- Mover relativo (0,50)
	- Redimensionar absoluto (500,500)
	- Redimensionar relativo (-50, -50)*/ 

// Variable global para almacenar la ventana flotante
let ventanaFlotante;

function abrirVentana() {
    // Abre una ventana flotante con ciertas características
    ventanaFlotante = window.open('', '', 'width=300,height=300,left=100,top=100');
    ventanaFlotante.document.write('<h2>Ventana flotante</h2><p>Realiza acciones en esta ventana.</p>');
}

function abrirYDetenerVentana() {
    // Abre la ventana flotante y la detiene (detener la ejecución de otros scripts si los hubiera)
    ventanaFlotante = window.open('', '', 'width=300,height=300,left=100,top=100');
    ventanaFlotante.document.write('<h2>Ventana flotante</h2><p>Realiza acciones en esta ventana.</p>');
    // Aquí se podría agregar lógica para detener acciones en la ventana, por ejemplo, si hay algún setInterval
}

function cerrarVentana() {
    if (ventanaFlotante) {
        ventanaFlotante.close(); // Cierra la ventana flotante si está abierta
    }
}

function darFoco() {
    if (ventanaFlotante) {
        ventanaFlotante.focus(); // Da foco a la ventana flotante
    }
}

function quitarFoco() {
    if (ventanaFlotante) {
        window.focus(); // Quita el foco de la ventana flotante y lo pone en la ventana principal
    }
}

function scrollAbsoluto() {
    if (ventanaFlotante) {
        ventanaFlotante.scrollTo(0, 1000); // Realiza un scroll absoluto en la ventana flotante
    }
}

// Funciones para interactuar con la ventana secundaria

function moverAbsoluto() {
    if (ventanaFlotante) {
        ventanaFlotante.moveTo(500, 150); // Mueve la ventana flotante a las coordenadas absolutas (500, 150)
    }
}

function moverRelativo() {
    if (ventanaFlotante) {
        ventanaFlotante.moveBy(0, 50); // Mueve la ventana flotante de forma relativa (0, 50)
    }
}

function redimensionarAbsoluto() {
    if (ventanaFlotante) {
        ventanaFlotante.resizeTo(500, 500); // Redimensiona la ventana flotante a un tamaño absoluto (500, 500)
    }
}

function redimensionarRelativo() {
    if (ventanaFlotante) {
        ventanaFlotante.resizeBy(-50, -50); // Redimensiona la ventana flotante de forma relativa (-50, -50)
    }
}