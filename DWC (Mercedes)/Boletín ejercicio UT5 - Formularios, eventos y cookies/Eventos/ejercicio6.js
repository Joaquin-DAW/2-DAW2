window.addEventListener("load", inicializar);

function inicializar(){
    document.getElementById('btn').addEventListener('click',validar);
    document.getElementById('btn').addEventListener('mouseenter',cambio);
    document.getElementById('btn').addEventListener('mouseleave',cambio);
}

function validar(){
    let txt= document.getElementById('text').value;
    let control = txt.toUpperCase();

        if(txt === control && txt != ""){
            document.getElementsByTagName('form')[0].action="mailto:joaquin@gmail.com";
            document.getElementsByTagName('form')[0].submit();
        }else{
            document.getElementById('error').textContent = "No es mayúscula";
        }
}