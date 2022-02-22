const items = document.getElementById('items')

const carritoDeProductos = document.getElementById('carritoDeProductos')

const tfooter = document.getElementById('tfooter')

const templateCard = document.getElementById('template-card').content

const templateFooter = document.getElementById('template-footer').content

const templateCarrito = document.getElementById('template-carrito').content

const fragment = document.createDocumentFragment();

let carrito = {}

document.addEventListener('DOMContentLoaded', () => {
    fetchData();
})

items.addEventListener ('click', e => {
        addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch('assets/js/api.json');
        const data = await res.json();
        /* console.log(data); */
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}


const pintarCards = data => {
    data.forEach(producto => {
        templateCard.querySelector('.nombre-producto').
        textContent = producto.nombre_producto;
        templateCard.querySelector('.precio').
        textContent = producto.precio_producto;
        templateCard.querySelector('.box').setAttribute('src', producto.imagen_producto)       
        templateCard.querySelector('.btn-agregar').dataset.id = producto.id_producto;
        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    });

    items.appendChild(fragment)
    
}

const addCarrito = e => {
    /* console.log(e.target) */
    /* console.log(e.target.classList.contains('btn-agregar')) */
    if (e.target.classList.contains('btn-agregar')) {
        
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

const setCarrito = objeto => {
    console.log(objeto)  
    const producto = {
        id: objeto.querySelector('.btn-agregar').dataset.id,
        
        title: objeto.querySelector('.nombre-producto').textContent,
        precio: objeto.querySelector('.precio').textContent,
        cantidad: 1

    }
    if (carrito.hasOwnProperty(producto.id)) {
        producto.cantidad = carrito[producto.id].cantidad + 1
    }

    carrito[producto.id] = {...producto}
    pintarCarrito()

    console.log(carrito)
}

//pintar el carrito en el dom
const pintarCarrito = () => {
    Object.values(carrito).forEach(producto => {
        templateCarrito.querySelector('.nombre-producto').textContent = producto.title
        templateCarrito.querySelector('.precioUnitario').textContent = producto.precio
        const clone = templateCarrito.cloneNode(true)
        fragment.appendChild(clone)
    })

    carritoDeProductos.appendChild()
}