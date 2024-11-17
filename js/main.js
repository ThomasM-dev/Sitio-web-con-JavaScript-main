let productos = document.getElementById("productos");
let url = 'https://fakestoreapi.com/products';

async function Mostrarproductos() {
    let response = await fetch(url);
    let data = await response.json();
    let productosHTML = '';
    data.forEach(producto => {
    let imagen = producto.image;
    productosHTML += `<div class="container lista-productos">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p>Price: $${producto.price}</p>
            <img src="${imagen}" class = "img-fluid" alt="">
        </div>`;
    });
    productos.innerHTML = productosHTML;
}

Mostrarproductos();
