// CLASES
class Producto {
    constructor(nombre, descripcion, precio) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
    }
}

const crossaint = new Producto("Crossaint", "Crossaint de jamon y queso", 250);
const medialuna = new Producto("Medialuna","Medialuna de grasa", 110);
const pan = new Producto("Pan","1kg de pan", 250);
const cafe = new Producto("Cafe","Cafe negro", 300);
const muffin = new Producto("Muffin","Muffin de chocolate", 350);
const batido = new Producto("Batido","Batido de frutilla", 400);
const tostado = new Producto("Tostado","Tostado de JyQ", 350);
const sandMiga = new Producto("Sandwich de miga","Sandwich de JyQ", 250);

const productos = [crossaint, medialuna, pan, cafe, muffin, batido, tostado, sandMiga];

// FUNCIONES

function pushCarrito(producto) {
    carrito.push(producto);
    console.log(carrito);
}

function popCarrito(producto) {
    carrito.pop(carrito.producto);
    console.log(carrito);
}


const carrito = [];

// CONTENEDOR DE PRODUCTOS

const contenedorProductos = document.getElementById("contenedorProductos");

function cargarProductos() {
    productos.forEach((producto, index) => {
        let col3 = document.createElement("div");
        col3.className = "col-3";
        let card = document.createElement("div");
        card.className = "card";
        card.style.width = "18rem";
        col3.appendChild(card);
        let ancho = 298 + index;
        let alto = 198 + index;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/${ancho}/${alto}`;
        img.className = "card-img-top";
        img.alt = "...";
        card.appendChild(img);
        let cardBody = document.createElement("div");
        cardBody.className = "card-body text-center";
        card.appendChild(cardBody);
        let cardTitle = document.createElement("h5");
        cardTitle.className = "card-title";
        cardTitle.innerText = producto.nombre;
        cardBody.appendChild(cardTitle);
        let cardText = document.createElement("p");
        cardText.className = "card-text";
        cardText.innerText = `${producto.descripcion}`;
        cardBody.appendChild(cardText);
        let cardText2 = document.createElement("p");
        cardText2.innerText = `$${producto.precio}`;
        cardBody.appendChild(cardText2);
        let sectionBtn = document.createElement("div");
        sectionBtn.className = "d-flex justify-content-between"
        cardBody.appendChild(sectionBtn);
        let btn = document.createElement("a");
        btn.className = "btn btn-primary";
        btn.innerText = "Agregar al carrito";
        btn.onclick = () => pushCarrito(producto.nombre || producto.descripcion || producto.precio);
        sectionBtn.appendChild(btn);
        let btn2 = document.createElement("a");
        btn2.className = "btn btn-primary";
        btn2.innerText = "Quitar producto";
        sectionBtn.appendChild(btn2);
        btn2.onclick = () => popCarrito(producto);
        contenedorProductos.appendChild(col3);
    })
}

localStorage.setItem("Producto", JSON.stringify(productos));

// CONTENEDOR CARRITO
// EN CONSTRUCCIÓN TODAVÍA NO ESTA YA VA A ESTAR LISTA PARA LA PRÓXIMA ENTREGA CON JSON

/*
const contenedorCarrito = document.getElementById("contenedorCarrito")

function cargarCarrito() {
    carrito.forEach((producto, index) => {
        let carritoCardBody = document.createElement("div");
        carritoCardBody.className = "card-body p-4";
        let productoImagen = document.createElement("div");
        productoImagen.className = "row d-flex justify-content-between align-items-center";
        carritoCardBody.appendChild(productoImagen);
        let cardBodySize = document.createElement("div");
        cardBodySize.className = "col-md-12 col-lg-12 col-xl-4";
        carritoCardBody.appendChild(cardBodySize);
        let ancho = 298 + index;
        let alto = 198 + index;
        let img = document.createElement("img");
        img.src = `https://picsum.photos/${ancho}/${alto}`
        img.className = "img-fluid rounded-3"
        img.alt = "...";
        cardBodySize.appendChild(img);
        let cardTitle = document.createElement("div");
        cardTitle.className = "col-md-3 col-lg-3 col-xl-3";
        carritoCardBody.appendChild(cardTitle);
        let cardProducto = document.createElement("p");
        cardTitle.className = "lead fw-normal mb-2";
        cardProducto.innerText = `${carrito.nombre}`;
        cardTitle.appendChild(cardProducto);
        let cardDescription = document.createElement("p");
        cardDescription.innerText = `${carrito.descripcion}`;
        cardTitle.appendChild(cardDescription)
        let sectionBtn = document.createElement("div");
        sectionBtn.className = "card-body p-2";
        carritoCardBody.appendChild(sectionBtn);
        let btn = document.createElement("button");
        btn.className = "btn btn-primary col-sm-3";
        btn.innerText = "Comprar";
        btn.onclick = () => comprar();
        sectionBtn.appendChild(btn);
        let btn2 = document.createElement("button");
        btn2.className = "btn btn-secondary col-sm-3";
        btn2.innerText = "Vaciar del carrito";
        btn2.onclick = () => popCarrito(carrito);
        sectionBtn.appendChild(btn2);

        contenedorCarrito.appendChild(carritoCardBody);
    })
}

*/