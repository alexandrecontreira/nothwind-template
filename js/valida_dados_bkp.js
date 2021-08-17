var form=document.getElementById(login.html);
if(form.addEventListener){
    form.addEventListener("submit", validaDados);

}else if (form.addEventListener){
    form.atthachEvent("onsubmit", validaDados);

}
 function validaDados(evt) {
     var email = document.getElementById('email');
     var senha = document.getElementById('password');
     var senha2 = document.getElementById('remember');
     var filtro = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
     var contErro = ;
}
// Validação campo email

campo_email = document.querySelector('.msg-email')
if(email.value==""){
    campo_email.innerHTML="Preencher o campo e-mail";
    campo_email.style.display.block;
    contErro += 1;
}else if(filtro.test(email.value)){
    campo_email.style.display = 'none';
}else{
    campo_email.innerHTML = "Formato do E-mail inválido";
    campo_email.style.display = 'block';
    contErro += 1;
}


/* Validação do campo senha */
caixa_senha = document.querySelector('.msg-senha');
if(senha.value == ""){
    caixa_senha.innerHTML = "Favor preencher a Senha";
    caixa_senha.style.display = 'block';
    contErro += 1;
}else if(senha.value.length < 6){
    caixa_senha.innerHTML = "Favor preencher a Senha com o mínimo de 6 caracteres";
    caixa_senha.style.display = 'block';
    contErro += 1;
}else{
    caixa_senha.style.display = 'none';
}

/* Validação do campo repita a senha */
caixa_senha2 = document.querySelector('.msg-senha2');
if(senha2.value == ""){
    caixa_senha2.innerHTML = "Favor preencher o campo Repita a Senha";
    caixa_senha2.style.display = 'block';
    contErro += 1;
}else if(senha2.value.length < 6){
    caixa_senha2.innerHTML = "Favor preencher o campo Repita a Senha com o mínimo de 6 caracteres";
    caixa_senha2.style.display = 'block';
    contErro += 1;
}else{
    caixa_senha2.style.display = 'none';
}