function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var bk = window.document.body
    msg.innerHTML = `Agora são ${hora} horas`
    if (hora >= 0 && hora < 12) {
        //
        img.src = 'imagens/manha.png'
        bk.style.background = '#C0D3EB'
    } else if (hora >= 12 && hora < 18) {
        //
        img.src = 'imagens/tarde.png'
        bk.style.background = '#DABB81'
    } else {
        //
        img.src = 'imagens/noite.png'
        bk.style.background = '#2B204A'
    }
}
