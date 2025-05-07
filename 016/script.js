const texto = " 127 Studio";
const elemento = document.getElementById("texto");
const pantalla_inicio = document.getElementById("principal")
const pantalla_escondida = document.getElementById("escondido")

let i = 0;

function escribir() {
  if (i < texto.length) {
    elemento.textContent += texto.charAt(i);
    i++;
    setTimeout(escribir, 300);
  } else {
    setTimeout(desaparecer,1000)
  }
}

function desaparecer() {
    pantalla_inicio.classList.add("desaparecer-animado");
    setTimeout(function () {
      pantalla_inicio.style.display = "none"
      pantalla_escondida.classList.add("aparecer-animado");
    },1000);
  }
  
  
escribir();
