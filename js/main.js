const renderProductos = () => {
    let productosHTML = "";
    productos.forEach(element => {
        productosHTML +=
            `<div class="col-md-4 mb-4 d-flex justify-content-center">
                <div class="card text-center align-items-center border border-secondary" style="width: 18rem;">
                <div class="contenedorImagen">
                    <img src="images/${element.imagen}" class="card-img-top" alt="${element.nombre}">
                    </div>
                    <div class="card-body">
                        <h5 class="card-title">${element.nombre}</h5>
                        <p class="card-text">${element.descripcion}</p>
                        <button class="btn btn-secondary" onClick="agregarAlCarrito(${element.id});">Comprar</button>
                    </div>
                </div>
            </div>`     
    })
    document.getElementById("productos").innerHTML = productosHTML
}

renderProductos(); //Muestra productos en HTML
guardarProductosLS(productos); //Guarda productos en formato String de la Array "Productos"


const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCarrito = () => {
    return JSON.parse(localStorage.getItem("carrito")) || [];
}

const agregarAlCarrito = (id) => {
    const productos = cargarProductosLS();
    const productos_carrito = cargarProductosCarrito();
    const producto = productos.find(element => element.id == id);
    let existe = -1;
    productos_carrito.forEach((el, index) => {
        if (el.id == id) {
            existe = index;
        }
    })
    if (existe == -1) {
        productos_carrito.push(producto);
    } else {
        productos_carrito[existe].cantidad += 1
        productos_carrito[existe].precio = producto.precio * productos_carrito[existe].cantidad
    }
    guardarProductosCarrito(productos_carrito);
    renderProductos_carrito();
}

const quitarDelCarrito = (id) => {
    let productos_carrito = cargarProductosCarrito();
    productos_carrito = productos_carrito.filter((el) => {
        return el.id != id;
    })
    guardarProductosCarrito(productos_carrito)
    renderProductos_carrito()
}

const renderProductos_carrito = () => {
    let totalprecio = 0;
    let cantidadTotal = 0;
    let productosCarritoHTML = "";
    let productos_carrito = cargarProductosCarrito()
    if (productos_carrito.length != 0) {
        productos_carrito.forEach(element => {
            totalprecio += element.precio
            cantidadTotal += element.cantidad
            productosCarritoHTML +=
                `<div class="col-md-4 mb-4 d-flex justify-content-center">
                    <div class="card text-center align-items-center border border-secondary" style="width: 18rem;">
                        <div class="contenedorImagen">
                            <img src="images/${element.imagen}" class="card-img-top" alt="${element.nombre}">
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">${element.nombre}</h5>
                            <p class="card-text">Cantidad pedida: ${element.cantidad}</p>
                            <p class="card-text">Precio: $${element.precio}</p>
                            <button class="btn btn-secondary" onClick="quitarDelCarrito(${element.id});">Quitar</button>
                        </div>
                    </div>
            </div >`
        })
        document.getElementById("carrito").innerHTML = productosCarritoHTML
    } else {
        document.getElementById("carrito").innerHTML = `<p class="carritoVacio">¡Tu carrito está vacio!</p>`
    }

    if (cantidadTotal >= 5) {
        totalprecio = totalprecio - ((totalprecio * 20) / 100)
        document.querySelector(".total").innerHTML = `<span class="enunciadoDescuento">¡Por comprar 5 productos o mas !</span><br>¡Total con 20% descuento: $${totalprecio}!`
    } else {
        document.querySelector(".total").textContent = `Total: $${totalprecio}`
    }
    document.getElementById("contadorCarrito").textContent = cantidadTotal
}

document.addEventListener("DOMContentLoaded", e => (renderProductos_carrito()))

const vaciarCarrito = () => {
    localStorage.removeItem("carrito")
    document.getElementById("carrito").innerHTML = `<p class="carritoVacio">¡Tu carrito está vacio!</p>`
    document.querySelector(".total").textContent = `Total: $${0}`
    document.getElementById("contadorCarrito").textContent = 0
}
let botonVaciarCarrito = document.getElementById("vaciarCarrito")

botonVaciarCarrito.addEventListener("click", e => {
    if (e.target.matches("#vaciarCarrito")) {
        vaciarCarrito()
    }
})


// INGRESAR SESION
let botonIngresar = document.getElementById("ingresar");
botonIngresar.addEventListener("click", validarSesion);

function validarSesion(e) {
    e.preventDefault();
    let nombre = document.getElementById("nombre").value
    let numeroCelular = document.getElementById("numeroCelular").value
    let avisoCampoIncompletoNombre = document.getElementById("campoIncompletoNombre");
    let avisoCampoIncompletoNumero = document.getElementById("campoIncompletoNumber");
    if (nombre == "") {
        avisoCampoIncompletoNombre.innerHTML = "¡Ingrese un nombre en el campo!"
        return false;
    } else {
        avisoCampoIncompletoNombre.innerHTML = ""
    }
    if (numeroCelular == "") {
        avisoCampoIncompletoNumero.innerHTML = "¡Ingrese un número en el campo!"
        return false;
    } else {
        avisoCampoIncompletoNumero.innerHTML = ""
    }
    if (nombre != "" && numeroCelular != "") {
        let sectionIngresado = document.getElementById("sectionIngresado")
        let sectionIngreso = document.getElementById("sectionIngreso")
        sectionIngreso.classList.add("none")
        let ingresePedido = document.getElementById("ingresePedido")
        ingresePedido.innerHTML = `BIENVENIDO <u>${nombre.toUpperCase()}</u> INGRESE SU PEDIDO `
        sectionIngresado.classList.remove("none")
        let cerrarSesion = document.getElementById("cerrarSesion")
        return cerrarSesion;
    }
}
cerrarSesion.addEventListener("click", e => {
    if (e.target.matches("#cerrarSesion")) {
        sectionIngreso.classList.remove("none")
        sectionIngresado.classList.add("none")
    }
})
