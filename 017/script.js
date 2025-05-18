let tareas = [
  { texto: "Hacer ejercicio", completada: false },
  { texto: "Estudiar JS", completada: true },
  { texto: "Comer sano", completada: false }
];
let aentrar = document.getElementById("aentrar");

document.addEventListener("keydown", function(e) {
  if (e.key === 'Enter') {
    let texto = aentrar.value.trim();
    if (texto !== "") {
      tareas.push({ texto: texto, completada: false });
      aentrar.value = "";
      actualizar();

    }
  }
});
function actualizar() {

    let tareasViejas = document.querySelectorAll(".tarea");
    tareasViejas.forEach(el => el.remove());
  
    tareas.forEach((tarea, i) => {
    let label = document.createElement('label');
    let input = document.createElement('input');
    input.type = "checkbox";
    input.checked = tarea.completada;

    label.textContent = tarea.texto;
    let container = document.createElement('div');
    container.appendChild(input);
    container.appendChild(label);

    container.classList.add("tarea");

    document.body.appendChild(container);
    });
}
actualizar();
