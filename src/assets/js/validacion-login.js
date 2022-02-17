
const form = document.getElementById('form1');
const correo = document.getElementById('email');
const password = document.getElementById('password-1');
var errorf=document.getElementById("error");
errorf.style.color= "red";


function enviarFormulario(){
    console.log("Enviando formulario...");

    var mensajesError=[];

if(correo.value === null || correo.value === ""){
    mensajesError.push("Ingresa tu correo eletrónico")
    console.log("ingresar correo ")
} 

 if(password.value === null || password.value === ""){
    mensajesError.push("Ingresa tu contraseña")
    console.log("ingresa contraseña")
} 
    errorf.innerHTML = mensajesError.join(" e ");
return false;
} 

/*crea callback method */
form.addEventListener('submit', (event)=>{
    event.preventDefault();
    /*stops the default action of an element from happening
    Prevent a submit button from submitting a form */
   
   validarForm();
    
    if(isFormValid()==true){ //si formulario es valido muestra ventana de exito
        //ventana emergente sweetalert2
        Swal.fire({
            title: '¡Bienvenide!',
            width: '20%',
            backdrop: true,
            confirmButtonText: 'OK',
            timer: 1000,
            //timerProgressBar: true,
            allowOutsideClick: false,
            allowEscapeKey: false,
            allowEnterKey: false,
            confirmButtonColor: 'pink',
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
    //EMAIL
    if(correo.value.trim() == ''){
        esError(correo, 'Ingresa una dirección de correo');
    }else if(emailValido(correo.value)){ //valida si es un email correcto
        esCorrecto(correo);
    }else{
        esError(correo, 'Ingresa una dirección de correo válida');
    }
    //CONTRASEÑA
    if(password.value.trim() == ''){
        esError(password, 'Este campo no puede estar vacio');
    }else if(passwordValido(password.value)){
        esCorrecto(password);
    }else {
        esError(password, 'Ingresa una contraseña valida');
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
