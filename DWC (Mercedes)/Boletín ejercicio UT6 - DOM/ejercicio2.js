
    // Crear un nodo de párrafo
    var para = document.createElement('p');

    // Crear el texto "Este es el" y lo asignamos a la variable txt1
    var txt1 = document.createTextNode('Este es el ');

    // Añadimos txt1 a la variable para
    para.appendChild(txt1);

    // Crear un nodo <em> y el texto "contenido"
    var enfasis = document.createElement('em');

    // Creamos un nodo de texto "contenido" y lo asignamos a la variable txt2
    var txt2 = document.createTextNode('contenido');

    // Añadimos txt2 a la variable enfasis
    enfasis.appendChild(txt2);

    // Añadimos enfasis a para
    para.appendChild(enfasis);

    // Creamos un node de texto con el texto "de mi parrafo" y lo asignamos a la variable txt3
    var txt3 = document.createTextNode(' de mi párrafo.');

    // Añadimos la variable txt3 a para
    para.appendChild(txt3);

    // Añadimos la variable para al elemento testdiv del documento
    var testDiv = document.getElementById('testdiv');
    testDiv.appendChild(para);