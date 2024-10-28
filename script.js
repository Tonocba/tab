const usuarioEspecial = "admin";
// Cambia esto por el usuario real

let loggedIn = false;
function iniciarSesion() {
  const usuario = prompt("Ingrese el nombre de usuario:");
  if (usuario === usuarioEspecial) {
    loggedIn = true;

    document.getElementById("editor").style.display = "block";
  } else {
    alert("Usuario no autorizado");
  }
}

function publicarArticulo() {
  if (!loggedIn) {
    alert("Acceso denegado. Inicie sesión.");

    return;
  }

  const texto = document.getElementById("articuloTexto").value;
  if (texto) {
    const nuevoArticulo = document.createElement("div");
    nuevoArticulo.textContent = texto;

    document.getElementById("articulos").appendChild(nuevoArticulo);

    document.getElementById("articuloTexto").value = "";

    // Limpiar el textarea
  }
}

function openWhatsApp() {
  window.open("https://wa.me/5493513742796");

  // Cambia el número por el real
}
