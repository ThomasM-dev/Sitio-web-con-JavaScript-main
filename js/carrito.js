export function mostrarCarrito(buttonCarrito, ventanaModal, mensajeCarrito, carritoCompras, tablaProductos) {
    buttonCarrito.addEventListener("click", () => {
        if (carritoCompras.length === 0) {
            mensajeCarrito.textContent = "El carrito está vacío";
            tablaProductos.innerHTML = "";
        } else {
            let total = 0;
            mensajeCarrito.textContent = "";
            let renderizarProductos = "";
            carritoCompras.forEach((producto, index) => {
                renderizarProductos += productosCarrito(producto, index, producto.subtotal);
                total += producto.subtotal;
            });
            renderizarProductos += `
                <tr>
                    <td colspan="5">Total</td>
                    <td>$${total.toFixed(2)}</td>
                </tr>
            `;
            tablaProductos.innerHTML = renderizarProductos;
        }
        ventanaModal.style.display = "flex";
        const btnEliminar = document.getElementById ("btn-eliminarProducto")
        removerProducto (carritoCompras, btnEliminar);
    });
}

export function cerrarCarrito(buttonCerrar, ventanaModal) {
    buttonCerrar.addEventListener("click", () => {
        ventanaModal.style.display = "none";
    });
}

function productosCarrito(producto, index, subtotal) {
    return `
        <tr>
            <td>${index + 1}</td>
            <td><img src="${producto.img}" alt="${producto.titulo}" width="50"></td>
            <td>${producto.titulo}</td>
            <td>${producto.cantidad}</td>
            <td><button id="btn-eliminarProducto"><i class="bi bi-trash3"></i></button></td>
            <td>$${producto.precioUnitario}</td>
            <td>$${subtotal}</td>
        </tr>
    `;
}

function removerProducto (carritoCompras,btnEliminar) {
btnEliminar.addEventListener ("click", () => {
        Swal.fire({
            title: "¿Estas que deseas eliminarlo?",
            icon: "question",
            iconHtml: "؟",
            confirmButtonText: "SI",
            cancelButtonText: "NO",
            showCancelButton: true,
            showCloseButton: true
        }).then ((result) => {
            if (result.isConfirmed) {
                
            }
        })
    })
}