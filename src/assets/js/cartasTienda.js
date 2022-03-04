const items = document.getElementById("items")
const templateCard = document.getElementById("template-card").content
const fragment = document.createDocumentFragment()
let carrito = {}

document.addEventListener("DOMContentLoaded", () => {
    fetchData()
})

//Se genera el evento con un click en el botóna
items.addEventListener("click", e => {
    addCarrito(e)
})

const fetchData = async () => {
    try {
        const res = await fetch("assets/js/productos-tienda.json") // llamada al api 
        const data = await res.json();
        // console.log(data)  
        pintarCards(data)
    } catch (error) {
        console.log(error);
    }
}

const pintarCards = data => {
    data.forEach(producto => {
        // console.log(producto)
        templateCard.querySelector(".nombre-producto").textContent = producto.nombre_producto
        templateCard.querySelector(".precio").textContent = producto.precio_producto;
        templateCard.querySelector(".box").setAttribute("src", producto.imagen_producto)       
        templateCard.querySelector(".boton-primario").dataset.id = producto.id_producto    
        templateCard.querySelector(".capa").setAttribute("onclick", `sweetalertclick${producto.id_producto}()`)    

        const clone = templateCard.cloneNode(true)
        fragment.appendChild(clone)
    })

    items.appendChild(fragment)    
}


const addCarrito = e => {
    
    //console.log(e.target)  // Probando que se enlazan los elementos a la consola
    //console.log(e.target.classList.contains("boton-primario"))    // Probando que sólo se registra en consola el botón
    if (e.target.classList.contains("boton-primario")) {
        
        //console.log(e.target.parentElement)  //Probando que el botón arroja toda la información del objeto
        setCarrito(e.target.parentElement)
    }
    e.stopPropagation()
}

// Esta función muestra lo que aparece en Carrito, capturando la información de los objetos seleccionados mediante el botón
const setCarrito  = objeto => {
   
    // console.log(objeto)
    const producto = {
        id_producto: objeto.querySelector(".boton-primario").dataset.id,
        nombre_producto: objeto.querySelector(".nombre-producto").textContent,
        // descripcion_producto: objeto.querySelector(".pop-texto").textContent, // corregir esto
        precio_producto: objeto.querySelector(".precio").textContent, 
        imagen_producto: objeto.querySelector(".box").getAttribute("src"),
        cantidad: 1
    }

    //Esta función controla el número de artículos en el carrito
    if (carrito.hasOwnProperty(producto.id_producto)) {
        producto.cantidad = carrito[producto.id_producto].cantidad + 1 
    }

    //Ya que tenemos el objeto seleccionado, hay que empujarlo al carrito con esta función
    //Esto hace una copia de "producto"
    carrito[producto.id_producto] = {...producto}
    //pintarCarrito()
    localStorage.setItem('carrito', JSON.stringify(carrito))
    console.log(carrito)
}