const productosContenedor = document.getElementById("productos");
const buttonCarrito = document.getElementById ("buttonCarrito")
import { obtenerProductos, renderizarProductos } from "./tarjetas.js";


async function init () {
    try {
    // Obtener productos desde la  API
    const productos = await obtenerProductos ()  // Esperar la respuesta de la API
    // mostrar productos
    renderizarProductos (productos, productosContenedor)

    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
        productosContenedor.innerHTML = `<p class="error">No se pudieron cargar los productos. Intenta más tarde.</p>`;
    }
}

$(window).on("load", function () {
    init ();
    setTimeout(() => {
        $(".pantalla_carga").addClass("hidden");
    }, 1000);
});