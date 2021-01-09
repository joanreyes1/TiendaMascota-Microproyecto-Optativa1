
var nombre = document.getElementById("txtNombreCompleto");
var direccion = document.getElementById("dir");
var fechaDesde = document.getElementById("Ddate");
var fechaHasta = document.getElementById("Hdate");
var telefono = document.getElementById("phone");
var tipoMascota = document.getElementById("type");
var combo = document.getElementById("combo")
var btnEnviar = document.getElementById("validar");




btnEnviar.addEventListener('submit', function (event) {
    event.preventDefault();
    SolicitarTurno();



});


function SolicitarTurno() {
    if (nombre.value === null || nombre.value === "") {
        alert("El campo Nombres esta vacio");
        return false;
    }
    if (direccion.value === null || direccion.value === "") {
        alert("El campo Dirección esta vacio");
        return false;
    }
    if (fechaDesde.value === null || fechaDesde.value === "") {
        alert("Debes escoger una fecha");
        return false;
    }
    if (fechaHasta.value === null || fechaHasta.value === "") {
        alert("Debes escoger una fecha");
        return false;
    }
    if (telefono.value === null || telefono.value === "") {
        alert("El campo teléfono esta vacio");
        return false;
    }
    if (tipoMascota.value === null || tipoMascota.value === "") {
        alert("El campo teléfono esta vacio");
        return false;
    }
    if (combo.value === null || combo.value === "") {
        alert("Debes Eligir el proceso a realizar");
        return false;
    }
    else {
        alert("Solicitud Enviada Correctamente");
        LimpiarDatos();

    }

}


function LimpiarDatos() {
    document.getElementById("txtNombreCompleto").value = "";
    document.getElementById("dir").value = "";
    document.getElementById("Ddate").value = "";
    document.getElementById("Hdate").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("type").value = "";
    document.getElementById("combo").value = "";
    document.getElementById("validar").value = "";

}

/*function onFormSubmit(){
    var formData = readFormData();
    insertNewRecord(formData);
}*/

/*function readFormData(){
    var formData = {};
    formData["txtNombreCompleto"] = document.getElementById("txtNombreCompleto").value;
    formData["dir"] = document.getElementById("dir").value;
    formData["Ddate"] = document.getElementById("Ddate").value;
    formData["Hdate"] = document.getElementById("Hdate").value;
    formData["phone"] = document.getElementById("phone").value;
    formData["type"] = document.getElementById("type").value;
    formData["combo"] = document.getElementById("combo").value;
    return formData;

}*/

/*function insertNewRecord(data) {
    var table = document.getElementById("employeeList").getElementsByTagName("tbody")[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.txtNombreCompleto;
    call2 = newRow.insertCell(1);
    call2.innerHTML = data.direccion;
    call3 = newRow.insertCell(2);
    call3.innerHTML = data.Ddate;
    call4 = newRow.insertCell(3);
    call4.innerHTML = data.Hdate;
    call5 = newRow.insertCell(4);
    call5.innerHTML = data.phone;
    call6 = newRow.insertCell(5);
    call6.innerHTML = data.type;
    call7 = newRow.insertCell(6);
    call7.innerHTML = data.combo;
    cell8.innerHTML = `<a>Edit</a>
                       <a>Delete</a>`;

}*/


























