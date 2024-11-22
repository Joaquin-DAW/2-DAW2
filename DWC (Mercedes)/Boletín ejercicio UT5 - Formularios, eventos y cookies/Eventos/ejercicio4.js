window.addEventListener("load", inicializar);

// Seleccionamos todos los botones "Responder"
const buttons = document.querySelectorAll('.check-answer');

// Añadimos un event listener a cada botón
buttons.forEach(button => {
  button.addEventListener('click', event => {
    // Obtenemos el contenedor de la pregunta
    const questionDiv = event.target.closest('.question');

    // Obtenemos la respuesta correcta del atributo data
    const correctAnswer = questionDiv.dataset.correctAnswer;

    // Obtenemos la opción seleccionada por el usuario
    const selectedOption = questionDiv.querySelector('input[type="radio"]:checked');
    const resultElement = questionDiv.querySelector('.result');

    // Verificamos si el usuario seleccionó una respuesta
    if (selectedOption) {
      const userAnswer = selectedOption.value;

      // Comparar con la respuesta correcta
      if (userAnswer === correctAnswer) {
        resultElement.innerHTML = `<span class="correct">¡Correcto!</span>`;
      } else {
        resultElement.innerHTML = `<span class="incorrect">Incorrecto.</span> La respuesta correcta es: ${correctAnswer}`;
      }
    } else {
      resultElement.innerHTML = '<span class="incorrect">Por favor, selecciona una opción.</span>';
    }
  });
});
