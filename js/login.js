function validateForm(evt) {
    console.log('event',evt);

    // variáveis
    var form = evt.target;
    var email = document.getElementById('email');
    var pass = document.getElementById('password');

    var submit = document.getElementById('submit');


    /*// Validação do email

    if(email.value=="") {

        console.log("campo vazio")

    }else if(email.value==""){

    }

    // Validação do senha

    if(pass.value=="") {

    }else if(pass.value==""){

    }
*/

    evt.preventDefault();
}

var form = document.getElementById('login-form');
form.addEventListener('submit',validateForm);
