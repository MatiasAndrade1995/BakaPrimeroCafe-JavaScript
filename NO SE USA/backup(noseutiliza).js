// DATOS
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



do {
    let nombreUsuario = prompt("Ingrese su Nombre");
    if (nombreUsuario != "") {
        alert("Bienvenido " + nombreUsuario + "! ¿Qué producto desea solicitar?")
        producto = parseInt(prompt("Ingrese producto deseado seleccionando número: \n 1-Café \n 2-Tostado \n 3-Capuccino \n 4-Brownie \n 5-Té \n 0-Salir"))
        while (producto != 0) {
            switch (producto) {
                case 1:
                    sumaProductos += cafe;
                    cantidadDeProductos++;
                    cantidadCafe++;
                    alert("Usted eligió Café");
                    alert("Tiene solicitados " + cantidadCafe + " pedidos de Café");
                    break;
                case 2:
                    sumaProductos += tostado;
                    cantidadDeProductos++;
                    cantidadTostado++;
                    alert("Usted eligió Tostado");
                    alert("Tiene solicitados " + cantidadTostado + " pedidos de Tostado");
                    break;
                case 3:
                    sumaProductos += capuccino;
                    cantidadDeProductos++;
                    cantidadCapuccino++;
                    alert("Usted eligió Capuccino");
                    alert("Tiene solicitados " + cantidadCapuccino + " pedidos de Capuccino");
                    break;
                case 4:
                    sumaProductos += brownie;
                    cantidadDeProductos++;
                    cantidadBrownie++;
                    alert("Usted eligió Brownie");
                    alert("Tiene solicitados " + cantidadBrownie + " pedidos de Brownie");
                    break;
                case 5:
                    sumaProductos += te;
                    cantidadDeProductos++;
                    cantidadTe++;
                    alert("Usted eligió Té");
                    alert("Tiene solicitados " + cantidadTe + " pedidos de Té");
                    break;
                default: alert("Elija una opción válida");
            }
            producto = parseInt(prompt("Ingrese producto adicionales que desee solicitar: \n 1-Café \n 2-Tostado \n 3-Capuccino \n 4-Brownie \n 5-Té \n 0-Salir"))
            if (producto == 0) {
                cierre = parseInt(prompt("Usted solicitó: \n" + cantidadCafe + " Café" + "\n" + cantidadTostado + " Tostado" + "\n" + cantidadCapuccino + " Capuccino" + "\n" + cantidadBrownie + " Brownie" + "\n" + cantidadTe + " Té \n \n ¿Es correcto? \n 1- Sí \n 2-No."));
                if (cierre == 1) {
                    alert("Usted solicitó " + cantidadDeProductos + " productos.");
                    if (cantidadDeProductos >= 5) {
                        parseFloat(total = sumaProductos - ((sumaProductos * descuento) / 100).toFixed(2));
                        alert(nombreUsuario + " Usted accederá al %20 de nuestro descuento.");
                        alert("Usted debe abonar un total de $ " + total)
                        alert("¡Gracias por su compra!")
                    } else {
                        if (cantidadDeProductos == 0) {
                            alert("Usted es un mal tipo, no compró nada.")
                        } else {
                            total = sumaProductos;
                            alert("Su monto total a pagar es de $ " + total);
                            alert("¡Gracias por su compra!")
                        }
                    }
                } else {
                    cantidadDeProductos = 0;
                    sumaProductos = 0;
                    cantidadCafe = 0
                    cantidadTostado = 0
                    cantidadCapuccino = 0
                    cantidadBrownie = 0
                    cantidadTe = 0
                    alert("Realiza nuevamente su pedido")
                }
            }
        }
    } else {
        alert("Usted no ingresó un nombre")
    }

} while (cierre == 2)