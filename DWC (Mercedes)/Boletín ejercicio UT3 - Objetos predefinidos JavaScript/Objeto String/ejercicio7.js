/*Diseñar un script que lea una dirección de email y la valide. No se terminará hasta introducir una dirección correcta. 
Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.*/ 

let email = prompt("Introduce una dirección de email");

let comprobarEmail= new RegExp(/^[a-z,_.0-9-]+@[a-z]+\.[a-z]{2,3}$/g);

while (!comprobarEmail.test(email)){
    email = prompt("Introduce una dirección de email valida, por favor");
}

email = email.split("@");

console.log("El usuario de este email es "+email[0])
console.log("El servidor de este email es "+email[1])