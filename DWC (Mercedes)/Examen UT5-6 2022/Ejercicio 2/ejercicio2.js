// Inicializar el script una vez que la ventana cargue
window.addEventListener("load", inicializar, false);

function inicializar() {
    configurarFormulario(); // Configura el evento de envío del formulario
    rellenarFormulario();  // Rellena el formulario con datos de cookies si existen
}

// Configura el evento de envío del formulario
function configurarFormulario() {
    const formulario = document.getElementById("formularioLogin");
    formulario.addEventListener("submit", manejarSubmit);
}

// Maneja el envío del formulario
function manejarSubmit(event) {
    event.preventDefault(); // Evitar recargar la página

    const emailInput = document.getElementById("email");
    const deptInput = document.getElementById("departamento");

    const emailValue = emailInput.value.trim();
    const deptValue = deptInput.value.trim();

    // Validar los datos del formulario
    if (validarCorreo(emailValue) && deptValue) {
        alert(`¡Formulario enviado con éxito!\nEmail: ${emailValue}\nDepartamento: ${deptValue}`);
        
        // Guardar datos en cookies
        guardarEnCookies("email", emailValue, 7);
        guardarEnCookies("departamento", deptValue, 7);
    } else {
        alert("Por favor, ingrese un correo válido de DWC y un departamento.");
    }
}

// Función para validar el correo electrónico
function validarCorreo(correo) {
    const dwcRegex = /^[a-zA-Z0-9._%+-]+@dwc\.com$/;
    return dwcRegex.test(correo);
}

// Función para guardar datos en cookies
function guardarEnCookies(nombre, valor, dias) {
    const fecha = new Date();
    fecha.setTime(fecha.getTime() + dias * 24 * 60 * 60 * 1000); // Convertir días a milisegundos
    const expiracion = `expires=${fecha.toUTCString()}`;
    document.cookie = `${nombre}=${valor}; ${expiracion}; path=/`;
}

// Función para obtener datos de cookies
function obtenerDeCookies(nombre) {
    const cookies = document.cookie.split("; ");
    for (let cookie of cookies) {
        const [key, value] = cookie.split("=");
        if (key === nombre) {
            return value;
        }
    }
    return null;
}

// Función para rellenar el formulario con datos de cookies
function rellenarFormulario() {
    const emailInput = document.getElementById("email");
    const deptInput = document.getElementById("departamento");

    const emailCookie = obtenerDeCookies("email");
    const deptCookie = obtenerDeCookies("departamento");

    if (emailCookie) emailInput.value = emailCookie;
    if (deptCookie) deptInput.value = deptCookie;
}



























/*function crearEstructura() {
    // Crear formulario
    const formulario = document.createElement("form");
    formulario.id = "formularioLogin";

    // Campo de correo electrónico
    const emailLabel = document.createElement("label");
    emailLabel.textContent = "Correo Electrónico: ";
    const emailInput = document.createElement("input");
    emailInput.type = "email";
    emailInput.name = "email";
    emailInput.id = "email";
    emailInput.placeholder = "ejemplo@dwc.com";
    emailLabel.appendChild(emailInput);

    // Campo de departamento
    const deptLabel = document.createElement("label");
    deptLabel.textContent = "Departamento: ";
    const deptInput = document.createElement("input");
    deptInput.type = "text";
    deptInput.name = "departamento";
    deptInput.id = "departamento";
    deptInput.placeholder = "Departamento";
    deptLabel.appendChild(deptInput);

    // Botón de enviar
    const submitButton = document.createElement("button");
    submitButton.type = "submit";
    submitButton.textContent = "Enviar";

    // Añadir todo al formulario
    formulario.appendChild(emailLabel);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(deptLabel);
    formulario.appendChild(document.createElement("br"));
    formulario.appendChild(submitButton);

    // Agregar formulario al DOM
    document.body.appendChild(formulario);
};*/