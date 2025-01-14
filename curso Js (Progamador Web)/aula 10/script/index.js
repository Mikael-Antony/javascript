/*
click => disparado quando recebe um click
dblclick => disparado quando click duplo
mouseover => disparado quando o mouse está sobre
mouseout => disparado quando o mouse sai do objeto
mousemove => disparado quando o mouse é movido no elemento
mousedown => disparado quando o click do botão for pressionado
mouseup = > disparado quando o click do mouse é solto
focus => disparado quando o elemento recebe o foco. Válido para input
change => disparado quando há uma mudança no conteúdo. "Ao mudar"
blur => disparado quando o elemento perde o foco
keydown => disparado quando uma tecla é pressionada 
keypress => disparado quando uma tecla é pressionada e solta
keyup => disparado quando uma tecla é solta sobre o elemento
load => disparado quando a página terminou de ser carregada. Body
resize => disparado quando há um redimencionamento da janela
*/

function eventoClick() {
    //alert('acionou o eventoClick');
    document.body.style.backgroundColor = 'yellow';
};
function eventoDblclick() {
    alert('voce clicou duas vezes');
};

function viraVermelho() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'red';
};
function viraAzul() {
    let div = document.getElementById('teste');
    div.style.backgroundColor = 'blue';
};

function adicionaTexto() {
    let p = document.getElementById('texto');
    p.innerHTML += `ok<br>`

}

function limpaTexto() {
    document.getElementById('campoTexto').value = ''
}

function mudou() {
    console.log('mudou')
}

function teclaPressionada() {
    let input = document.getElementById('campoTexto').value;
    console.log(input)
}