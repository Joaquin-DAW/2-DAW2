// Inicializar el script una vez que la ventana cargue
window.addEventListener("load", inicializar, false);

function inicializar() {

    //Parte 1 del ejercicio
    //cargarCookies();

    cargarDatosSesion();
    document.getElementById("formulario").addEventListener("submit", validarFormulario);
}

//Parte 1 del ejercicio
/*function cargarCookies() {
    let email = getCookie("email");
    let departamento = getCookie("departamento");

    if (email) document.getElementById("email").value = email;
    if (departamento) document.getElementById("departamento").value = departamento;
}*/

function cargarDatosSesion() {
    let email = sessionStorage.getItem("email");
    let departamento = sessionStorage.getItem("departamento");

    if (email) document.getElementById("email").value = email;
    if (departamento) document.getElementById("departamento").value = departamento;
}

/* Si quisieramos hacerlo con localStorage sería así:
    function cargarDatosLocal() {
    let email = localStorage.getItem("email");
    let departamento = localStorage.getItem("departamento");

    if (email) document.getElementById("email").value = email;
    if (departamento) document.getElementById("departamento").value = departamento;
}
*/

function validarFormulario(event) {
    event.preventDefault(); // Evita que el formulario se envíe automáticamente

    var email = document.getElementById('email').value;
    var departamento = document.getElementById('departamento').value;
    let mensajeError = document.getElementById("oculto");
    var regexCorreo = /^[a-zA-Z0-9._+-]+@dwc.com$/;

    if (!regexCorreo.test(email)) {
        mensajeError.textContent = "Correo no válido, debe ser un correo de la empresa DWC.";
        return;
    }

    // Guardar datos en sessionStorage (dura solo mientras el navegador está abierto)
    sessionStorage.setItem("email", email);
    sessionStorage.setItem("departamento", departamento);

    alert("Datos guardados correctamente. Se eliminarán al cerrar el navegador.");
    document.getElementById("formulario").submit(); // Envía el formulario

    // Guardar datos en localStorage (se mantienen aunque cierres el navegador)
    /*localStorage.setItem("email", email);
    localStorage.setItem("departamento", departamento);

    alert("Datos guardados correctamente. Se mantendrán en el navegador hasta que los borres.");
    document.getElementById("formulario").submit(); // Envía el formulario*/


    //Parte 1 del ejercicio. Guardar datos en cookies 
    /*setCookie("email", email, 365);
    setCookie("departamento", departamento, 365);

    alert("Datos guardados correctamente.");
    document.getElementById("formulario").submit(); // Envía el formulario*/
}

//Parte 1 del ejercicio Función para crear una cookie
/*function setCookie(name, value, days) {
    let expires = "";
    if (days) {
        let date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
}*/

//Parte 1 del ejercicio Función para obtener una cookie
/*function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i].trim();
        if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length);
    }
    return null;
}*/



















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