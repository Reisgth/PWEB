function validarDados() {

    if (document.forms.formulario1.idNome.value == "" || 
        document.forms.formulario1.idNome.value.length < 10) {
        alert("Preencha campo NOME corretamente!");
        document.forms.formulario1.idNome.focus();
        return false;
    }

    if (document.forms.formulario1.elements["idEmail"].value == "" ||
        document.forms.formulario1.elements["idEmail"].value.indexOf('@') == -1 ||
        document.forms.formulario1.elements["idEmail"].value.indexOf('.') == -1) {
        alert("Preencha campo E-MAIL corretamente!");
        document.forms.formulario1.elements.idEmail.focus();
        return false;
    }

    if (document.forms.formulario1.elements.idMensagem.value == "" ||
        document.forms.formulario1.elements.idMensagem.value.length < 20) {
        alert("É necessario preencher o campo MENSAGEM com mais de 20 caracteres!");
        document.forms.formulario1.idMensagem.focus();
        return false;
    }
    return true;
}

function jaVisitou() {
    document.getElementById("idNao").checked = false;
    document.getElementById("texto").innerHTML = "Que bom que você voltou a visitar esta página!"
}

function naoVisitou() {
    document.getElementById("idSim").checked = false;
    document.getElementById("texto").innerHTML = "Volte sempre à está página!"
}
