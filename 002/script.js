let titulo = document.getElementById("titulo");
let boton = document.getElementById("boton");
let texto = "Texto modificado boys";
boton.addEventListener("click", function() {
    console.log("nuevo título = " + texto);
    titulo.innerHTML = texto;
});