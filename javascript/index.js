function onChangeEmail() {
    toggleButtonsDisable();
    toggleEmailErrors();
}

function onChangePassword() {
    toggleButtonsDisable();
    togglePasswordErrors();
}

function login() {
    
    firebase.auth().signInWithEmailAndPassword(
        form.usuario().value, form.senha().value
    ).then(response => {
        window.location.href = "administrador.html";
    }).catch(error => {
        alert(GetErrorMenssage(error));
    });
}

function recoverPassword() {
    firebase.auth().sendPasswordResetEmail(form.usuario().value).then(() => {
        alert('Email enviado com sucesso');
    }).catch(error => {
        alert('Email não encontrado');
    });
}

function GetErrorMenssage(error){
    if(error.code=="auth/user-not-found"){
        return "Usuário não encontrado!";
    }
    return error.message;
}


function servico(){
    window.location.href="servicos.html"
}

function home(){
    window.location.href="index.html"
}

function parceiros(){
    window.location.href="parceiros.html"
}

function quemsomos(){
    window.location.href="quemsomos.html"
}

function arearestrita(){
    window.location.href="login.html"
}

function cadastro(){
    window.location.href="cadastro.html"
}

const form = {
    usuario: () => document.getElementById("email"),
    emailInvalidError: () => document.getElementById("email-invalid-error"),
    emailRequiredError: () => document.getElementById("email-required-error"),
    loginButton: () => document.getElementById("login-button"),
    senha: () => document.getElementById("password"),
    passwordRequiredError: () => document.getElementById("password-required-error"),
    recoverPasswordButton: () => document.getElementById("recover-password-button"),
} 