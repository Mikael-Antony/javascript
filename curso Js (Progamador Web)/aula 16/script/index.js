var numero = 0
var contagemEstado = false

function ativarContagem() {

    let but = document.getElementById('but')

    if (!contagemEstado) {
        contagemEstado = true
        but.style.backgroundColor = 'green'
        tempo = setInterval(function contagem() {
            let tela = document.getElementById('contagem');
            tela.innerHTML = numero;
            numero++
        }, 500);
    } else {
        clearInterval(tempo);
        contagemEstado = false
        but.style.backgroundColor = 'red'
    }
}

var c = 0

function ativarRainbow() {
    let body = document.body

    setInterval(function rainbow() {
        body.style.backgroundColor = `hsl(${c}, 100%, 50%)`
        c++
        if (c > 358) {c = 0}
    }, 1);
}
//hsl(358, 100%, 50%)

