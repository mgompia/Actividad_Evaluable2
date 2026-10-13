document.getElementById("url").textContent = window.location.href; 
document.getElementById("info").textContent = "El nombre de codigo del navegador que estas usando es " + window.navigator.appCodeName + " la app name es " + window.navigator.appName + " y la version de la app es " + window.navigator.appVersion; 
document.getElementById("tam").textContent = "La altura es: " + window.innerHeight + " y la anchura es " +  window.innerWidth; 
document.getElementById("idioma").textContent = window.navigator.language; 

function nombre_function(){
    let mensaje = "Inner Height: " + window.innerHeight + " Inner Width: " +  window.innerWidth + " Outer Height: " + window.outerHeight + " Inner Width: " + window.outerWidth; 
    alert(mensaje)
}