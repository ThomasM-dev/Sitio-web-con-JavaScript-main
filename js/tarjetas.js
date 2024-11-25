let url = "https://fakestoreapi.com/products"

export async function obtenerProductos() {
    try {
    const response = await fetch (url);
    const data = await response.json ();
    return data
    } catch (error) {
        console.log ("Error al obtener los datos de la API", error);
    }
}

export function renderizarProductos (data, productosContenedor) {
    let productosHtml = ""
    data.forEach(producto => {
    productosHtml += estructuraTarjeta (producto);
    });
    productosContenedor.innerHTML = productosHtml;
}


function estructuraTarjeta(producto) {
    return `
    <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
        <div class="tarjetas">
            <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
            <div class="tarjeta_cuerpo">
                <h5 class="tarjeta_titulo">${producto.title}</h5>
                <p class="tarjeta_texto">${producto.description.slice(0, 100)}...</p>
                <p id ="precio-${producto.price}" class="precio">$${producto.price}</p>
                <div>
                    <label for="cantidad-${producto.id}">Cantidad de productos:</label>
                    <input type="number" id="cantidad-${producto.id}" name="cantidad" value="1" min="1" max="100" step="1">
                    <button class= "btn-agregar"  id="agregar-${producto.id}" data-id="${producto.id}">Agregar al carrito</button>
                </div>
            </div>
        </div>
    </div>
    `;
}

export function renderizarButton(data, contadorProductos) {
    const carritoCompras = [];    
    data.forEach(producto => {
        const inputCantidad = document.getElementById(`cantidad-${producto.id}`);
        const buttonAgregar = document.getElementById(`agregar-${producto.id}`);
        const precioProducto = document.getElementById(`precio-${producto.price}`);
        
            buttonAgregar.addEventListener("click", () => {
                // metodo replace borra el valor $, y pone uno nuevo 
                const precio =  parseFloat(precioProducto.textContent.replace('$', ''));
                const cantidad = parseInt(inputCantidad.value);
                const total = precio * cantidad;
                buttonAgregar.textContent = "Agregado"
                // verifica que la cantidad sea mayor a 1
                if (inputCantidad.value < 1) {
                    Swal.fire({
                        icon: "error",
                        title: "Oops...",
                        text: "Ingrese una cantidad mayor a 1",
                    });
                // alert para pedidos mayorista
                } else if (inputCantidad.value > 100) {
                    Swal.fire({
                        title: "¿Necesitas pedidos mayorista?",
                        html : `<button class= "swal2-formulario" onclick="location.href='../index.html#formulario'">Completa el formulario</button>`,
                        showConfirmButton: false,
                    });
                } else {
                    carritoCompras.push(`${producto.title} cantidad: ${cantidad} precioUnitario: ${precio}, total: ${total}`);
                    contadorProductos.textContent = carritoCompras.length;                    
                }
                
                setTimeout (() => {
                buttonAgregar.textContent = "Agregar al carrito"
                }, 1000)
        });
    });
}

