let inputNombre = document.getElementById("nombre");
let boton = document.getElementById("boton");
let mensaje = document.getElementById("mensaje");

boton.addEventListener("click", function() {
    let nombre = inputNombre.value;
    if (nombre !== "") {
        mensaje.textContent = "Hola, " + nombre + "!";
    } else {
        mensaje.textContent = "Ey, escribe tu nombre";
    }
});
