function mostrarPassword1(){
    var cambio1 = document.getElementById("password-1");
    if(cambio1.type == "password"){
        cambio1.type = "text";
        $('.icon1').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio1.type = "password";
        $('.icon1').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

function mostrarPassword2(){
    var cambio2 = document.getElementById("password-2");
    if(cambio2.type == "password"){
        cambio2.type = "text";
        $('.icon2').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
    }else{
        cambio2.type = "password";
        $('.icon2').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
    }
} 

$(document).ready(function () {
//CheckBox muestra contraseña
    $('#ShowPassword').click(function () {
        $('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
    });
});