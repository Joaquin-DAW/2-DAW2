window.addEventListener("load", inicializar);

function inicializar (){
  document.getElementById('sms').addEventListener('input', entrada);
}

function entrada (){
  let txt=document.getElementById('sms').value;
  let rg = new RegExp(/^[a-zA-Z0-9 .,!?¡¿'"()\-:;@#]+$/);
  let max = 145;
  let long = txt.length;
  let quedan = max -long;
  document.getElementById('texto').textContent = "Quedan "+quedan+" caracteres";

  if(!rg.test(txt)){
    document.getElementById('btn').setAttribute('disable', true);
    document.getElementById('error').textContent = "No es un carácter alfanumérico";
  }else{
    document.getElementById('btn').removeAttribute('disable');
    document.getElementById('error').textContent = "";
  }
}