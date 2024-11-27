export function mostrarCarrito(buttonCarrito, ventanaModal, mensajeCarrito, carritoCompras, tablaProductos) {
    buttonCarrito.addEventListener("click", () => {
        if (carritoCompras.length === 0) {
            mensajeCarrito.textContent = "El carrito está vacío";
            tablaProductos.innerHTML = "";
        } else {
            mensajeCarrito.textContent= ""
            let renderizarProductos = ""; 
            carritoCompras.forEach((producto, index) => {
                renderizarProductos += productosCarrito(producto, index);
            });
            tablaProductos.innerHTML = renderizarProductos;
        }
        ventanaModal.style.display = "flex";
    });
}

export function cerrarCarrito (buttonCerrar, ventanaModal) {
    buttonCerrar.addEventListener ("click", () => {
        ventanaModal.style.display = "none"
    })

}

function productosCarrito(producto, index) {
    return `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${producto.img}" alt="${producto.titulo}" width="50"></td>
            <td>${producto.titulo}</td>
            <td>${producto.cantidad}</td>
            <td>$${producto.precioUnitario.toFixed(2)}</td>
            <td>$${producto.subtotal.toFixed(2)}</td>
        </tr>
    `;
}
