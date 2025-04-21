let input = document.getElementById("nombre");
let boton = document.getElementById("enviar");
let texto = document.getElementById("texto");
let botonBorrar = document.getElementById("borrar");

let nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado && nombreGuardado.trim() !== "") {
    texto.textContent = "Hola! Si no mal recuerdo tu nombre es... " + nombreGuardado + "!";
} else {
    texto.textContent = "Huh? No me sé tu nombre, porfa escríbelo.";
}

boton.addEventListener("click", function() {
    let input_clear = input.value.trim();
    if (input_clear !== "") {
        localStorage.setItem("nombre", input_clear);
        texto.textContent = "Hola! Si no mal recuerdo tu nombre es... " + input_clear + "!";
    }
});

botonBorrar.addEventListener("click", function() {
    localStorage.removeItem("nombre");
    texto.textContent = "Nombre borrado. Por favor, escríbelo de nuevo.";
    input.value = "";
});
