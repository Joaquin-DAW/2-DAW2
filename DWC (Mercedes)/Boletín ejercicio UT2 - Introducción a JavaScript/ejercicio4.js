let hora = prompt("Introduce una hora con sus minutos usando el formato '00:00'",0);

let inicioDia="07:30";
let finalDia="14:00";
let inicioTarde="14:01";
let finalTarde="20:30";
let inicioNoche="20:31";
let finalNoche="07:29";

if (hora>=inicioDia && hora<=finalDia){
     alert("Buenos días");
}
else if (hora>=inicioTarde && hora<=finalTarde){
     alert("Buenas tardes");
}
else{
     alert("Buenas noches");
}