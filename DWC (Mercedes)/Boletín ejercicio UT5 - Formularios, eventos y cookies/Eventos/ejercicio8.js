window.addEventListener("load", () => {
    const form = document.getElementById('validationForm');

    form.addEventListener('submit', (event) => {
        let isValid = true;

        // Validar nombre
        const name = document.getElementById('name').value.trim();
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'El nombre es obligatorio.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // Validar correo
        const email = document.getElementById('email').value.trim();
        const emailError = document.getElementById('emailError');
        if (!email.includes('@')) {
            emailError.textContent = 'El correo debe ser válido.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        if (!isValid) {
            event.preventDefault();
        }
    });

    document.getElementById('resetButton').addEventListener('click', () => {
        if (confirm('¿Seguro que deseas resetear el formulario?')) {
            document.getElementById('resetForm').reset();
        }
    });

    document.getElementById('username').addEventListener('input', (event) => {
        const feedback = document.getElementById('usernameFeedback');
        if (event.target.value.length < 5) {
            feedback.textContent = 'El nombre de usuario debe tener al menos 5 caracteres.';
        } else {
            feedback.textContent = '';
        }
    });
    
});
