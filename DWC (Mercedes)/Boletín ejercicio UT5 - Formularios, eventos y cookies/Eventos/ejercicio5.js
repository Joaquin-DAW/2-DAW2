// Seleccionamos los elementos del formulario
const smsText = document.getElementById("smsText");
const charCounter = document.getElementById("charCounter");
const smsForm = document.getElementById("smsForm");

// Expresión regular para permitir sólo caracteres alfanuméricos y signos de puntuación
const validCharacters = /^[a-zA-Z0-9 .,!?¡¿'"()\-:;@#]+$/;

// Función para actualizar el contador de caracteres
function updateCharCounter() {
  const remainingChars = 145 - smsText.value.length;
  charCounter.textContent = `${remainingChars} caracteres restantes.`;

  // Si se encuentra un carácter inválido, resaltar el error
  if (!validCharacters.test(smsText.value) && smsText.value !== "") {
    charCounter.classList.add("error");
    charCounter.textContent = "Caracteres no permitidos detectados.";
  } else {
    charCounter.classList.remove("error");
  }
}

// Prevenir el envío si hay caracteres inválidos
smsForm.addEventListener("submit", (event) => {
  if (!validCharacters.test(smsText.value)) {
    event.preventDefault();
    alert("El mensaje contiene caracteres no permitidos.");
  } else {
    alert("Mensaje enviado correctamente.");
  }
});

// Actualizar el contador en tiempo real
smsText.addEventListener("input", updateCharCounter);
