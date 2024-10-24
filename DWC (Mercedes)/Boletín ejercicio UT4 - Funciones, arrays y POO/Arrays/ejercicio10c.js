/*Refactoriza el siguiente código usando funciones flecha.

    c)Asegúrate de que la función se llama bar

    function bar(){ 
        let txt = ''; 
        for(let i in arguments){ 
            txt += arguments[i];
        } 
        return txt;
    }*/ 

var bar = (...args) => {
    let txt = '';
    for (let i in args) {
        txt += args[i];
    }
    return txt;
};
        
const result = bar('Hola', ' ', 'que', ' ', 'tal');
console.log(result);