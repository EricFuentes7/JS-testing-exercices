let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
boton.addEventListener("click", function() {
    if(titulo.style.display == "none"){
        titulo.style.display = "block";
    } else {
        titulo.style.display = "none";
    }
});