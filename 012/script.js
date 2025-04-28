let input = document.getElementById("meter_texto");
let boton = document.getElementById("ingresar");
let error = document.getElementById("error");
let texto;

let ul = document.createElement('ul');
document.body.appendChild(ul);
let lista = [];

boton.addEventListener("click", function() {
    texto = input.value.trim();

    if (texto == "") {
        error.classList.remove("hidden");
    } else { 
        lista.push(texto);
        error.classList.add("hidden");
        input.value = "";
        actualizarLista();
    }
});

document.addEventListener("keydown", function(e) {
    if (e.key == 'Enter') { 
        texto = input.value.trim();
        if (texto == "") {
            error.classList.remove("hidden");
        } else { 
            lista.push(texto);
            error.classList.add("hidden");
            input.value = "";
            actualizarLista();
        }
    }
});

function actualizarLista() {
    ul.innerHTML = "";
    lista.forEach(function(item) {
        let li = document.createElement('li');
        li.textContent = item;
        ul.appendChild(li);
    });
}
