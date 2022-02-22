//Funcion para mandar llamar mas de una función con el metodo ONLOAD
//
function addLoadEvent(func){
    var oldonload = window.onload;
    if (typeof window.onload != 'function')
    {
    window.onload = func;
    }else{
    window.onload = function(){
    if (oldonload)
    {
    oldonload();
    }
    func();
    }
    }
    }
    addLoadEvent(function(){
    ocultarUno();
    ocultarDos();
    ocultarCuatro();
    ocultarCinco();
    ocultarSeis();
    ocultarSiete();
    ocultarOcho();
    });





//Funcion para ocultar texto de 
function ocultarUno(){
    let cartaUno = document.getElementById('ocultarTextUno')
    cartaUno.style.display = 'none'
}

//Funcion para mostrar texto
function mostrarUno(){
    let cartaUno = document.getElementById('ocultarTextUno');
    cartaUno.style.display = 'block'
}



//CARTADOS

function ocultarDos(){
    let cartaDos = document.getElementById('ocultarTextDos');
    cartaDos.style.display = 'none'
    
}
function mostrarDos(){
    let cartaDos = document.getElementById('ocultarTextDos');
    cartaDos.style.display = 'block'
    

}

//CARTATRES
function ocultarTres(){
    let cartaTres = document.getElementById('ocultarTextTres');
    cartaTres.style.display = 'none'
}
function mostrarTres(){
    let cartaTres = document.getElementById('ocultarTextTres');
    cartaTres.style.display = 'block'
    
}

//CARTACUATRO
function ocultarCuatro(){
    let cartaCuatro = document.getElementById('ocultarTextCuatro');
    cartaCuatro.style.display = 'none'
}
function mostrarCuatro(){
    let cartaCuatro = document.getElementById('ocultarTextCuatro');
    cartaCuatro.style.display = 'block'
    

}

    


//CARTACINCO
function ocultarCinco(){
    let cartaCinco = document.getElementById('ocultarTextCinco');
    cartaCinco.style.display = 'none'
}
function mostrarCinco(){
    let cartaCinco = document.getElementById('ocultarTextCinco');
    cartaCinco.style.display = 'block'
    

}

//CARTASEIS
function ocultarSeis(){
    let cartaSeis = document.getElementById('ocultarTextSeis');
    cartaSeis.style.display = 'none'
}
function mostrarSeis(){
    let cartaSeis = document.getElementById('ocultarTextSeis');
    cartaSeis.style.display = 'block'
    

}

//CARTASIETE
function ocultarSiete(){
    let cartaSiete = document.getElementById('ocultarTextSiete');
    cartaSiete.style.display = 'none'
}
function mostrarSiete(){
    let cartaSiete = document.getElementById('ocultarTextSiete');
    cartaSiete.style.display = 'block'

}

//CARTAOCHO
function ocultarOcho(){
    let cartaOcho = document.getElementById('ocultarTextOcho');
    cartaOcho.style.display = 'none'
}
function mostrarOcho(){
    let cartaOcho = document.getElementById('ocultarTextOcho');
    cartaOcho.style.display = 'block'

}







