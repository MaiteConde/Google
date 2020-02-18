console.log ("Hola mundo");


var buscarInput=document.getElementById("buscarInput");

document.querySelector(".botonBuscar").addEventListener("click", function (){
var texto=document.getElementById("buscarInput").value;
    console.log (texto);
    window.location.href="https://www.google.es/search?q=" + texto;
})

buscarInput.addEventListener("keyup", function (event){
    if(event.keyCode ===13) {
    var texto=document.getElementById("buscarInput").value;
        console.log (texto);
        window.location.href="https://www.google.es/search?q=" + texto;
    }
    })