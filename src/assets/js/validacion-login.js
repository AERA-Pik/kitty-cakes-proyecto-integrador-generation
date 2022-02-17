const formulario = document.getElementById("formulario");
const inputs =document.querySelector("#formulario input");

var correo = document.getElementById("email");
var password= document.getElementById("password-1");
var error= document.getElementById("error");
error.style.color= "red";

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros,
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
    password: /^.{6,12}$/ // 4 a 12 digitos.
}

 


//Validacion de boton enviar datos

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
    error.innerHTML = mensajesError.join(" e ");
return false;
} 
// termina validacion de datos



const validarFormulario=(e)=>{
    switch(e.target.name){
        case "correo":
            if(expresiones.correo.test(e.target.value)){
                
            }else{
                document.getElementById('grupo_correo').classList.add('form-outline-incorrecto');
            }
            
        
        break;

        case "password":
            if(expresiones.password.test(e.target.value)){

            }else{
                document.getElementById('grupo_password').classList.add('formulario_grupo-incorrecto')
            }
        
        break;
    }
} 

/* const campos = {
    correo: false,
	password: false,
}
 */


/* var nombre=document.getElementById('nombre');
var password=document.getElementById('password');
error.style.color='red'; 
 */


console.log("Hola mundo");