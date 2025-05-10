window.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
  
    const persona = personas[id];
  
    if (persona) {
      document.getElementById("nombre").textContent = persona.nombre;
      document.getElementById("descripcion").textContent = persona.descripcion;
    } else {
      document.getElementById("nombre").textContent = "Persona no encontrada";
      document.getElementById("descripcion").textContent = "";
    }
  });
  
