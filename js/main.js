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
        productosContenedor.innerHTML = `<p class="error">No se pudieron cargar los productos. Intenta más tarde.</p>`;
    }
}

$(window).on("load", function () {
    init ();
    setTimeout(() => {
        $(".pantalla_carga").addClass("hidden");
    }, 1000);
});