document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");
  const inputNombre = document.getElementById("nombre");
  const selectMotivo = document.getElementById("motivo");

  if (!form || !inputNombre || !selectMotivo) {
    console.error("❌ No se encontró el formulario o sus campos. Revisa los IDs en el HTML.");
    return;
  }

  // --- POST: Enviar datos del formulario ---
  form.addEventListener("submit", async (e) => {
    e.preventDefault();

    const data = {
      nombre: inputNombre.value.trim(),
      motivo: selectMotivo.value,
    };

    if (!data.nombre || !data.motivo) {
      alert("⚠️ Por favor completa todos los campos antes de enviar.");
      return;
    }

    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      alert("✅ Mensaje enviado correctamente (ver consola)");
      console.log("📤 Datos enviados (POST):", data);
      console.log("📩 Respuesta del servidor (POST):", result);
    } catch (error) {
      alert("❌ Error al enviar el mensaje. Revisa la consola.");
      console.error("Error en POST:", error);
    }
  });

  // --- GET: Obtener datos simulados y mostrarlos en consola ---
  async function cargarMensajes() {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5");
      const mensajes = await response.json();

      console.log("📥 Mensajes obtenidos con GET:");
      console.table(mensajes);
    } catch (error) {
      console.error("Error al obtener mensajes (GET):", error);
    }
  }

  // Ejecutar automáticamente al cargar la página
  cargarMensajes();
});


