//se que se puede optimizar, pero eso más adelante
let a_mover = document.getElementById("semueve");
let a_mover_der = document.getElementById("semueve2");
let a_mover_izq2 = document.getElementById("semueve3");

window.addEventListener('scroll', function() {
    const scrollX = window.scrollY;
    a_mover.style.transform = `translateX(-${scrollX}px)`;
    a_mover_der.style.transform = `translateX(${scrollX}px)`;
    a_mover_izq2.style.transform = `translateX(-${scrollX}px)`;

});