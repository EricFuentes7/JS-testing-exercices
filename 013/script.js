let rojo = document.getElementById("rojo");
let negro = document.getElementById("negro");

let canva = document.getElementById("canva");

let tamaño = document.getElementById("width")
let colorActual = "black";
let dibujando = false;

rojo.style.color = rojo.textContent;
rojo.style.background = rojo.textContent;

negro.style.color = negro.textContent;
negro.style.background = negro.textContent;

rojo.addEventListener("click", function() {
    colorActual = "red";
});
negro.addEventListener("click", function() {
    colorActual = "black";
});

canva.addEventListener("mousedown", function() {
    dibujando = true;
});

canva.addEventListener("mouseup", function() {
    dibujando = false;
});

canva.addEventListener("mouseleave", function() {
    dibujando = false;
});

canva.addEventListener("mousemove", function(e) {
    if (dibujando) {
        const rect = canva.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const mida_final = parseInt(tamaño.value) || 5;

        const punto = document.createElement("span");
        punto.draggable = false;
        punto.style.position = "absolute";
        punto.style.left = `${x}px`;
        punto.style.top = `${y}px`;
        punto.style.width = `${mida_final}px`;
        punto.style.height = `${mida_final}px`;
        punto.style.backgroundColor = colorActual;

        canva.appendChild(punto);
    }
});
