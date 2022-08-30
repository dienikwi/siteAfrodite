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


function secundariaProduto1() {
    document.getElementById('produto1').src = "images/produtos/1secundaria.png";
}
function principalProduto1() {
    document.getElementById('produto1').src = "images/produtos/1principal.png";
}


function secundariaProduto2() {
    document.getElementById('produto2').src = "images/produtos/2secundaria.png";
}
function principalProduto2() {
    document.getElementById('produto2').src = "images/produtos/2principal.png";
}


function secundariaProduto3() {
    document.getElementById('produto3').src = "images/produtos/3secundaria.png";
}
function principalProduto3() {
    document.getElementById('produto3').src = "images/produtos/3principal.png";
}


function secundariaProduto4() {
    document.getElementById('produto4').src = "images/produtos/4secundaria.png";
}
function principalProduto4() {
    document.getElementById('produto4').src = "images/produtos/4principal.png";
}


function secundariaProduto5() {
    document.getElementById('produto5').src = "images/produtos/5secundaria.png";
}
function principalProduto5() {
    document.getElementById('produto5').src = "images/produtos/5principal.png";
}


function secundariaProduto6() {
    document.getElementById('produto6').src = "images/produtos/6secundaria.png";
}
function principalProduto6() {
    document.getElementById('produto6').src = "images/produtos/6principal.png";
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