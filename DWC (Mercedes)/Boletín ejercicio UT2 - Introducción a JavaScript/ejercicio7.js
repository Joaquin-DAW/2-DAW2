let x = prompt("Introduce las coordenadas cartesianas X de un punto en el plano",0);
let y = prompt("Introduce las coordenadas cartesianas Y de un punto en el plano",0);

if (x ==0 && y==0){
     alert("Tus coordenadas cartesianas son ("+x+","+y+")"+ " y estan sobre el origen");
}
else if (x==0){
     alert("Tus coordenadas cartesianas son ("+x+","+y+")"+ " y estan sobre el eje X");
}
else if (y==0){
     alert("Tus coordenadas cartesianas son ("+x+","+y+")"+ " y estan sobre el eje Y");
}
else{
     alert("Tus coordenadas cartesianas son ("+x+","+y+")");
}