/* accedemos a todos los elementos */
const form = document.getElementById('form1');
const correo = document.getElementById('email');
const contra = document.getElementById('password1');

/*crea callback method */
/* form.addEventListener('submit', (event)=>{
    event.preventDefault();
    checkImputs();
});

function checkImputs(){
    const correoValue=email.value.trim();
    const contraValue=password1.value.trim();    

    if(usuarioValue ===''){
        setErrorFor()
    }
}

function setErrorFor(input,message){
    const formControl=input.parentElement;
    const small=control.querySelector('small');
    formControl.ClassName='form-control error';
    small.innerText=message;
}

function setSuccessFor(input){
    const formControl=input.parentEmenet;
    formControl.ClassName='form-control succes'
}

functionisEmail(){
    return /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    return reg.test(email);
} */

form.addEventListener('submit', e => {
	e.preventDefault();
	
	checkInputs();
});

function checkInputs() {
	// trim to remove the whitespaces
	const emailValue = email.value.trim();
	const passwordValue = password1.value.trim();
	
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'No ingreso un email válido');
	} else {
		setSuccessFor(email);
	}
	
	if(passwordValue === '') {
		setErrorFor(password, 'Password no debe ingresar en blanco.');
	} else {
		setSuccessFor(password);
	}
	
	if(password2Value === '') {
		setErrorFor(password2, 'Password2 no debe ngresar en blanco');
	} else if(passwordValue !== password2Value) {
		setErrorFor(password2, 'Passwords no coinciden');
	} else{
		setSuccessFor(password2);
	}
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	formControl.className = 'form-control error';
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
	formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)
}