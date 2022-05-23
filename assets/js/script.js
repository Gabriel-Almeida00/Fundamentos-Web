var nome = window.document.querySelector("#nome")
var nomeOk = false
var emailOk = false
var assuntoOk = false 
let email = document.querySelector('#email')
let assunto = document.querySelector('#assunto')
let mapa = document.querySelector('#mapa')

nome.style.width = '200%'
email.style.width = '200%'
assunto.style.width ='200%'
/*
case sensitve = reconhece letras maiusculas e minusculas
por tag: getElementByTagName()
por Id: getElementById()
por name: getElementByName()
por classe: getElementByClassName()
por seletor: querySelector()

*/

function validarNome(){
    let txtNome= document.querySelector("#txtNome")
    if(nome.value.length < 3){
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color ="red"
        nomeOk = false
    }else{
        txtNome.innerHTML = "Nome válido"
        txtNome.style.color = "green"
        nomeOk = true
    }

}

function enviar(){
    if(nomeOk == true && emailOk == true && assuntoOk == true){
        alert("Formulário enviado com sucesso!!!")
    }else{
        alert("preencha o formulário corretamente!")
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if(email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = 'E-mail inválido'
        txtEmail.style.color = 'red' 
    } else{
        txtEmail.innerHTML = 'E-mail válido'
        txtEmail.style.color = 'green' 
        emailOk = true
    }
}

function validaAssunto (){
    let txtAssunt= document.querySelector('#txtAssunto')

    if(assunto.value.length >= 100){
        txtAssunto.innerHTML = 'texto muito grande, digite no máxino 100 caracteres'
        txtAssunto.style.color = 'red'
        txtAssunto.style.display = 'block'
    }else{
        txtAssunto.style.display = 'none'
        assuntoOk = true
    }
}

function mapaZoom(){
    mapa.style.width ='800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width ='400px'
    mapa.style.height = '250px'
}