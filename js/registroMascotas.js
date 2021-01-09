var RegistroUsuario =  document.getElementById("UsuarioNombreRegistro");
var EmailUser =  document.getElementById("EmailUserRegistro");
var ContraseñaRegistro = document.getElementById("ContraseñaUserRegistro");
var NombreRegistro = document.getElementById("NombreUser");
var btnRegistrar = document.getElementById('form');
 

btnRegistrar.addEventListener ('submit', function(event){
event.preventDefault();

if (RegistroUsuario.value === null || RegistroUsuario.value === "")
{
   alert("El campo Usuario esta vacio");
    return false;
}
if (EmailUser.value === null || EmailUser.value === "")
 {
    alert("El campo Email esta vacio");
    return false;
 } 
if (ContraseñaRegistro.value === null || ContraseñaRegistro.value === "")
{
    alert("El campo Contraseña  esta vacio");
    return false;
} 
if (NombreRegistro.value === null || NombreRegistro.value === "")
{
    alert("El campo Nombre  esta vacio");
    return false;
} 
else{
    alert("Registro Exitoso");
 location.href="inicioMascotas.html"

} 

});
