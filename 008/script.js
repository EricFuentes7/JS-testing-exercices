let nombre1_input = document.getElementById("nombre1");
let nombre2_input = document.getElementById("nombre2");
let texto_error = document.getElementById("error");
let inicio = document.getElementById("inicio_partida");

let menu_principal = document.getElementById("a_ocultar");
let menu_juego = document.getElementById("juego");

let boton_p1 = document.getElementById("sumar_p1");
let boton_p2 = document.getElementById("sumar_p2");

let contador_1 = 0;
let contador_2 = 0;

let puntos_p1 = document.getElementById("puntos_us1");
let puntos_p2 = document.getElementById("puntos_us2");

let nombreuser_1 = document.getElementById("texto_us1");
let nombreuser_2 = document.getElementById("texto_us2");

let reinicio = document.getElementById("restart");
inicio.addEventListener("click", function() {
    let nombre1 = nombre1_input.value.trim();
    let nombre2 = nombre2_input.value.trim();
    if (nombre1 === "" || nombre2 === "") {
        texto_error.textContent = "Uno de los dos nombres es incorrecto"
        return;
    }
    menu_principal.classList.add("hidden");
    nombreuser_1.textContent = nombre1;
    nombreuser_2.textContent = nombre2;
    contador_1 = 0;
    contador_2 = 0;
    puntos_p1.textContent = contador_1;
    puntos_p2.textContent = contador_2;
    menu_juego.classList.remove("hidden");
});

boton_p1.addEventListener("click", function() {
    contador_1++;
    puntos_p1.textContent = contador_1;
});
boton_p2.addEventListener("click", function() {
    contador_2++;
    puntos_p2.textContent = contador_2;
});
document.addEventListener("keydown", function(e) {
    if (e.key == 'w'){
        contador_1++;
        puntos_p1.textContent = contador_1;
    }
    if (e.key == "ArrowUp"){
        contador_2++;
        puntos_p2.textContent = contador_2;
    }
    return;
});



reinicio.addEventListener("click", function() {
    menu_principal.classList.remove("hidden");
    menu_juego.classList.add("hidden");


});