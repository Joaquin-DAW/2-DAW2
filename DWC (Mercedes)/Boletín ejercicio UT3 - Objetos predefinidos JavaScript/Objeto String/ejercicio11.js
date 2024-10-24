/*Diseña una expresión regular que valide contraseñas que contengan al menos una letra mayúscula, una letra minúscula, un número 
y un carácter especial, y que tengan entre 8 y 20 caracteres.*/ 

let contrasena = prompt("Introduce una contraseña, debe tener al menos una letra mayúscula, una letra minúscula, un número"+
"y un carácter especial, y que tengan entre 8 y 20 caracteres.");

let validadorContrasena= new RegExp(/(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[,._@#$%^&+=?!-]).{8,20}/);

while(!validadorContrasena.test(contrasena)){
    contrasena = prompt("Introduce una contraseña valida");
}

console.log("Tu contraseña es valida");