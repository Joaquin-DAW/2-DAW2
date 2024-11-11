/*Crear un programa que va a crear un reloj digital en el título. Utilice el método setInterval() para actualizar 
el título de la página una vez cada minuto con la hora actual.*/ 

function actualizarReloj() {
    // Crear un nuevo objeto Date para obtener la hora actual
    const ahora = new Date();

    // Obtener las horas, minutos y segundos
    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    // Asegurarnos de que siempre haya dos dígitos para minutos y segundos
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    // Crear una cadena con la hora en formato HH:MM:SS
    const horaFormateada = `${horas}:${minutos}:${segundos}`;

    // Actualizar el título de la página
    document.title = horaFormateada;
}

// Usar setInterval para actualizar el reloj cada minuto
setInterval(actualizarReloj, 1000);