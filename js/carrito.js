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
                    <td colspan="6">Total</td>
                    <td>$${total.toFixed(2)}</td>
                </tr>
            `;
            tablaProductos.innerHTML = renderizarProductos;
            guardarLocalStorage (carritoCompras)
        }
        ventanaModal.style.display = "flex";
        // delegacion de eventos
        tablaProductos.addEventListener("click", (event) => {
            // Verifica si el clic fue en un botón de eliminación
            if (event.target && event.target.matches(".btn-eliminarProducto")) {
                const index = event.target.getAttribute("data-index");
                removerProducto(carritoCompras, index, contadorProductos, tablaProductos);
            }
        });
    });
}

export function cerrarCarrito(btnSeguirComprando, ventanaModal) {
    btnSeguirComprando.addEventListener("click", () => {
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
            <td><button class="btn-eliminarProducto" data-index="${index}"><i class="bi bi-trash3"></i></button></td>
            <td>$${producto.precioUnitario}</td>
            <td>$${subtotal}</td>
        </tr>
    `;
}


function removerProducto(carritoCompras, index, contadorProductos, tablaProductos) {
    Swal.fire({
        title: "¿Estás seguro que deseas eliminarlo?",
        icon: "question",
        iconHtml: "؟",
        confirmButtonText: "SI",
        cancelButtonText: "NO",
        showCancelButton: true,
        showCloseButton: true
    }).then((result) => {
        if (result.isConfirmed) {
            carritoCompras.splice(index, 1);  // eliminamos el producto usando el índice
            actualizarCarrito(carritoCompras, contadorProductos, tablaProductos); // actualizar el carrito
            guardarLocalStorage (carritoCompras)
        }
    });
}

function actualizarCarrito (carritoCompras, contadorProductos, tablaProductos) {
    let total = 0;
    let renderizarProductos = ""
    carritoCompras.forEach ((producto, index) => {
        renderizarProductos += productosCarrito (producto, index, producto.subtotal)
        total += producto.subtotal
    })
    renderizarProductos += `
    <tr>
        <td colspan="6">Total</td>
        <td>$${total.toFixed(2)}</td>
    </tr>
    `;
    tablaProductos.innerHTML = renderizarProductos;

    // actualizar el contador de productos
    contadorProductos.textContent = carritoCompras.length;
}

export function finalizarPedido(carritoCompras, btnFinalizarPedido) {
    btnFinalizarPedido.addEventListener ("click", () => {
        if (carritoCompras.length >= 1) {
            Swal.fire({
                icon: "success",
                title: "¡Pedido finalizado con éxito!",
                html: `<a class="swal2-formulario" href="../pages/simulacion_pago.html" target="_blank" id="ir-a-pagar">Ir a pagar</a>`,
                showConfirmButton: false,
            });
        
            // Eliminar el carrito de compras del localStorage
            localStorage.removeItem("carritoCompras");
        
            // Agregar un evento de clic al enlace "Ir a pagar"
            document.getElementById('ir-a-pagar').addEventListener('click', function() {
                // Ejecutar el setTimeout después de que el usuario haga clic en "Ir a pagar"
                setTimeout(() => {
                    location.reload(); // Recarga la página
                    actualizarCarrito(carritoCompras, contadorProductos, tablaProductos);
                }, 2000);
            });
        }        
         else {
            Swal.fire ({
                title: "Oops el carrito esta vacio",
                text: "Ingrese al menos un producto para continuar",
                icon: "error"
              });
            }
        })
    }

const guardarLocalStorage = (carritoCompras) => localStorage.setItem("carritoCompras", JSON.stringify(carritoCompras));


