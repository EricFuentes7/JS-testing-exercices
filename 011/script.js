let dialogo = document.getElementById("caja");
let personaje = document.getElementById("personaje");
let desc = document.getElementById("desc");
let guardar = document.getElementById("guardar");
let primero = document.getElementById("elegir");
let borrar = document.getElementById("borrar")
let dialogos = 0;

let input_nombre = document.getElementById("nombre");
let nombreGuardado = localStorage.getItem("nombre");

if (nombreGuardado && nombreGuardado.trim() !== "") {
    primero.classList.add("hidden");
    
    personaje.innerHTML = nombreGuardado;
    desc.innerHTML = "Wow";
} else {
    dialogo.classList.add("hidden");
    borrar.classList.add("hidden");

}

guardar.addEventListener("click", function() {
  localStorage.setItem("nombre", input_nombre.value.trim());
  nombreGuardado = localStorage.getItem("nombre");
  dialogos = 0;
  primero.classList.add("hidden");
  dialogo.classList.remove("hidden");
  borrar.classList.remove("hidden");

  personaje.innerHTML = nombreGuardado;
  desc.innerHTML = "Wow";
});

borrar.addEventListener("click", function() {
  localStorage.clear();
  location.reload(location.href)
});
  

document.addEventListener("keydown", function(e) {
    if (e.key == 'Enter') {
        dialogos++;
        
        switch (dialogos) {
            case 1:
                personaje.innerHTML = nombreGuardado;
                desc.innerHTML = "Holaaa";
                break;
            case 2:
                desc.innerHTML = "Segundoo";
                break;
            case 3:
                personaje.innerHTML = "Xavi";
                desc.innerHTML = "Que dices flipao";
                break;
            case 4:
                personaje.innerHTML = nombreGuardado;
                desc.innerHTML = "por cada día que pasa el apocalipsis deja de ser un miedo y se torna una esperanza";
                break;
            case 5:
                personaje.innerHTML = "Xavi";
                desc.innerHTML = "💀";
                break;
            case 6:
                dialogo.classList.add("hidden");
                const para = document.createElement("p");
                para.textContent = "Final";
                document.body.appendChild(para);
                break;
        }
    }
});
