var email = document.getElementById('email');
var password = document.getElementById('password');
var error = document.getElementById('error');



function enviarFormilario(){
    console.log('enviando formulario');

    var mensajesErrror= [];

    if(email.value === null || email.value === ''){
        mensajesErrror.push('Ingresa tu email');
    }

    
    if(password.value === null || password.value === ''){
        mensajesErrror.push('Ingresa tu password');
    }

return false;

 error.innerHTML = mensajesErrror.join(',');

}

