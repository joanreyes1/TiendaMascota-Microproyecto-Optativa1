
var cell1 = document.getElementById("cell1");
function alert1() {
    alert("La solicutud ha sido aceptada con veterinario ¡Gracias por preferirnos!");
    cell1.style.backgroundColor = '#178A01';
}

function alert2() {
    var mensaje = confirm("¿Estas seguro de rechazar la solicitud?");
    //Detectamos si el usuario acepto el mensaje
    if (mensaje) {
        alert("Solicitud Rechazada");
        cell1.style.backgroundColor = '#E40404';
    }
    //Detectamos si el usuario denegó el mensaje
    else {
        alert("No se rechazo la solicitud");
        cell1.style.backgroundColor = '#FFFFFF';
    }
}
function alert3() {
    var fecha = prompt("Ingresa la nueva fecha", "");
    var hora = prompt("ingresa la hora", "");
    //Detectamos si el usuario ingreso un valor
    if (fecha && hora != null) {
        alert("La fecha y hora se han modificado al " + fecha + "" + hora);
    }
    //Detectamos si el usuario NO ingreso un valor
    else {
        alert("No has ingresado los datos");
    }

}


