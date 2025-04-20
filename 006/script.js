let inputNombre = document.getElementById("nombre");
let inputEdad = document.getElementById("edad");
let boton = document.getElementById("enviar");
let mensaje = document.getElementById("mensaje");

// 2. Detectamos clic en el botón
boton.addEventListener("click", function() {
    let nombre = inputNombre.value.trim(); //Elimina espacios en blanco
    let edad = parseInt(inputEdad.value); //Como el input siempre es texto, se convierte a INT

    if (nombre === "" || isNaN(edad)) {
        mensaje.textContent = "Completa los campos bien! >:(";
        mensaje.style.color = "red";
        return;
    }
    if (edad < 0 || edad > 120) {
        mensaje.textContent = "Edad no válida.";
        mensaje.style.color = "orange";
        return;
    }
    mensaje.textContent = `Hola ${nombre}, tienes ${edad} años. ¡Todo chill!`;
    mensaje.style.color = "green";
});
