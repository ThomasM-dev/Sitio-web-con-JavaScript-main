let url = "https://fakestoreapi.com/products";

export async function obtenerProductos() {
    try {
        const response = await fetch(url);
        const data = await response.json ()
        return data;
    } catch (error) {
        console.error("Error al obtener productos:", error);
    }
}


export async function renderizarProductos(data, productosContenedor) {
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
                    <label for="cantidad-${producto.id}">Cantidad de productos:</label>
                    <input type="number" id="cantidad-${producto.id}" name="cantidad" value="1" min="1" max="100" step="1">
                    <button id="agregar-${producto.id}" data-id="${producto.id}">Agregar al carrito</button>
                    </div>
                </div>
            </div>
        </div>
        
        `;
        productosContenedor.innerHTML = productosHTML;

        function ButtonEvento () {
            let inputCantidad = document.getElementById ( `cantidad-${producto.id}`)
            let buttonAgregar = document.getElementById (`agregar-${producto.id}`)
            console.log(inputCantidad);   
            console.log(buttonAgregar);
            
        }

        ButtonEvento ();
    });
    productosHTML += `
        </div>
    </div>
    `;

};