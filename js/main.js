//VARIABLES
const $sectionIngresado = document.getElementById("sectionIngresado");
const $sectionIngreso = document.getElementById("sectionIngreso");
const $carrito = document.getElementById("carrito");
const $contadorCarrito = document.getElementById("contadorCarrito");
const $total = document.querySelector(".total");
const $spinnerCarga = document.querySelector(".text-center");
let productos;
//FUNCIONES

const getAllProductos = async () => {
    try {
        let res = await fetch("js/productos.json");
        let json = await res.json();
        if (res.ok == false) throw res;
        productos = json.productos
    } catch (error) {
        console.log(error.statu)
    }
}


const renderProductos = () => {
    setTimeout(() => {
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
    }, 1250)
}
const guardarProductosCarrito = (productos) => {
    localStorage.setItem("carrito", JSON.stringify(productos));
}

const cargarProductosCarrito = () => JSON.parse(localStorage.getItem("carrito")) || []; //const "nombre de la función" = () => valor a retonar; Return implícito sin utilizar llaves ({}) en una sola linea de código.

const elseExiste = (productos_carrito, existe,producto) => {
    productos_carrito[existe].cantidad += 1
    productos_carrito[existe].precio = producto.precio * productos_carrito[existe].cantidad
}




const agregarAlCarrito = (id) => {
    const productos_carrito = cargarProductosCarrito();
    const producto = productos.find(element => element.id == id);
    
    let existe = -1;
    productos_carrito.forEach((el, index) => {
        if (el.id == id) {
            existe = index;
        }
    })
    existe == -1 ? productos_carrito.push(producto) : elseExiste(productos_carrito, existe, producto);
    guardarProductosCarrito(productos_carrito);
    renderProductos_carrito();
}

const renderProductos_carrito = () => {
    let totalprecio = 0;
    let cantidadTotal = 0;
    let productosCarritoHTML = "";
    let descuentoProductos = () => {
        totalprecio -= ((totalprecio * 20) / 100)
        $total.innerHTML = `<span class="enunciadoDescuento">¡Por comprar 5 productos o mas !</span><br>¡Total con 20% descuento: $${totalprecio}!`
    }
    const productos_carrito = cargarProductosCarrito()
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
        $carrito.innerHTML = productosCarritoHTML;
    } else {
        $carrito.innerHTML = `<p class="carritoVacio">¡Tu carrito está vacio!</p>`
    }
    cantidadTotal >= 5 ? descuentoProductos() : $total.textContent = `Total: $${totalprecio}`;
    $contadorCarrito.textContent = cantidadTotal;
}

const quitarDelCarrito = (id) => {
    let productos_carrito = cargarProductosCarrito();
    productos_carrito = productos_carrito.filter((el) => el.id != id);
    guardarProductosCarrito(productos_carrito);
    renderProductos_carrito();
}

const vaciarCarrito = () => {
    localStorage.removeItem("carrito");
    $carrito.innerHTML = `<p class="carritoVacio">¡Tu carrito está vacio!</p>`;
    $total.textContent = `Total: $${0}`;
    $contadorCarrito.textContent = 0;
}

// INGRESAR SESIONCARRIT
function validarSesion(e) {
    e.preventDefault();
    const nombre = document.getElementById("nombre").value;
    const numeroCelular = document.getElementById("numeroCelular").value;
    const $avisoCampoIncompletoNombre = document.getElementById("campoIncompletoNombre");
    const $avisoCampoIncompletoNumero = document.getElementById("campoIncompletoNumber");
    if (nombre == "") {
        $avisoCampoIncompletoNombre.innerHTML = "¡Ingrese un nombre en el campo!"
        return false;
    } else {
        $avisoCampoIncompletoNombre.innerHTML = ""
    }
    if (numeroCelular == "") {
        $avisoCampoIncompletoNumero.innerHTML = "¡Ingrese un número en el campo!"
        return false;
    } else {
        $avisoCampoIncompletoNumero.innerHTML = ""
    }
    if (nombre != "" && numeroCelular != "") {
        $sectionIngreso.classList.add("none")
        $spinnerCarga.classList.remove("none")
        setTimeout(() => {
            $spinnerCarga.classList.add("none")
            const $ingresePedido = document.getElementById("ingresePedido")
            $ingresePedido.innerHTML = `INGRESE SU PEDIDO `
            $sectionIngresado.classList.remove("none")
            Swal.fire({
                position: 'center',
                icon: 'success',
                title: `Bienvenido <u>${nombre.toUpperCase()}</u> a continuación podrá realizar su pedido`,
                width: 400,
                showConfirmButton: false,
                timer: 3000
            })
        }, 1250)
    }
}

//EVENTOS Y DEMAS
document.addEventListener("DOMContentLoaded", async e => {
    await getAllProductos();
    renderProductos_carrito()
    renderProductos(); //Muestra productos en HTML
})

document.addEventListener("click", e => {
    if (e.target.matches("#cerrarSesion")) {
        Swal.fire({
            title: '¿Esta seguró de cerrar sesión?',
            text: "Deberás de completar los campos nuevamente para realizar un pedido.",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Cerrar sesión'
        }).then((result) => {
            if (result.isConfirmed) {
                $sectionIngreso.classList.remove("none");
                $sectionIngresado.classList.add("none");
                document.getElementById("numeroCelular").value = "";
                document.getElementById("nombre").value = "";
                vaciarCarrito();
            }
        })
    }
    if (e.target.matches("#vaciarCarrito")) {
        let cantidadTotal = 0;
        const productos_carrito = cargarProductosCarrito()
        productos_carrito.forEach(element => {
            cantidadTotal += element.cantidad
        })
        if (cantidadTotal > 0) {
            Swal.fire({
                title: '¡Estas seguro de vaciar tu carrito?',
                text: "Este paso no puede ser revertido.",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#59C149',
                cancelButtonColor: '#E05861',
                confirmButtonText: 'Si, quiero vaciar carrito!',
                cancelButtonText: 'Cancelar'
            }).then((result) => {
                if (result.isConfirmed) {
                    Swal.fire(
                        '¡Carrito vaciado!',
                        'Tu carrito ha sido vaciado, esperamos que no te vayas sin comprar &#128542;',
                        'success'
                    )
                    vaciarCarrito();
                }
            })
        } else {
            Swal.fire(
                '¡Carrito vacio!',
                'Tu carrito no tiene productos seleccionados.',
                'info'
            )
        }
    }
    if (e.target.matches("#ingresar")) {
        validarSesion(e);
    }
    if (e.target.matches("#finalizarPedido")) {
        let cantidadTotal = 0;
        const productos_carrito = cargarProductosCarrito()
        productos_carrito.forEach(element => {
            cantidadTotal += element.cantidad
        })
        if (cantidadTotal > 0) {
            let hour = new Date().getHours();
            let minutes = new Date().getMinutes();
            Swal.fire({
                title: '¡Muchas gracias por su compra!',
                text: `${minutes >= 0 && minutes <= 9 ? `${hour}:0${minutes}` : `Pedido realizado a las ${hour}:${minutes}.
                        Métodos de pago enviados por Whatsap al numero ${document.getElementById("numeroCelular").value}`}`,
                imageUrl: './images/logoBakaHeader.png',
                imageWidth: 200,
                imageHeight: 200,
                imageAlt: 'Logo Baka',
            })
            $sectionIngreso.classList.remove("none");
            $sectionIngresado.classList.add("none");
            document.getElementById("numeroCelular").value = "";
            document.getElementById("nombre").value = "";
            vaciarCarrito();
        } else {
            Swal.fire(
                '¡Carrito vacio!',
                'Tu carrito no tiene productos seleccionados.',
                'info'
            )
            cantidadTotal += element.cantidad
        }
    }
})