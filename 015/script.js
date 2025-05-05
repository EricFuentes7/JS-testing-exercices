let enseñar = document.getElementById("amostrar");
let text_area = document.getElementById("input");

text_area.addEventListener('input', function() {
    enseñar.textContent = "Carácteres: " + text_area.value.length;
});
