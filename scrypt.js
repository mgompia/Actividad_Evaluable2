document.getElementById("url").textContent = window.location.href; 
document.getElementById("info").textContent = "El nombre de codigo del navegador que estas usando es " + window.navigator.appCodeName + " la app name es " + window.navigator.appName + " y la version de la app es " + window.navigator.appVersion; 
document.getElementById("tam").textContent = "La altura es: " + window.innerHeight + " y la anchura es " +  window.innerWidth; 
document.getElementById("idioma").textContent = window.navigator.language; 

function nombre_function(){
    let mensaje = "Inner Height: " + window.innerHeight + " Inner Width: " +  window.innerWidth + " Outer Height: " + window.outerHeight + " Inner Width: " + window.outerWidth; 
    alert(mensaje)
}

function reload(){
    window.location.reload(); 
}
function volver(){
    window.history.back(); 
}




function abrirVentana(){
    window.open("https://es.wikipedia.org/wiki/JavaScript");
}

function cerrarVentana(){
    window.close(); 
}


function cambiarColor(){
    let colorUsuario = prompt("Introduce un color"); 
    document.body.style.backgroundColor = colorUsuario; 
    if(colorUsuario == ""){
        document.getElementById("mensajeError").textContent = "Debes escribir bien el color para que funcione";
    }else if(colorUsuario == null){
        document.getElementById("mensajeError").textContent = "Cancelacion del cambio de color";
    }else{
        document.getElementById("mensajeError").textContent = "El color a sido cambiado a " + colorUsuario;
    }
}