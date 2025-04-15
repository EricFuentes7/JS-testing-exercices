let parrafo = document.getElementById("texto");

fetch("./000-main/EJERCICIOS.txt")
  .then(res => res.text())
  .then(data => {
    let lineas = data.split("\n");

    lineas.forEach(linea => {
      let codigo = linea.slice(0, 3); // '001'
      let texto = linea.slice(6);     // después del guion y espacio

      let link = document.createElement("a");
      link.href = `${codigo}/index.html`;
      link.textContent = `${codigo} - ${texto}`;
      link.target = "_blank"; // abre en nueva pestaña (opcional)

      parrafo.appendChild(link);
    });
  })
  .catch(error => {
    parrafo.textContent = "Error al cargar el archivo.";
    console.error(error);
  });
