document.getElementById("btn1").addEventListener("click", function(){
    Swal.fire({
        //title: '',
        text: 'Michi',
        html: '<div class="row"><div class="col-12 col-md-6 text-center text-md-right"><img class="imag-producto img-fluid" src="assets/img/productos/destapador.jpg" alt=""></div><div class="col-12 col-md-6 w-100"><div class="row"><div class="col-12 align-self-start text-center text-md-left"><p class="h1 mt-3 mt- mb-3">Michi Destapdor</p></div><div class="col-12 text-center text-md-left align-self-center mb-md-3"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, rem.</p></div><div class="col-12 text-center text-md-left mb-md-3"><p class="precio">$ 169.00</p></div><div class="col-12 text-center text-md-left align-self-end"><button onclick="" class="btn w-auto">Agregar <span class = "d-none d-md-inline"> al carrito</span></button></div></div></div></div></div>',
        // icon:
        // confirmButtonText:
        // footer:
        width: "30%",
        height: "80%",
        // padding:
        //background: `#FFF8FA`,
        //grow: "column",
        //backdrop: `#FA94A2`,
        // timer:
        // timerProgressBar:
        // toast:
        // position:
        allowOutsideClick: true,
        // allowEscapeKey:
        // allowEnterKey:
        // stopKeydownPropagation:
        backdrop: 'rgb(239,187,187,0.7)',
        // input:
        // inputPlaceholder:
        // inputValue:
        // inputOptions:
        
        customClass: {
            //container: 'container'
            popup: 'estilo-pop container',
            // 	header
            //title: 'col-6',
            //closeButton: 'btn',
            // 	icon:
            //image: "imag-producto col-6",
            // 	content:
            // 	input:
            // 	actions:
            //confirmButton: 'btn'
            // 	cancelButton:
            // 	footer:	
        },
        // 	container:
        // 	popup:
        // 	header:
        // 	title:
        // 	closeButton:
        // 	icon:
        //  image:
        content: 'michi destapador',
        // 	input:
        // 	actions:
        // 	confirmButton:
        // 	cancelButton:
        // 	footer:	
    
        showConfirmButton: false,
        // confirmButtonColor:
        //confirmButtonAriaLabel: 'Agregar al carrito',
    
        //showCancelButton: false,
        // cancelButtonText:
        // cancelButtonColor:
        // cancelButtonAriaLabel:
        
        //buttonsStyling: '#FFF8FA',
        // showCloseButton:
        // closeButtonAriaLabel:
    
    
        //imageUrl: 'assets/img/productos/destapador.jpg',
        //imageWidth: 100,
        //imageHeight: 100,
        // imageAlt:
    });
});