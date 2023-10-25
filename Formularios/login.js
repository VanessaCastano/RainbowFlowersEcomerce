function validarFormulario(event){
    event.preventDefault();
    let password = document.getElementById("Password");

    if(password.length > 8) {
        alert("Password valido");
    } else {
        alert("Verifica tu password,tiene que terner mas de 8 caracteres");

    }

}


