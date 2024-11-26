window.addEventListener("load", inicializar);

function inicializar() {
    // Referencias a elementos clave del formulario
    const form = document.querySelector("form");
    const inputs = form.querySelectorAll("input, select");
    const submitButton = document.getElementById("submit");

    // Asignar eventos de validación en vivo
    inputs.forEach(input => {
        input.addEventListener("input", () => validarCampo(input));
    });

    // Validar todo el formulario al enviarlo
    form.addEventListener("submit", event => {
        let valido = true;
        inputs.forEach(input => {
            if (!validarCampo(input)) valido = false;
        });

        if (!valido) {
            event.preventDefault();
        } else {
            enviarDatosANuevaVentana();
        }
    });
}

function validarCampo(input) {
    const id = input.id;
    const valor = input.value.trim();
    let valido = true;

    switch (id) {
        case "nombre":
        case "apellido":
            if (valor === "") {
                mostrarError(input, "Este campo es obligatorio.");
                valido = false;
            } else {
                limpiarError(input);
            }
            break;

        case "name": // Nombre de usuario
            if (valor.length < 5) {
                mostrarError(input, "El nombre de usuario debe tener al menos 5 caracteres.");
                valido = false;
            } else {
                limpiarError(input);
            }
            break;

        case "password":
            const patronPassword = /^[A-Za-z0-9!*$%]+$/;
            if (!patronPassword.test(valor)) {
                mostrarError(input, "La contraseña solo puede contener letras, números y los caracteres !*$%.");
                valido = false;
            } else {
                limpiarError(input);
            }
            break;

        case "telefono":
            if (valor.length !== 10) {
                mostrarError(input, "El número de teléfono debe tener exactamente 10 dígitos.");
                valido = false;
            } else {
                limpiarError(input);
            }
            break;

        case "mail":
            if (!valor.includes("@")) {
                mostrarError(input, "Debe ser un correo electrónico válido.");
                valido = false;
            } else {
                limpiarError(input);
            }
            break;

        case "date":
            if (!esFechaValida(valor)) {
                mostrarError(input, "La fecha no es válida.");
                valido = false;
            } else {
                limpiarError(input);
                calcularEdad(valor);
            }
            break;

        default:
            limpiarError(input);
            break;
    }

    return valido;
}

function mostrarError(input, mensaje) {
    let error = input.nextElementSibling;
    if (!error || !error.classList.contains("error")) {
        error = document.createElement("span");
        error.className = "error";
        input.parentNode.appendChild(error);
    }
    error.textContent = mensaje;
}

function limpiarError(input) {
    const error = input.nextElementSibling;
    if (error && error.classList.contains("error")) {
        error.remove();
    }
}

function esFechaValida(fecha) {
    const date = new Date(fecha);
    return !isNaN(date.getTime());
}

function calcularEdad(fechaNacimiento) {
    const fechaActual = new Date();
    const fechaNac = new Date(fechaNacimiento);
    let edad = fechaActual.getFullYear() - fechaNac.getFullYear();
    const mes = fechaActual.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && fechaActual.getDate() < fechaNac.getDate())) {
        edad--;
    }

    const edadInput = document.getElementById("edad");
    edadInput.value = edad;
}

function enviarDatosANuevaVentana() {
    const resultado = document.getElementById("resultado");
    const datos = Array.from(document.querySelectorAll("input, select"))
        .map(input => `${input.name || input.id}: ${input.value}`)
        .join("<br>");
    resultado.innerHTML = `<h3>Datos enviados:</h3>${datos}`;
}
