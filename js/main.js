const productosContenedor = document.getElementById("productos");
import { renderizarProductos, obtenerProductos } from "./tarjetas.js";


async function init() {
    try {
        // obtener productos api
        const productosData = await obtenerProductos ()

        // renderizar los productos al dom
        renderizarProductos(productosData, productosContenedor);       
    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
    }
}

// Ejecutar la inicialización al cargar la página
document.addEventListener("DOMContentLoaded", init);
