let productos = document.getElementById("productos");
let url = 'https://api.escuelajs.co/api/v1/products';

async function Mostrarproductos() {
    let response = await fetch(url);
    let data = await response.json();
    let productosLimitados = data.slice (0, 30)
    console.log(productosLimitados);
    let productosHTML = '';
    productosLimitados.forEach(producto => {
    let imagen = producto.images[2];
    productosHTML += `<div class="container">
            <h3>${producto.title}</h3>
            <p>${producto.description}</p>
            <p>Price: $${producto.price}</p>
            <img src="${imagen}" alt="">
        </div>`;
    });
    productos.innerHTML = productosHTML;
}

Mostrarproductos();
