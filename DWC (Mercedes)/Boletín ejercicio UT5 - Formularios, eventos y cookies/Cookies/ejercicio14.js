window.addEventListener("load", inicializar);

function inicializar() {
    var form = document.getElementById("formulario_cafe");
    form.addEventListener("submit", guardarDatosEnCookies);
}

function guardarDatosEnCookies(event) {
    event.preventDefault();

    document.cookie = "nombre=" + document.getElementById("nombre").value + "; path=/; max-age=86400";
    document.cookie = "habitacion=" + document.getElementById("habitacion").value + "; path=/;";

    var tiposCafes = "";
    var checkboxes = Array.from(document.querySelectorAll(".cafe:checked"));

    for (var i = 0; i < checkboxes.length; i++) {
        tiposCafes += checkboxes[i].value;
        if (i < checkboxes.length - 1) {
            tiposCafes += ", ";
        }
    }

    var tiposCafes = Array.from(document.querySelectorAll(".cafe:checked")).map(checkbox => checkbox.value).join(', ');


    document.cookie = "cafe=" + tiposCafes + "; path=/; max-age=86400";
}