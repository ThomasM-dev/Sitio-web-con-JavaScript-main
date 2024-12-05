const productosContenedor = document.getElementById("productos");
const buttonCarrito = document.getElementById ("buttonCarrito");
const contadorProductos= document.getElementById ("contadorProductos");
const ventanaModal = document.getElementById("ventanaModal");
const btnSeguirComprando = document.getElementById("seguirComprando");
const btnFinalizarPedido = document.getElementById ("finalizarPedido")
const mensajeCarrito = document.getElementById ("mensajeCarrito");
const tablaProductos = document.getElementById ("tablaProductos");
const carritoCompras = JSON.parse(localStorage.getItem("carritoCompras")) || [];
import { obtenerProductos, renderizarProductos, renderizarButton } from "./tarjetas.js";
import { cerrarCarrito, mostrarCarrito, finalizarPedido } from "./carrito.js";

async function init () {
    try {
    // verifica que la varibale exista en el DOM
    if (productosContenedor) {
    contadorProductos.textContent = carritoCompras.length;
    const productos = await obtenerProductos ()  // Esperar la respuesta de la API
    renderizarProductos (productos, productosContenedor);
    renderizarButton (productos, contadorProductos, carritoCompras);
    mostrarCarrito (buttonCarrito, ventanaModal, mensajeCarrito, carritoCompras, tablaProductos);
    cerrarCarrito (btnSeguirComprando, ventanaModal)
    finalizarPedido (carritoCompras, btnFinalizarPedido)

    }
    } catch (error) {
        if (productosContenedor) {
            productosContenedor.innerHTML = `<p class="error_inicializacion">No se pudieron cargar los productos. Intenta más tarde.</p>`;
        }
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


// Cerrar modal al realizar scroll
window.addEventListener('scroll', () => {
    if (ventanaModal && ventanaModal.style.display === 'flex') {
        ventanaModal.style.display = "none";
    }
});
