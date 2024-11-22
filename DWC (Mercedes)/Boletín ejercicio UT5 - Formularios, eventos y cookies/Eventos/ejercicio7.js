window.addEventListener("load", inicializar);

function inicializar(){
    const btn = document.getElementsByName('color');
        for(let i=0; i<btn.length; i++){
            btn[i].addEventListener('click', color);
        }
}

function color(e){
    let elemento = e.currentTarget;

    if (elemento.value == "rojo"){
        document.getElementsByTagName('form')[0].stylebackgroundColor = 'red';
    }
    else if(elemento.value == "azul"){
        document.getElementsByTagName('form')[0].stylebackgroundColor = 'blue';
    }else{
        document.getElementsByTagName('form')[0].stylebackgroundColor = 'green';
    }
}