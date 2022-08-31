function enviarForm() {
    alert("Obrigada por se candidatar!");
}

function alertaComprar() {
    alert("Essa funcionalidade ainda não está implementada...");
}

function maiuscula(palavra) {
    newPa = palavra.value.toUpperCase();
    palavra.value = newPa;
}

function descricaoTextArea() {
    alert("Esse campo é livre para falar sobre o que achar importante, e é opcional!");
}


function secundariaProduto(id, foto) {
    document.getElementById(id).src = foto;
}
function principalProduto(id, foto) {
    document.getElementById(id).src = foto;
}

function mudaFotoPrincipal(foto) {
    document.getElementById('destaque').src = foto;
}

function mudaOpacidade(i) {
    var foto = document.getElementsByClassName('fotoPequena');
    foto[i].style.opacity = ('80%');
}

function resetaOpacidade(i) {
    var foto = document.getElementsByClassName('fotoPequena');
    foto[i].style.opacity = ('100%');
}