let input = document.getElementById("nombre");
let saludo = document.getElementById("saludo");
let tecla = document.getElementById("tecla");
let caja = document.getElementById("caja")
let select = document.getElementById("color");
let bloque = document.getElementById("bloque");

input.addEventListener("input", function() {
    saludo.textContent = "Hola " + input.value;
});

document.addEventListener("keydown", function(evento) {
    tecla.innerHTML = "Tecla presionada: " + evento.key;
});

caja.addEventListener("mouseover", function() {
    caja.style.backgroundColor = "salmon";
});
caja.addEventListener("mouseout", function() {
    caja.style.backgroundColor = "lightblue";
});

select.addEventListener("change", function() {
    bloque.style.backgroundColor = select.value;
});