class Cliente {
    constructor(nombre, apellidos, dni) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.citasPendientes = [];
        this.historialCitas = [];
    }

    agregarCita(cita) {
        var fechaCita = cita.fechaHora.toDateString();
        for (let pendiente of this.citasPendientes) {
            if (pendiente.fechaHora.toDateString() == fechaCita) {
                console.log("Ya tienes cita.");
                this.citasPendientes.push(cita);
                console.log("Cita agregada.");
            }
        }
        
        var ahora = new Date();
        if (cita.fechaHora <= ahora) {
            console.log("No se pueden agregar citas.");
        }
    }
}