/* accedemos a todos los elementos */
const form = document.getElementById('form1');
const nombre = document.getElementById('firstName');
const apellidos = document.getElementById('lastName');
const telefono = document.getElementById('phoneNumber')
const correo = document.getElementById('email');
const contra = document.getElementById('password-1');
const confirmContra = document.getElementById('password-2');

/*crea callback method */
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    /*stops the default action of an element from happening
    Prevent a submit button from submitting a form */
   
   validarForm();
    
    if(isFormValid()==true){ //si formulario es valido muestra ventana de exito
        //ventana emergente sweetalert2
        Swal.fire({
            title: '¡Te registraste exitosamente!',
            text: 'Presiona OK para continuar',
            icon: 'success',
            width: '45%',
            backdrop: true,
            confirmButtonText: 'OK',
            timer: 8000,
            //timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonColor: 'green',
            stopKeyDownPropagation: true
            }).then((result) => {
                if (result.isConfirmed) {
                    //al confirmar el boton OK valida el form por completo
                    form.submit();
                    //event.preventDefault();
                } 
            })
    }else {
        event.preventDefault();
    }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.form-outline');
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
    //TELÉFONO
    if(telefono.value.trim() == ''){
        esError(telefono, 'Ingrese un teléfono');
    }else if(telefonoValido(telefono.value)){
        esCorrecto(telefono, 'Ingrese un teléfono válido');
    } else{
        esError(telefono);
    }
    //EMAIL
    if(correo.value.trim() == ''){
        esError(correo, 'Ingresa una dirección de correo');
    }else if(emailValido(correo.value)){ //valida si es un email correcto
        esCorrecto(correo);
    }else{
        esError(correo, 'Ingresa una dirección de correo válida');
    }
    //CONTRASEÑA
    if(contra.value.trim() == ''){
        esError(contra, 'Este campo no puede estar vacio');
    }else if(passwordValido(contra.value)){
        esCorrecto(contra);
    }else {
        esError(contra, 'Ingresa una contraseña valida');
    }
    //CONFIRM PASSWORD
    if(confirmContra.value.trim() == ''){
        esError(confirmContra, 'Este campo no puede estar vacío');
    }else if(confirmContra.value !== contra.value){
        esError(confirmContra, 'Contraseñas no concuerdan');
    }else {
        esCorrecto(confirmContra);
    }
}

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

function esCorrecto(element){
    const parent = element.parentElement;
    /*lo mismo que con setError */
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success'); //muestra validación correctamente
}

//validación de teléfono
function telefonoValido(telefono){
    const regex = /^[5]\d{9}$/ //numero de 10 dig. que debe iniciar con numero 5, por codigo de área
    //de CDMX,  checa el largo del string
    //simbolos para denotar el inicio y final del string
    return regex.test(telefono)
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

function passwordValido(pw) {
    /*Al menos una letra mayúscula
    al menos una minúscula
    al menos un dígito
    al menos un símbolo especial
    debe ser de 6 a 12 caracteres */
    return /[A-Z]/       .test(pw) &&
           /[a-z]/       .test(pw) &&
           /[0-9]/       .test(pw) &&
           /[^A-Za-z0-9]/.test(pw) &&
           /\d/          .test(pw) &&
           pw.length > 5 && pw.length <13;

}

//CONTRASEÑA
document.querySelector('.icon1').addEventListener('click', e => {
    const password1 = document.getElementById('password-1');
    //if (e.target.classList.contains('show')) { //input de contraseña el elemento contiene
    if(password1.type == "password") {
        //e.target.classList.remove('show'); 
        password1.type = 'text'; //muestra contraseña
        $('.icon1').removeClass('fa fa-eye-slash').addClass('fa fa-eye'); //cambia icono
    } else {
        //e.target.classList.add('show');
        password1.type = 'password'; //oculta contraseña
        $('.icon1').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
});

//CONFIRMAR CONTRASEÑA
document.querySelector('.icon2').addEventListener('click', e => {
    const password2 = document.getElementById('password-2');
    if (password2.type == "password") {
        //e.target.classList.remove('show');
        password2.type = 'text'; 
        $('.icon2').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    } else {
        //e.target.classList.add('show');
        password2.type = 'password';
        $('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
});