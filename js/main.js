// DATOS VARIABLES GLOBALES
let cafe = 200;
let tostado = 300;
let capuccino = 250;
let brownie = 350;
let te = 175;
let cantidadDeProductos = 0;
let sumaProductos = 0;
let cantidadCafe = 0
let cantidadTostado = 0
let cantidadCapuccino = 0
let cantidadBrownie = 0
let cantidadTe = 0
let producto;
let cierre;
const descuento = 20;
let total;

//FUNCIONES

function reset() {
    cantidadDeProductos = 0;
    sumaProductos = 0;
    cantidadCafe = 0;
    cantidadTostado = 0;
    cantidadCapuccino = 0;
    cantidadBrownie = 0;
    cantidadTe = 0;
    alert("Indico que su pedido es erroneo, por favor realicelo nuevamente");
    console.log("El pedido ha sido reiniciado el pedido.")
}

function formulaEleccion() {
    eleccion = parseInt(prompt("Usted solicitó: \n" + cantidadCafe + " Café" + "\n" + cantidadTostado + " Tostado" + "\n" + cantidadCapuccino + " Capuccino" + "\n" + cantidadBrownie + " Brownie" + "\n" + cantidadTe + " Té \n \n ¿Es correcto? \n 1- Sí \n 2- No. \n 3- Cancelar pedido. "));
}

function opcionValida() {
    return alert("Elija una opción válida");
}

//SISTEMA DE PEDIDOS PARA COMPRAS DE PRODUCTOS.

do {
    let nombreUsuario = prompt("Ingrese su Nombre");
    if (nombreUsuario != "") {
        alert("Bienvenido " + nombreUsuario + "! ¿Qué producto desea solicitar?")
        producto = parseInt(prompt("Ingrese producto deseado seleccionando número: \n 1-Café \n 2-Tostado \n 3-Capuccino \n 4-Brownie \n 5-Té \n 0- Finalizar"))
        console.log("Nombre del cliente " + nombreUsuario)
        while (producto != 0) {
            switch (producto) {
                case 1:
                    sumaProductos += cafe;
                    cantidadDeProductos++;
                    cantidadCafe++;
                    alert("Usted eligió Café");
                    alert("Tiene solicitados " + cantidadCafe + " pedidos de Café");
                    console.log(cantidadCafe + " Unidades de Café");
                    break;
                case 2:
                    sumaProductos += tostado;
                    cantidadDeProductos++;
                    cantidadTostado++;
                    alert("Usted eligió Tostado");
                    alert("Tiene solicitados " + cantidadTostado + " pedidos de Tostado");
                    console.log(cantidadTostado + " Unidades de Tostado");
                    break;
                case 3:
                    sumaProductos += capuccino;
                    cantidadDeProductos++;
                    cantidadCapuccino++;
                    alert("Usted eligió Capuccino");
                    alert("Tiene solicitados " + cantidadCapuccino + " pedidos de Capuccino");
                    console.log(cantidadCapuccino + " Unidades de Capuccino");
                    break;
                case 4:
                    sumaProductos += brownie;
                    cantidadDeProductos++;
                    cantidadBrownie++;
                    alert("Usted eligió Brownie");
                    alert("Tiene solicitados " + cantidadBrownie + " pedidos de Brownie");
                    console.log(cantidadBrownie + " Unidades de Brownie");
                    break;
                case 5:
                    sumaProductos += te;
                    cantidadDeProductos++;
                    cantidadTe++;
                    alert("Usted eligió Té");
                    alert("Tiene solicitados " + cantidadTe + " pedidos de Té");
                    console.log(cantidadTe + " Unidades de Té");
                    break;
                default: opcionValida();
                    console.log("Eligió una opción inválida");
            }
            producto = parseInt(prompt("Ingrese productos adcionales que desee solicitar: \n 1-Café \n 2-Tostado \n 3-Capuccino \n 4-Brownie \n 5-Té \n 0-Salir"))
            if (producto == 0) {
                formulaEleccion();
                while (eleccion != 0) {
                    switch (eleccion) {
                        case 1:
                            alert("Usted solicitó " + cantidadDeProductos + " productos.");
                            console.log("CANTIDAD DE " + cantidadDeProductos + " UNIDADES")
                            if (cantidadDeProductos >= 5) {
                                parseFloat(total = sumaProductos - ((sumaProductos * descuento) / 100).toFixed(2));
                                alert(nombreUsuario + " Usted accederá al % 20 de nuestro descuento.");
                                console.log("Accede al descuento");
                                alert("Deberá abonar un total de $ " + total);
                                console.log("TOTAL A PAGAR: $" + total);
                                alert("¡Gracias por su compra!");
                                console.log("¡GRACIAS POR SU COMPRA!")
                            } else {
                                if (cantidadDeProductos == 0) {
                                    alert("No ha realizado compra.");
                                } else {
                                    total = sumaProductos;
                                    alert("Su monto total a pagar es de $ " + total);
                                    console.log("TOTAL A PAGAR: $" + total);
                                    alert("¡Gracias por su compra!");
                                    console.log("¡GRACIAS POR SU COMPRA!")
                                }
                            }
                            cierre = 1;
                            eleccion = 0;
                            break;
                        case 2:
                            reset();
                            cierre = 2;
                            eleccion = 0;
                            break;
                        case 3:
                            cierre = 1;
                            eleccion = 0;
                            alert("Su pedido ha sido cancelado.")
                            console.log("PEDIDO CANCELADO");
                            break;
                        default:
                            opcionValida()
                            formulaEleccion();
                    }
                }
            }
        } alert("Usted no realizó ningun pedido.")
            console.log("NO REALIZA PEDIDO");
    } else {
        alert("Usted no ingresó un nombre");
        console.log("Eligió una opción inválida");
        cierre = 2;
    }
} while (cierre == 2)