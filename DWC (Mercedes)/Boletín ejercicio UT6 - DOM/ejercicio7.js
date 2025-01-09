/*Basándote, en el código del ejercicio 6, añade un enlace que al pulsarlo haga aparecer y 
desaparecer la tabla creada en el ejercicio 5 (borrándola, mediante métodos DOM).*/ 

// Crear un contenedor para la tabla
const contenedorTabla = document.createElement("div");
document.body.appendChild(contenedorTabla);

// Función para crear la tabla dinámicamente
function crearTabla() {
    const tabla = document.createElement("table");
    tabla.border = "1";
    const tbody = document.createElement("tbody");

    // Crear filas y columnas de ejemplo
    for (let i = 0; i < 3; i++) {
        const fila = document.createElement("tr");
        for (let j = 0; j < 3; j++) {
            const celda = document.createElement("td");
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            fila.appendChild(celda);
        }
        tbody.appendChild(fila);
    }

    tabla.appendChild(tbody);
    return tabla;
}

// Variable para almacenar la tabla
let tablaActual = null;

// Crear el enlace dinámico
const enlace = document.createElement("a");
enlace.textContent = "Mostrar/Ocultar tabla";
enlace.href = "#"; // Enlace vacío
enlace.style.display = "block"; // Asegurar que esté en una línea nueva

// Agregar evento al enlace
enlace.addEventListener("click", (e) => {
    e.preventDefault(); // Evitar la acción predeterminada del enlace

    if (tablaActual) {
        // Si la tabla ya existe, eliminarla
        contenedorTabla.innerHTML = "";
        tablaActual = null;
    } else {
        // Si no existe, crear y agregar la tabla
        tablaActual = crearTabla();
        contenedorTabla.appendChild(tablaActual);
    }
});

// Agregar el enlace al cuerpo del documento
document.body.appendChild(enlace);
