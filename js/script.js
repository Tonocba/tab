const usuarioEspecial = "admin"; // Cambia esto por el usuario real

// Importación de librerías
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';

let loggedIn = false;



// Función para publicar un artículo
function publicarArticulo() {
    if (!loggedIn) {
        alert("Acceso denegado. Inicie sesión.");
        return;
    }

    const texto = document.getElementById("articuloTexto").value.trim();
    if (texto) {
        const nuevoArticulo = document.createElement("div");
        nuevoArticulo.textContent = texto;
        document.getElementById("articulos").appendChild(nuevoArticulo);
        
        // Limpiar el textarea después de publicar
        document.getElementById("articuloTexto").value = "";
    }
}

function openWhatsApp() {
  const numeroWhatsApp = "5493515511900"; // Cambia el número por el real
  const url = `https://wa.me/${numeroWhatsApp}`;
  window.open(url, "_blank"); // Abrir en una nueva pestaña
}

document.addEventListener('DOMContentLoaded', () => {
    // Selecciona todos los botones "Leer más"
    const toggleButtons = document.querySelectorAll('.toggle-content');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Selecciona el siguiente elemento, que es el contenido del blog
            const content = button.nextElementSibling;

            // Alterna la visualización del contenido
            if (content.style.display === 'none' || content.style.display === '') {
                content.style.display = 'block';
                button.textContent = 'Leer menos';
            } else {
                content.style.display = 'none';
                button.textContent = 'Leer más';
            }
        });
    });
});


// Exportar funciones si es necesario (opcional)
export { publicarArticulo, openWhatsApp, cargarPrecioDesdeSheets,  };
