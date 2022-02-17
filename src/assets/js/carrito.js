//funcion que elimana un articulo del carrito
var $botonesEliminarProducto = document.getElementsByClassName('boton-eliminar'); // guarda todos los elementos con la clase boton-elimanar

//loop para agregar la funcion eliminar, a todos los elementos de clase boton-eliminar
for (var i = 0; i < $botonesEliminarProducto.length; i++) { 
    var boton = $botonesEliminarProducto [i]
    boton.addEventListener('click', (event) => { 
        var botonPresionado = event.target;
        botonPresionado.parentElement.parentElement.remove();
        // actualiza el total del carrito
        actualizarTotalDelCarrito(); 
    });
};

//Variable que guarda la cantidad de cada producto de la tabla
const elementoCantidadDeProducto = document.getElementsByClassName('cantidadDeProducto');

//Funcion que actualiza el precio Total del producto cuando cambia la cantidad de producto
function actualizaPrecioTotal() {

    var $productosEnCarrito = document.getElementsByClassName('productoEnCarrito');
    var elementoPrecioUnitario = document.getElementsByClassName('precioUnitario');
    
    for (var i = 0; i < $productosEnCarrito.length; i++) {
        $cantidadDeProducto = parseInt(elementoCantidadDeProducto[i].value); //parseInt para que solo calcule con cantidad de productos enteros
        
        $precioUnitario = parseFloat(elementoPrecioUnitario[i].innerText); 
               
        var $precioTotal = $cantidadDeProducto * $precioUnitario        

        document.getElementsByClassName('precioTotal')[i].innerText = $precioTotal.toFixed(2)
    }
}

//Funcion que actualiza el total del carrito
function actualizarTotalDelCarrito() {

    var $contenedorDeProductos = document.getElementsByClassName('carritoDeProductos')[0] // guarda el carrito de productos
    var $productosEnCarrito = $contenedorDeProductos.getElementsByClassName('productoEnCarrito'); // guarda todos los elementos con la clase productoEnCarrito
    var $granTotal = 0;

    for (var i = 0; i < $productosEnCarrito.length; i++) {
        var elementoProductoEnCarrito = $productosEnCarrito[i];
        var elementoPrecioUnitario = elementoProductoEnCarrito.getElementsByClassName('precioUnitario')[0];
        var elementoCantidadDeProducto = elementoProductoEnCarrito.getElementsByClassName('cantidadDeProducto')[0];
        $precioUnitario = parseFloat(elementoPrecioUnitario.innerText);
        $cantidadDeProducto = parseInt(elementoCantidadDeProducto.value); //parseInt para que solo calcule con enteros
        $granTotal = $granTotal + ($cantidadDeProducto * $precioUnitario);
    }

    document.getElementsByClassName('granTotal')[0].innerText = $granTotal.toFixed(2)
};


//Funcion que actualiza el total del Carrito y precio total cuando cambia la canatidad de producto
//Pero
//Primero verifica que el input cantidad sea un numero y contiene un numero valido (solo positivos mayores a 0), si no es asi lo cambia a 1 como minimo, 10 como maximo, y actualiza el carrito
function cantidadCambiada(event) {
    var input = event.target;
    parseInt()

    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    } else if (input.value >= 11){
        input.value = 10
    }
    actualizaPrecioTotal()
    actualizarTotalDelCarrito()
}

//loop para agregar el listener de cambio de cantidad a todos los productos del carrito
for (var i = 0; i < elementoCantidadDeProducto.length; i++) {
    var input = elementoCantidadDeProducto[i];
    input.addEventListener('change', cantidadCambiada);
};


//Alertas
document.getElementById("btn-pagar").addEventListener("click", function(){
    Swal.fire({
        title: '<h3>FELICIDADES!</h3>',
        html: '<p>Tu pedido ha sido realizado con éxito<p>',
        icon: 'success',        
        confirmButtonText: 'Aceptar',
        buttonsStyling: false,
        customClass: {
            confirmButton: 'boton-primario'

        },
        timer: 5000,        
        footer: '<p>Serás redirigido a la siguiente página</p>',
        width: "30%",
        height: "80%",
        allowOutsideClick: false,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: false,
        backdrop: true,

    }).then(function() {
        window.location = "resumen.html";
    });
})
