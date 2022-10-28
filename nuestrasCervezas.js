let contenedorProductos = document.getElementById("contenedor-productos");

const contenedorCarrito = document.getElementById("carrito-contenedor");

const botonVaciar = document.getElementById("vaciar-carrito");
const contadorCarrito = document.getElementById("contadorCarrito");
const precioTotal = document.getElementById("precioTotal");

let carrito = []

document.addEventListener(`DOMContentLoaded`, () => {
    if(localStorage.getItem(`carrito`)){
        carrito = JSON.parse(localStorage.getItem(`carrito`))
        actualizarCarrito();
    }
})

botonVaciar.addEventListener("click", () => {
    carrito.length = 0
    actualizarCarrito();
    Toastify({
        text: "Carrito Vaciado",                               
        duration: 2200,
        style: {
            background: "linear-gradient(to right, grey, black)",
            }
        }).showToast(); 
})

fetch("../data.json")
.then(response => response.json())
.then( data => {
    data.forEach(producto => {
        const div = document.createElement("div");
        div.classList.add(`producto`);
        div.innerHTML = `
        <img src=${producto.img} alt="">
        <h3>${producto.nombre}</h3>
        <p>${producto.tipo}</p>
        <p>${producto.descripcion}</p>
        <p class="precioProducto">Precio:$${producto.precio}</p>
        <button id="agregar${producto.id}" class="boton-agregar">Agregar <i= class="fas fa-shopping-cart"></i><button>
        `;
        contenedorProductos.appendChild(div);

        const boton = document.getElementById(`agregar${producto.id}`);

        boton.addEventListener("click", () => {
            agregarAlCarrito(producto.id)
        })
    });
    const agregarAlCarrito = (prodId) => {
        const existe = carrito.some(prod => prod.id === prodId);

        if(existe){
            const prod = carrito.map(prod => {
                if(prod.id === prodId){
                    prod.cantidad++
                }
            })
        }else {
            const item = data.find ((prod) => prod.id === prodId)
            carrito.push(item) 
        }
        actualizarCarrito();

        Toastify({
            text: "Producto Agregado al Carrito",                               
            duration: 1500,
            style: {
                background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
            }).showToast(); 
    }
}) 

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1);
    actualizarCarrito();
    Toastify({
        text: "Producto Elimiando del Carrito",                               
        duration: 1500,
        style: {
            background: "red",
            }
        }).showToast(); 
}


const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "";

    carrito.forEach((prod) => {
        const div = document.createElement('div')
        div.className = ('productoEnCarrito')
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio:$${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick="eliminarDelCarrito(${prod.id})" class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `

        contenedorCarrito.appendChild(div);

        localStorage.setItem(`carrito`, JSON.stringify(carrito));
    })
    contadorCarrito.innerText = carrito.length;
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0)
} 