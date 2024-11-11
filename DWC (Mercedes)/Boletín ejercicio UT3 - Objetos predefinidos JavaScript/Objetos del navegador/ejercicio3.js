/*Crear dos enlaces, uno para abrir una nueva ventana y uno para cerrarla. La nueva ventana mostrará este mensaje en una fuente grande : 
​”El ojo es la ventana a tu alma “. La nueva ventana se coloca en la esquina izquierda de la pantalla , será redimensionable , 
tendrá una barra de desplazamiento, y estará en primer plano.*/ 

let ventana; // Variable para almacenar la referencia de la ventana

// Función para abrir la ventana
function abrirVentana() {
    // Abrir la ventana en la esquina izquierda (top: 0, left: 0), tamaño 400x200px, redimensionable, con barra de desplazamiento
    ventana = window.open("", "_blank", "width=400,height=200,left=0,top=0,resizable=yes,scrollbars=yes");

    // Escribir el mensaje en la nueva ventana
    ventana.document.write(`
        <html>
            <head>
                <title>Ventana a tu Alma</title>
                <style>
                    body {
                        font-size: 30px;
                        text-align: center;
                        margin-top: 50px;
                    }
                </style>
            </head>
            <body>
                El ojo es la ventana a tu alma
            </body>
        </html>
    `);

    // Asegurarnos de que la ventana está en primer plano
    ventana.focus();
}

// Función para cerrar la ventana
function cerrarVentana() {
    if (ventana && !ventana.closed) {
        ventana.close();
    }
}