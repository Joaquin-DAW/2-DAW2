/* Crea un documento HTML con una lista de modelos de coches cuyo estilo sea de cuadradillo. Escribe una función JavaScript que use la f. 
getElementsByTagName() para recuperar los elementos de la lista. Añade el estilo de cuadradilla de la lista mediante JavaScript. 
Añade un nuevo modelo a la lista usando DOM, al principio, al final y en alguna posición intermedia que elijas. 
	Imagina que tenemos que insertar un nuevo modelo de coche pero no conocemos en 
    qué posición de la lista de nodos hijos queremos meterlo, sólo sabemos que será 		
    hermano del modelo “BMW” . Busca ese elemento por su texto y añade el nuevo 		
    modelo antes y después de este. */

    //Sacamos el elemento por tag name, en este caso ul
    var lista = document.getElementsByTagName('ul');

    //Nos devolvera dos ya que estamos usando 2 en el código, pero solo queremos el primero, así que lo ajustamos de esta manera.
    var lista = lista[0];
    
    //Y le aplicamos el setAttribute al primer ul, cambiando su estilo a cuadradilla
    lista.setAttribute('type', 'square')



    //Obtenemos todos los elementos que tengan el tag li
    var posicion = document.getElementsByTagName('li'); 

    //Seleccionamos el primer li
    var nuevaPosicion = posicion[0];

    //Creamos un nuevo elemento li para el nuevo coche que queremos crear
    var nuevoCoche = document.createElement('li'); 

    //Ahora creamos un nodo de texto para el nuevo coche del elemento li
    var textoCoche = document.createTextNode('Coche1');

    //Añadimos el nuevo texto al elemento li para que el li ya este completo
    nuevoCoche.appendChild(textoCoche);

    //Insertamos el nuevo coche antes de la primera posición para que se coloque él el primero.
    //Debemos usar parntNode para acceder al ul, que es el padre de li, y es que que controla sus posiciones. Si lo hicieramos sin parentNode accederiamos
    //directamente a los li, que no controlan la posición en la que estan, por lo que hacerlo sin parentNode fallaría.
    nuevaPosicion.parentNode.insertBefore(nuevoCoche, nuevaPosicion);


    //Insertamos un nuevo coche al final
    var posicion2 = document.getElementsByTagName('li'); 

    var nuevaPosicion2 = posicion2[posicion2.length-1];

    var nuevoCoche2 = document.createElement('li'); 

    var textoCoche2 = document.createTextNode('Coche2');

    nuevoCoche2.appendChild(textoCoche2);

    nuevaPosicion2.parentNode.appendChild(nuevoCoche2);


    //Insertamos un nuevo coche en la posicion que queramos
    var posicion3 = document.getElementsByTagName('li'); 

    var nuevaPosicion3 = posicion3[3];

    var nuevoCoche3 = document.createElement('li'); 

    var textoCoche3 = document.createTextNode('Coche3');

    nuevoCoche3.appendChild(textoCoche3);

    nuevaPosicion3.parentNode.insertBefore(nuevoCoche3, nuevaPosicion3);


    //Insertar antes y después del modelo de BMW buscando al elemento por su texto
    var listarLi = document.getElementsByTagName('li');

    var elementoBMW;

    for (var i = 0; i < listarLi.length; i++) {
        if (listarLi[i].textContent == "BMW") {
            elementoBMW = listarLi[i];
        }
    }

    //Creamos un nuevo elemento para insertar antes
    var nuevoCocheAntes = document.createElement('li');
    var textoCocheAntes = document.createTextNode('CocheAntesDeBMW');
    nuevoCocheAntes.appendChild(textoCocheAntes);

    //Insertar el nuevo elemento antes de BMW
    elementoBMW.parentNode.insertBefore(nuevoCocheAntes, elementoBMW);

    //Creamos un nuevo elemento para insertar después
    var nuevoCocheDespues = document.createElement('li');
    var textoCocheDespues = document.createTextNode('CocheDespuesBMW');
    nuevoCocheDespues.appendChild(textoCocheDespues);

    //Insertamos el nuevo elemento después de BMW, usando para ello nextSibling, ya que si usaramos un appendChild nos lo pondría al final.
    elementoBMW.parentNode.insertBefore(nuevoCocheDespues, elementoBMW.nextSibling);