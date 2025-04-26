let lista = document.getElementById("lista");
let reiniciar = document.getElementById("reiniciar");
lista.addEventListener("click", function(evento) {
    let a_borrar = evento.target;

    if (a_borrar.tagName === "LI") {
        a_borrar.innerHTML = "Escondido!";
        a_borrar.style.color = "gray";
    }

});

reiniciar.addEventListener("click", function(){
    location.replace(location.href);
})