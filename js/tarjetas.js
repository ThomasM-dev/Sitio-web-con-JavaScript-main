let productos = document.getElementById("productos");
let url = 'https://fakestoreapi.com/products';

async function Mostrarproductos() {
    let response = await fetch(url);
    let data = await response.json();
    let productosHTML = `
        <div class="container">
            <div class="row">
    `;

    data.forEach(producto => {
        productosHTML += `
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <div class="tarjetas">
                <img src="${producto.image}" class="card-img-top" alt="${producto.title}">
                <div class="tarjeta_cuerpo">
                    <h5 class="tarjeta_titulo">${producto.title}</h5>
                    <p class="tarjeta_texto">${producto.description.slice(0, 100)}...</p>
                    <p class="precio">$${producto.price}</p>
                    <div>
                    <label for="cantidad">Cantidad de productos:</label>
                    <input type="number" id="cantidad" name="cantidad" value="1" min="1" max="100" step="1">
                    <button id="agregarCarrito">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    });
    productosHTML += `
            </div>
        </div>
    `;
    productos.innerHTML = productosHTML;
}

Mostrarproductos();
