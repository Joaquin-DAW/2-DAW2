/*Usa DOM para crear dinámicamente un enlace link y pon sus atributos. 
Usa DOM para coger los atributos y mostrar su valor en un Div creado al efecto.*/ 

var enlace = document.createElement("a");
enlace.textContent="Esto es un enlace";
enlace.href="https://www.pccomponentes.com/";
enlace.target="_blank";
enlace.title = "Esto sigue siendo un enlace";

var saltoLinea = document.createElement("br");
document.body.appendChild(saltoLinea);

document.body.appendChild(enlace);

var nuevoDiv = document.createElement("div");
nuevoDiv.style.marginTop = "20px";
nuevoDiv.textContent = "Atributos del enlace:";

// Extraer los atributos del enlace y mostrarlos en el div
const atributos = [
    `href: ${enlace.getAttribute("href")}`,
    `target: ${enlace.getAttribute("target")}`,
    `title: ${enlace.getAttribute("title")}`,
];

// Agregar cada atributo como un párrafo en el div
atributos.forEach(attr => {
    const parrafo = document.createElement("p");
    parrafo.textContent = attr;
    nuevoDiv.appendChild(parrafo);
});

// Agregar el div al cuerpo del documento
document.body.appendChild(nuevoDiv);