/*    Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:

    [
        {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12", ...]},
        {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22", ...]},
        ...
    ]   */ 

    const jsonData = [
        {src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
        {src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    ];

    var titulo = document.createElement("h1");
    var texto= document.createTextNode("Subtitulo");
    titulo.appendChild(texto);
    var elemento1ul = document.createElement("ul");
    var elemento1li = document.createElement("li");
    elemento1ul.appendChild(elemento1li);
    titulo.appendChild(elemento1ul);
    jsonData.forEach(item => {
        var imagen = document.createElement("img");
        imagen.src = item.src; 
        imagen.alt = item.desc;
    })
    
    elemento1li.appendChild(imagen);


    todosviajes.appendChild(titulo);