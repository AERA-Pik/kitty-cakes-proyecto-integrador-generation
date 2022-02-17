/* accedemos a todos los elementos */
const $form = document.getElementById('form_cont');
const nombre = document.getElementById('firstName');
const apellidos = document.getElementById('lastName');
const correo = document.getElementById('email');
const mensaje = document.getElementById('message');

/*crea callback method */
/*$form.addEventListener('submit', (event)=>{*/
$form.addEventListener('submit', handleSubmit)
async function handleSubmit(event){
    event.preventDefault();
    
    validarForm();
    const form = new FormData(this)
    const response = await fetch(this.action, {
        method: this.method,
        body: form,
        headers: {
            'Accept': 'application/json'
        }
    }) 
    
     if(isFormValid()==true && response.ok){ //si formulario es valido muestra ventana de exito
        
        //ventana emergente sweetalert2
        Swal.fire({
            title: '¡Mensaje Enviado!',
            text: 'Presiona OK para continuar',
            icon: 'success',
            width: '55%',
            backdrop: true,
            confirmButtonText: 'OK',
            timer: 8000,
            //timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonColor: 'green'
            }).then((result) => {
                if (result.isConfirmed) {
                    //al confirmar el boton OK valida el form por completo
                    $form.reset();
                    quitaValidacion(nombre);
                    quitaValidacion(apellidos);
                    quitaValidacion(correo);
                    quitaValidacion(mensaje);
                    /*$form.submit();
                    event.preventDefault();*/
                } 
            })
            

    }else {
        event.preventDefault();
    } 
}

/*});*/

function isFormValid(){
    const inputContainers = $form.querySelectorAll('.form-outline');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
}

/*funcion que valida contenido de inputs */
function validarForm() {
    //NOMBRE
    if(nombre.value.trim() == ''){ /*¿contiene algun valor? */
        esError(nombre, 'Nombre no puede estar vacío');
    }else {
        esCorrecto(nombre);
    }
    //APELLIDOS
    if(apellidos.value.trim() == ''){
        esError(apellidos, 'Apellidos no puede estar vacío');
    }else {
        esCorrecto(apellidos);
    }
    //EMAIL
    if(correo.value.trim() == ''){
        esError(correo, 'Ingresa una dirección de correo');
    }else if(emailValido(correo.value)){ //valida si es un email correcto
        esCorrecto(correo);
    }else{
        esError(correo, 'Ingresa una dirección de correo válida');
    }
    //MENSAJE
    if(mensaje.value.trim() == ''){ /*¿contiene algun valor? */
        esError(mensaje, 'El mensaje no puede estar vacío');
    }else {
        esCorrecto(mensaje);
    }
}

/* Al mandar el formulario quedan las validaciones en los inputs
esta función las elimina */
function quitaValidacion(element){
    const parent = element.parentElement;
    /*lo mismo que con setError */
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
}

/* Habilita los parametros de la hoja de estilos para confirmar que es erronea la validación */
function esError(element, errorMessage) {
    const parent = element.parentElement; //pasamos el contenido de input a una const
    /*en caso de tener success de submits anteriores, remueve contenido con condición */
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error'); //muestra mensaje error, icono y color correspondiente en input, solo si vacio

    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage; //cambia mensaje de input si presiona boton
}

/* Habilita los parametros de la hoja de estilos para confirmar que es correcta la validación */
function esCorrecto(element){
    const parent = element.parentElement;
    /*lo mismo que con esError */
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success'); //muestra validación correctamente
}

//validacion de e-mail
function emailValido(email){
    //var reg = /^([a-z A-Z 0-9 \. -]+)@([a-z A-Z]+)([a-z A-Z]{2-6})((.[a-z]{2,6})?)$/
    //largo del correo de 2 a 20 carácteres 
    //dominio
    //extension
    //ultima expresion opcional por eso el ?
    const reg =/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
}