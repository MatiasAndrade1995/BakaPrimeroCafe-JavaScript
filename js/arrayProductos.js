const productos = [

    { id: 1, nombre: "Café Kinder", precio: 300, cantidad: 1, imagen: "lateconkinder.jpeg", descripcion: "" },
    { id: 2, nombre: "Café Arabe", precio: 200, cantidad: 1, imagen: "cafe.jpeg", descripcion: "" },
    { id: 3, nombre: "Café con tostado cheddar", precio: 400, cantidad: 1, imagen: "lomitoahumadoycafe.jpg", descripcion: "" },
    { id: 4, nombre: "Cookie Chocolate", precio: 150, cantidad: 1, imagen: "cookieChocolate.jpeg", descripcion: "" },
    { id: 5, nombre: "Cookie Rocklet", precio: 150, cantidad: 1, imagen: "cookieRocklets.jpeg", descripcion: "" },
    { id: 6, nombre: "Cookie Chips", precio: 150, cantidad: 1, imagen: "cookie.jpeg", descripcion: "" },
    { id: 7, nombre: "Tarta Mixta", precio: 250, cantidad: 1, imagen: "tartas.jpg", descripcion: "" },
    { id: 8, nombre: "Brownie de Chocolate", precio: 170, cantidad: 1, imagen: "brownie.jpeg", descripcion: "" },
    { id: 9, nombre: "Tarta de Queso", precio: 250, cantidad: 1, imagen: "tartaQueso.jpeg", descripcion: "" },
    { id: 10, nombre: "Postre Mouse", precio: 350, cantidad: 1, imagen: "postres.jpg", descripcion: "" },
    { id: 11, nombre: "Helado", precio: 250, cantidad: 1, imagen: "helado.jpeg", descripcion: "" },
    { id: 12, nombre: "Licuado", precio: 230, cantidad: 1, imagen: "licuado.jpeg", descripcion: "" }

]

const guardarProductosLS = (productos) => {
    localStorage.setItem("productos", JSON.stringify(productos));
}

const cargarProductosLS = () => {
    return JSON.parse(localStorage.getItem("productos")) || [];
}
