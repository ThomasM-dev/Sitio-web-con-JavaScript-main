const productosContenedor = document.getElementById("productos");
const buttonCarrito = document.getElementById ("buttonCarrito");
const contadorProductos= document.getElementById ("contadorProductos");
const ventanaModal = document.getElementById("ventanaModal");
const buttonCerrar = document.getElementById("cerrarCarrito");
const productosCarrito = document.getElementById ("productosCarritos")
console.log(productosCarrito);

const carritoCompras = []; 
import { obtenerProductos, renderizarProductos, renderizarButton } from "./tarjetas.js";
import { cerrarCarrito, mostrarCarrito } from "./carrito.js";

async function init () {
    try {
    // Obtener productos desde la  API
    const productos = await obtenerProductos ()  // Esperar la respuesta de la API

    // verifica que la varibale exista en el DOM
    if (productosContenedor != null) {
    // mostrar productos
    renderizarProductos (productos, productosContenedor);
    renderizarButton (productos, contadorProductos, carritoCompras);
    }
    
    mostrarCarrito (buttonCarrito, ventanaModal, productosCarrito, carritoCompras);
    cerrarCarrito (buttonCerrar)

    } catch (error) {
        console.error("Error al inicializar la aplicación:", error);
        productosContenedor.innerHTML = `<p class="error_inicializacion">No se pudieron cargar los productos. Intenta más tarde.</p>`;
    }
}
window.addEventListener ("load", () => {
    init ();
    setTimeout (() => {
        const pantallaCarga = document.querySelector(".pantalla_carga");
        if (pantallaCarga) {
            pantallaCarga.classList.add("hidden");
        }
    }, 2000)
})