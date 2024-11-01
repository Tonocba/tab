const usuarioEspecial = "admin"; // Cambia esto por el usuario real

// Importación de librerías
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'bootstrap';

let loggedIn = false;

// Función para iniciar sesión
function iniciarSesion() {
    const usuario = prompt("Ingrese el nombre de usuario:");
    if (usuario === usuarioEspecial) {
        loggedIn = true;
        document.getElementById("editor").style.display = "block";
    } else {
        alert("Usuario no autorizado");
    }
}

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



// Exportar funciones si es necesario (opcional)
export { iniciarSesion, publicarArticulo, openWhatsApp, cargarPrecioDesdeSheets };
