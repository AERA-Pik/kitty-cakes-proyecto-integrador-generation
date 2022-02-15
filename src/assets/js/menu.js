Swal.fire({
    html: 
    '<div class="card"><h5 class="pop-titulo"> Cupcats de chocolate abuelita</h5><br><p class="pop-texto">Suave pan de mantequilla con un toque de chocolate abuelita y decorado con buttercream del mismo sabor</p><br><h5 class="pop-precio">$ 20.00</h5></div>',
    confirmButtonText: '<img class="pop-icono" src="assets/img/logos/logo-simplificado.png" alt="">     Regresar',
    confirmButtonColor: '#FA94A2',
    width: '35%',
    padding: '3rem',
    backdrop: 'rgb(239,187,187,0.7)',
    background: 'var(--blanco-kitty);',
    allowOutsideClick: false,
    imageUrl: 'assets/img/productos/cupcake-menu4.png',
    imageWidth: '15rem',
    customeClass: { 
        // container: 'pop',
        // htmlContainer: 'card',
        image: 'pop-image'
    }
});