function calcularCambio(precio, cantidadPagada) {
     if (cantidadPagada < precio) {
         console.log("La cantidad pagada es insuficiente.");
         return;
     }
 
     let cambio = cantidadPagada - precio;
     console.log(`Cambio total: ${cambio.toFixed(2)} €`);
 
     const denominaciones = [500, 200, 100, 50, 20, 10, 5, 2, 1, 0.5, 0.2, 0.1, 0.05, 0.02, 0.01];
     const resultado = {};
 
     for (let i = 0; i < denominaciones.length; i++) {
         const cantidadMonedas = Math.floor(cambio / denominaciones[i]);
         if (cantidadMonedas > 0) {
             resultado[`${denominaciones[i]} €`] = cantidadMonedas;
             cambio = (cambio - cantidadMonedas * denominaciones[i]).toFixed(2);
         }
     }
 
     console.log("Desglose del cambio:");
     for (const [denominacion, cantidad] of Object.entries(resultado)) {
         console.log(`${cantidad} x ${denominacion}`);
     }
 }
 
 // Ejemplo de uso
 calcularCambio(25.75, 50);