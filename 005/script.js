let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
/*
boton.addEventListener("click", function() {
    if(titulo.classList.contains("oculto")){
        titulo.classList.remove("oculto");
    } else {
        titulo.classList.add("oculto");
    }
});
 */
boton.addEventListener("click", function(){
    //Si ya tiene la clase, la quita, si no, la pone, lo mismo que lo comentado antes.
    titulo.classList.toggle("oculto");
});