
async function cargarPrecioDesdeSheets(range, elementId) {
    const sheetId = '1hXttbtbC67UcCNikJZq9trBtkxaIopg6Oaq0bFzwyf8';
    const apiKey = 'AIzaSyAcuSCT6Z_lR54bD9xvj9R7ZbFS_rnNNoY'; // Reemplaza con tu clave API
    const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheetId}/values/${range}?key=${apiKey}`;

    try {
        const response = await fetch(url);
        const data = await response.json();

        if (data.values) {
            const precio = data.values[0][0];
            document.getElementById(elementId).textContent = `Precio: $${precio}`;
        } else {
            document.getElementById(elementId).textContent = 'No se encontró el precio.';
        }
    } catch (error) {
        console.error('Error al obtener el precio:', error);
        document.getElementById(elementId).textContent = 'Error al cargar el precio.';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Timones
    cargarPrecioDesdeSheets('Pedidos!h2', 'producto-precio1');
    // Nocks
    cargarPrecioDesdeSheets('Pedidos!h4', 'producto-precio2');
    // NocksL
    cargarPrecioDesdeSheets('Pedidos!h4', 'producto-precio3');
    // FLechas 4.2
    cargarPrecioDesdeSheets('Pedidos!H11', 'producto-precio4');
});
