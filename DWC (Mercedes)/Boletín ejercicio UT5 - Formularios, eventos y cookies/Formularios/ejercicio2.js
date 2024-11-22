/* Usar JS para mostrar el contenido, en mayúsculas, del formulario anterior en la misma ventana. Modifica el script para mandar 
los datos a una nueva ventana.*/

window.addEventListener("load", inicializar, false);

function inicializar() {

    // Función para manejar el clic en el botón
    function enviarDatosANuevaVentana(event) {
        // Prevenir que el formulario se envíe y recargue la página
        event.preventDefault();

        calcularEdad();

        // Capturar datos del formulario
        const nombre = document.getElementById("nombre").value.toUpperCase();
        const apellido = document.getElementById("apellido").value.toUpperCase();
        const username = document.getElementById("name").value.toUpperCase();
        const password = document.getElementById("password").value;
        const fechaNacimiento = document.getElementById("date").value;
        const genero = document.getElementById("genero").value.toUpperCase();
        const telefono = document.getElementById("telefono").value;
        const email = document.getElementById("mail").value.toUpperCase();
        const edad = document.getElementById("edad").value;

        // Mostrar los datos en la misma ventana
        const resultadoDiv = document.getElementById("resultado");
        resultadoDiv.innerHTML = `
            <p><strong>Nombre:</strong> ${nombre}</p>
            <p><strong>Apellido:</strong> ${apellido}</p>
            <p><strong>Nombre de Usuario:</strong> ${username}</p>
            <p><strong>Contraseña:</strong> ${password}</p>
            <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
            <p><strong>Edad:</strong> ${edad}</p>
            <p><strong>Género:</strong> ${genero}</p>
            <p><strong>Teléfono:</strong> ${telefono}</p>
            <p><strong>Email:</strong> ${email}</p>
        `;

        // Crear una nueva ventana para mostrar los datos
        var nuevaVentana = window.open("", "_blank", "width=600,height=400");
        nuevaVentana.document.write(`
            <html>
            <head><title>Datos del Formulario</title></head>
            <body>
                <h1>Datos del Formulario</h1>
                <p><strong>Nombre:</strong> ${nombre}</p>
                <p><strong>Apellido:</strong> ${apellido}</p>
                <p><strong>Nombre de Usuario:</strong> ${username}</p>
                <p><strong>Contraseña:</strong> ${password}</p>
                <p><strong>Fecha de Nacimiento:</strong> ${fechaNacimiento}</p>
                <p><strong>Edad:</strong> ${edad}</p>
                <p><strong>Género:</strong> ${genero}</p>
                <p><strong>Teléfono:</strong> ${telefono}</p>
                <p><strong>Email:</strong> ${email}</p>
            </body>
            </html>
        `);
    }

    // Función para calcular la edad
    function calcularEdad() {
        const fechaNacimiento = document.getElementById("date").value;
        const fechaNacimientoDate = new Date(fechaNacimiento);
        const hoy = new Date();
        
        let edad = hoy.getFullYear() - fechaNacimientoDate.getFullYear();
        const mes = hoy.getMonth() - fechaNacimientoDate.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNacimientoDate.getDate())) {
            edad--;
        }
        
        // Mostrar la edad en el campo correspondiente
        document.getElementById("edad").value = edad;
    }


    // Agregar el evento al botón para evitar el comportamiento predeterminado
    const submitButton = document.getElementById("submit");
    submitButton.addEventListener("click", enviarDatosANuevaVentana);
}
