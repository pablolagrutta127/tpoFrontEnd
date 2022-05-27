
function iniciar(){
nombreAp = document.getElementById("usuario");
document.nombreAp.addEventListener("invalid",validoNombreAp,false);
email = document.getElementById("email");
document.email.addEventListener("invalid",validoEmail,false);
comentario = document.getElementById("comentario")
document.comentario.addEventListener("invalid",validacion, true);
document.getElementById("enviar").addEventListener("click",enviar, false);
document.comentario.addEventListener("input", controlar,false);
}

function validoNombreAp() {
    nombreAp = document.getElementById("usuario");
    if(isNumeric(usuario)) { alert('Usuario no debe contener numeros'); } 
    else { alert('not number'); }

}
function validoEmail() {
    email = document.getElementById("email");
 if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email))
  {
    return (true)
  }
    alert("La dirección de email no es válida")
    return (false)
}
function validacion(e){
var elemento=e.target;
elemento.style.background='#FFDDDD';
}
function enviar(){
var valido=document.comentario.checkValidity();
if(valido){
document.comentario.submit();
}
}
function controlar(e){

var elemento=e.target;
if(elemento.validity.valid){
elemento.style.background='#FFFFFF';
}else{
elemento.style.background='#FFDDDD';
}
}
window.addEventListener("load", iniciar, false);
