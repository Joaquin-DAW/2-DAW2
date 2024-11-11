class Banda{
    constructor(nombre, anyo, telefono, estilo) {
        this.nombre = nombre;
        this.anyo = new Date(anyo);
        this.telefono = telefono;
        this.estilo = estilo;
        this.integrantes = [];   
    }

    agregarIntegrante(integrante) {
        this.integrantes.push(integrante);
    }

    mostrarBanda(){
        console.log("Nombre de la banda: "+this.nombre);
    }

    mostrarIntegrantes() {
        this.integrantes.forEach(integrante => {
            console.log("DNI: "+integrante.dni+ "Nombre: "+integrante.nombre+"Apellido: "+integrante.apellido);
        });
    }

    listadoBandas(){
        console.log("Nombre: "+this.nombre);
        console.log("Año: "+this.anyo.getFullYear());
        console.log("Telefono: "+this.telefono);
        console.log("Estilo: "+this.estilo);
        this.mostrarIntegrantes();
    }

    buscarNombreBanda(){
        return this.bandas.find(banda => banda.nombre == nombre); 
    }

    ordenarBandasPorAnyo() {
        this.bandas.sort((a, b) => a.anyo - b.anyo);
    }
}