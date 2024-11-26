export function mostrarCarrito(buttonCarrito, ventanaModal, productosCarrito, carritoCompras) {
    buttonCarrito.addEventListener("click", () => {
        if (carritoCompras.length === 0) {
            productosCarrito.innerHTML = "";
            productosCarrito.innerHTML = `<h2 class="carritoVacio">El carrito esta vacio</h2>`
        } else {
            productosCarrito.innerHTML = "";
            carritoCompras.forEach(elementos => {
                
            });
        }
        ventanaModal.style.display = "flex";
    })
}

export function cerrarCarrito (buttonCerrar) {
    buttonCerrar.addEventListener("click", () => {
        ventanaModal.style.display = "none";
        });
}
