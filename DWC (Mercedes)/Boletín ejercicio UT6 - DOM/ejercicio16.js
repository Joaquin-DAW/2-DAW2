// Array de ejemplo
const datos = [
    "Manzana",
    "Banana",
    "Naranja",
    "Pera",
    "Uva",
    "Sandía",
    "Melón"
];

// Obtener el campo de texto y la lista de resultados
const campoTexto = document.getElementById('campoTexto');
const resultado = document.getElementById('resultado');

// Función para filtrar y mostrar los elementos que coincidan
function filtrarArray() {
    // Obtener el valor del campo de texto
    const texto = campoTexto.value.toLowerCase();
    
    // Filtrar los elementos del array que contengan el texto escrito
    const filtrado = datos.filter(item => item.toLowerCase().includes(texto));
    
    // Limpiar el contenido previo de la lista
    resultado.innerHTML = '';
    
    // Mostrar los resultados filtrados
    filtrado.forEach(item => {
        const li = document.createElement('li');
        li.textContent = item;
        resultado.appendChild(li);
    });
}

// Escuchar cambios en el campo de texto
campoTexto.addEventListener('input', filtrarArray);

