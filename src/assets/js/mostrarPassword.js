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
