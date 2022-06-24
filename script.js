var nome = window.document.getElementById('nome')
var email = window.document.querySelector('#email')
var assunto = window.document.getElementById('assunto')

var nomeOk = false
var emailOk = false
var assuntoOk = false


function validarNome() {
    let txtNome = document.querySelector('#txtNome')
    if (nome.value.length < 2) {
        txtNome.innerHTML = 'Nome inválido!'
        txtNome.style.color = 'red'
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome válido!"
        txtNome.style.color = 'green'
        nomeOk = true
    }
}

function validarEmail() {
    let txtEmail = document.querySelector('#txtEmail')
    if (email.value.indexOf('@') > 0 && email.value.indexOf('.') > 0) {
        txtEmail.innerHTML = 'Email válido!'
        txtEmail.style.color = 'green'
        emailOk = true
    } else {
        txtEmail.innerHTML = "Email inválido!"
        txtEmail.style.color = 'red'
        emailOk = false
    }
}

function validarAssunto() {
    let txtAssunto = document.querySelector('#txtAssunto')
    if (assunto.value.length < 10 || assunto.value.length > 1000) {
        txtAssunto.innerHTML = 'Assunto precisa de mais caracteres!'
        txtAssunto.style.color = 'red'
        assuntoOk = false
    } else {
        txtAssunto.innerHTML = "Preenchimento válido!"
        txtAssunto.style.color = 'green'
        assuntoOk = true
    }
}

function enviar() {
    if (nomeOk == true && emailOk == true && assuntoOk == true) {
        alert('Preenchido corretamente, enviado')
    } else {
        alert('Necessário preencher todos os campos corretamente')
    }
}