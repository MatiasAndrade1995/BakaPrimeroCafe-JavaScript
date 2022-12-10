
const productos = [

    { id: 1, nombre: "Cafe Kinder", precio: 300, cantidad: 0 },
    { id: 2, nombre: "Cafe Arabe", precio: 200, cantidad: 0 },
    { id: 3, nombre: "Cafe Tostado Cheddar", precio: 400, cantidad: 0 },
    { id: 4, nombre: "Cookie Chocolate", precio: 150, cantidad: 0 },
    { id: 5, nombre: "Cookie Rocklet", precio: 150, cantidad: 0 },
    { id: 6, nombre: "Cookie Chips", precio: 150, cantidad: 0 },
    { id: 7, nombre: "Porcion Tarta Mixta", precio: 250, cantidad: 0 },
    { id: 8, nombre: "Porcion Brownie Chocolate", precio: 170, cantidad: 0 },
    { id: 9, nombre: "Porcion TartaQueso", precio: 250, cantidad: 0 },
    { id: 10, nombre: "Postre Mouse de Limon Chocolate", precio: 350, cantidad: 0 },
    { id: 11, nombre: "Postre Helado", precio: 250, cantidad: 0 },
    { id: 12, nombre: "Postre Licuado", precio: 230, cantidad: 0 }

]

const descuento = 20;
let tipoProducto;
let producto;
let eleccion = 0;
let total = 0;
let precioTotal = 0;
let totalConDescuento = 0;
let cierre;
let solicito = 0;

function eleccionCafe(productos) {
    let producto;
    const cafesFiltrados = productos.filter((element) => element.nombre.includes("Cafe"))
    console.log(cafesFiltrados)
    let cafeDatos = "Opciones \n"
    cafesFiltrados.forEach((cafe, indice) => {
        cafeDatos += `${indice + 1} - ${cafe.nombre} - Valor $${cafe.precio} \n`
    })
    producto = parseInt(prompt((cafeDatos) + "0- Salir"))
    return producto;
}

function eleccionCafeAgregar(productos) {
    let producto;
    const cafesFiltro = productos.filter((cafe) => cafe.nombre.includes("Cafe"))
    console.log(cafesFiltro)
    let cafeDatos = "¿Desea agregar otra opción? \n"
    cafesFiltro.forEach((cafe,indice) => {
        cafeDatos += `${indice + 1} - ${cafe.nombre} - Valor $${cafe.precio} \n`
    })
    producto = parseInt(prompt((cafeDatos) + "0- Salir"))
    return producto;
}

function eleccionCookie(productos) {
    let producto;
    const cookiesFiltro = productos.filter((cookie) => cookie.nombre.includes("Cookie"))
    console.log(cookiesFiltro)
    let cookieDatos = "Opciones \n"
    cookiesFiltro.forEach((cookie,indice) => {
        cookieDatos += `${indice + 1} - ${cookie.nombre} - Valor $${cookie.precio} \n`
    })
    producto = parseInt(prompt((cookieDatos) + "0- Salir"))
    return producto;
}
function eleccionCookieAgregar(productos) {
    let producto;
    const cookiesFiltro = productos.filter((cookie) => cookie.nombre.includes("Cookie"))
    console.log(cookiesFiltro)
    let cookieDatos = "¿Desea agregar otra opción? \n"
    cookiesFiltro.forEach((cookie,indice) => {
        cookieDatos += `${indice + 1} - ${cookie.nombre} - Valor $${cookie.precio} \n`
    })
    producto = parseInt(prompt((cookieDatos) + "0- Salir"))
    return producto;
}

function eleccionPorcion(productos) {
    let producto;
    const porcionesFiltro = productos.filter((porcion) => porcion.nombre.includes("Porcion"))
    console.log(porcionesFiltro)
    let porcionDatos = "Opciones \n"
    porcionesFiltro.forEach((porcion,indice) => {
        porcionDatos += `${indice + 1} - ${porcion.nombre} - Valor $${porcion.precio} \n`
    })
    producto = parseInt(prompt((porcionDatos) + "0- Salir"))
    return producto;
}

function eleccionPorcionAgregar(productos) {
    let producto;
    const porcionFiltro = productos.filter((porcion,indice) => porcion.nombre.includes("Porcion"))
    console.log(porcionFiltro)
    let porcionDatos = "¿Desea agregar otra opción? \n"
    porcionFiltro.forEach((porcion,indice) => {
        porcionDatos += `${indice + 1} - ${porcion.nombre} - Valor $${porcion.precio} \n`
    })
    producto = parseInt(prompt((porcionDatos) + "0- Salir"))
    return producto;
}

function eleccionPostre(productos) {
    let producto;
    const postresFiltro = productos.filter((postre) => postre.nombre.includes("Postre"))
    console.log(postresFiltro)
    let postreDatos = "Opciones \n"
    postresFiltro.forEach((postre,indice) => {
        postreDatos += `${indice + 1} - ${postre.nombre} - Valor $${postre.precio} \n`
    })
    producto = parseInt(prompt((postreDatos) + "0- Salir"))
    return producto;
}

function eleccionPostreAgregar(productos) {
    let producto;
    const postresFiltro = productos.filter((postre) => postre.nombre.includes("Postre"))
    console.log(postresFiltro)
    let postreDatos = "¿Desea agregar otra opción? \n"
    postresFiltro.forEach((postre,indice) => {
        postreDatos += `${indice + 1} - ${postre.nombre} - Valor $${postre.precio} \n`
    })
    producto = parseInt(prompt((postreDatos) + "0- Salir"))
    return producto;
}
function cantidadDeProductos(productos) {
    let totalProductos = 0
    productos.forEach(element => {
        totalProductos += element.cantidad;
    })
    return totalProductos;
}

function listaProductos(productos) {
    let eleccion = 0;
    let cantidadPedida = 'Usted solicitó: \n';
    productos.forEach(element => {
        if (element.cantidad > 0) {
            cantidadPedida += `${element.nombre} : ${element.cantidad} \n`
        }
    });
    alert(cantidadPedida)
    eleccion = parseInt(prompt("¿Es correcto ?\n 1 - Sí \n 2 - No.\n 3 - Cancelar pedido."));
    return eleccion
}


function costoTotal(producto) {
    let totalPrecio = 0;
    productos.forEach(element => {
        totalPrecio += element.cantidad * element.precio;
        console.log(totalPrecio)
    });
    return totalPrecio;
}

function reset(productos) {
    productos.forEach(element => { element.cantidad = 0; })
    alert("Realice su pedido nuevamente");
}

function opcionValida() {
    return alert("Elija una opción válida");
}

do {
    let nombreUsuario = prompt("Ingrese su Nombre");
    if (nombreUsuario != "") {
        alert("Bienvenido " + nombreUsuario + "! ¿Qué producto desea solicitar?")
        console.log("Nombre del cliente " + nombreUsuario)
        do {
            tipoProducto = parseInt(prompt("Ingrese que tipo de producto desea seleccionando el la opción: \n 1-Café \n 2-Cookies \n 3-Porciones \n 4-Postres \n 0- Salir"))
            if ((tipoProducto > 4 || tipoProducto < 0)) {
                opcionValida();
                console.log("Eligió una opción inválida");
            }
        } while (tipoProducto > 4 || tipoProducto < 0)
        while (tipoProducto != 0) {
            solicito = 1
            switch (tipoProducto) {
                case 1: do {
                    producto = eleccionCafe(productos);
                    if (producto > 3 || producto < 0 || isNaN(producto)) {
                        opcionValida();
                        console.log("Eligió una opción inválida");
                    }
                } while (producto > 3 || producto < 0 || isNaN(producto))
                    while (producto != 0 && producto < 4 ) {
                        productos[producto - 1].cantidad += 1;
                        producto = eleccionCafeAgregar(productos); 
                    } 
                    break;
                case 2: do {
                    producto = eleccionCookie(productos);
                    if (producto > 3 || producto < 0 || isNaN(producto)) {
                        opcionValida();
                        console.log("Eligió una opción inválida");
                    }
                } while (producto > 3 || producto < 0 || isNaN(producto))
                    while (producto != 0 && producto < 4) {
                        productos[producto + 2].cantidad += 1;
                        producto = eleccionCookieAgregar(productos);
                    }
                    break;
                case 3: do {
                    producto = eleccionPorcion(productos);
                    if (producto > 3 || producto < 0 || isNaN(producto)) {
                        opcionValida();
                        console.log("Eligió una opción inválida");
                    }
                } while (producto > 3 || producto < 0 || isNaN(producto))
                    while (producto != 0 && producto < 4) {
                        productos[producto + 5].cantidad += 1;
                        producto = eleccionPorcionAgregar(productos)
                    }
                    break;
                case 4: do {
                    producto = eleccionPostre(productos);
                    if (producto > 3 || producto < 0 || isNaN(producto)) {
                        opcionValida();
                        console.log("Eligió una opción inválida");
                    }
                } while (producto > 3 || producto < 0 || isNaN(producto))
                    while (producto != 0 && producto < 4) {
                        productos[producto + 8].cantidad += 1;
                        producto = eleccionPostreAgregar(productos)
                    }
                    break;
                default: opcionValida();
                    console.log("Eligió una opción inválida");
            } do {
                tipoProducto = parseInt(prompt("Ingrese productos adicionales que desee solicitar: \n 1-Café \n 2-Cookies \n 3-Porciones \n 4-Postres \n 0- Finalizar"))
                if ((tipoProducto > 4 || tipoProducto < 0)) {
                    opcionValida();
                    console.log("Eligió una opción inválida");
                }
            } while (tipoProducto > 4 || tipoProducto < 0)
            if (tipoProducto == 0) {
                eleccion = listaProductos(productos);
                while (eleccion != 0) {
                    switch (eleccion) {
                        case 1:
                            total = cantidadDeProductos(productos)
                            precioTotal = costoTotal(productos)
                            if (total >= 5) {
                                totalConDescuento = precioTotal - parseFloat((precioTotal * descuento) / 100).toFixed(2);
                                alert(nombreUsuario + " solicitó " + total + " productos.")
                                alert(" Usted accederá al % 20 de nuestro descuento.");
                                console.log("Accede al descuento");
                                alert("Deberá abonar un total de $ " + totalConDescuento);
                                console.log("TOTAL A PAGAR: $" + totalConDescuento);
                                alert("¡Gracias por su compra!");
                                console.log("¡GRACIAS POR SU COMPRA!")
                            } else {
                                if (total == 0) {
                                    alert("No ha realizado compra.");
                                } else {
                                    alert(nombreUsuario + " " + "solicitó " + total + " productos.")
                                    alert("Su monto total a pagar es de $ " + precioTotal);
                                    console.log("TOTAL A PAGAR: $" + precioTotal);
                                    alert("¡Gracias por su compra!");
                                    console.log("¡GRACIAS POR SU COMPRA!")
                                }
                            }
                            cierre = 1;
                            eleccion = 0;
                            break;
                        case 2:
                            reset(productos);
                            eleccion = 0;
                            cierre = 2;
                            break;
                        case 3:
                            cierre = 1;
                            eleccion = 0;
                            alert("Su pedido ha sido cancelado.")
                            console.log("PEDIDO CANCELADO");
                            break;
                        default:
                            opcionValida()
                            eleccion = listaProductos(productos);
                    }
                }
            }
        }
        if (solicito === 0) {
            alert("Usted no solicitó ninguno producto")
        }
    } else {
        alert("Usted no ingresó un nombre");
        console.log("Eligió una opción inválida");
        cierre = 2;
    }
} while (cierre == 2)

