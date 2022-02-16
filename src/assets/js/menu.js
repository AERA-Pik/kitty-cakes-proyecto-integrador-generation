function sweetalertclick() {
    Swal.fire({
        html: 
        '<div class="row container-fluid"><div class="col-12 col-sm-12 col-md-12 col-lg-6"><img class="pop-image" src="assets/img/productos/cupcake-menu4.png" alt=""></div><div class="col-12 col-sm-12 col-md-12 col-lg-6"><div class="card-text"><p><span  class="pop-titulo">Cupcats de chocolate abuelita</span></p><p class="pop-texto">Suave pan de mantequilla con un toque de chocolate abuelita y decorado con buttercream del mismo sabor</p><br><p><span class="pop-precio">$ 20.00</span></p></div></div></div>',
        confirmButtonText: 'Regresar',
        confirmButtonColor: '#FA94A2',
        width: '50%',
        padding: '1%',
        backdrop: 'rgb(239,187,187,0.7)',
        background: 'var(--blanco-kitty);',
        customClass: 'swal-wide'
    })
}

function sweetalertcarrito() {
    Swal.fire({
        icon: 'success',
        html: 
        '<h5 class="pop-carrito">Tu compra se agregó exitosamente al michi carrito</h5>',
        confirmButtonText: 'OK',
        confirmButtonColor: '#FA94A2',
        width: '40%',
        padding: '2%',
        backdrop: 'rgb(239,187,187,0.7)',
        background: 'var(--blanco-kitty);',
        customClass: 'swal-wide'
    })
}

