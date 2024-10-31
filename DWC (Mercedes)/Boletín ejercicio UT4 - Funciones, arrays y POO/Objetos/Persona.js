class Persona {
    constructor(nombre, apellidos, dni, fechaNacimiento) {
        this.nombre = nombre;
        this.apellidos = apellidos;
        this.dni = dni;
        this.fechaNacimiento = fechaNacimiento;
    }

    getEdad() {
        const hoy = new Date();
        const nacimiento = new Date(this.fechaNacimiento);
        let edad = hoy.getFullYear() - nacimiento.getFullYear();
        const mes = hoy.getMonth() - nacimiento.getMonth();
        if (mes < 0 || (mes === 0 && hoy.getDate() < nacimiento.getDate())) {
            edad--;
        }
        return edad;
    }

    esMayorDeEdad() {
        return this.getEdad() >= 18;
    }

    toString() {
        return `Nombre: ${this.nombre}, Apellidos: ${this.apellidos}, DNI: ${this.dni}, Fecha de Nacimiento: ${this.fechaNacimiento}`;
    }
}