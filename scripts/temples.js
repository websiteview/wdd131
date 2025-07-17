// Toggle hamburguesa
document.querySelector("#menu").addEventListener("click", () => {
  document.querySelector("#nav").classList.toggle("show");
});

// Año actual
document.getElementById("year").textContent = new Date().getFullYear();

// Fecha última modificación
document.getElementById("lastModified").textContent = document.lastModified;
