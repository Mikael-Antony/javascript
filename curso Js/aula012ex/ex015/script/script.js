
function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('iano')
    var res = window.document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano) {
        window.alert('[ERRO]Verifique os dados e tente novamente')
    } else {
        var fsex = window.document.getElementsByName('Sexo')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            //genero = 'Homen'

            if (idade >= 0 && idade <= 5) {
                //bebe
                genero = 'um bebe'
                img.setAttribute('src', 'imagens/homem-bebe.png')
            } else if (idade <= 13) {
                //crianca
                genero = 'uma crianca'
                img.setAttribute('src', 'imagens/homem-crianca.png')
            } else if (idade <= 21) {
                //jovem
                genero = 'um jovem'
                img.setAttribute('src', 'imagens/homem-jovem.png')
            } else if (idade <= 50) {
                //adulto
                genero = 'um adulto'
                img.setAttribute('src', 'imagens/homem-adulto.png')
            } else {
                //idoso
                genero = 'um idoso'
                img.setAttribute('src', 'imagens/homem-idoso.png')
            }
        } else {
            //genero = 'Mulher'

            if (idade >= 0 && idade <= 5) {
                //bebe}
                genero = 'uma bebe'
                img.setAttribute('src', 'imagens/mulher-bebe.png')
            } else if (idade <= 13) {
                //crianca
                genero = 'uma crianca'
                img.setAttribute('src', 'imagens/mulher-crianca.png')
            } else if (idade <= 21) {
                //jovem
                genero = 'uma jovem'
                img.setAttribute('src', 'imagens/mulher-jovem.png')
            } else if (idade <= 50) {
                //adulto
                genero = 'uma adulta'
                img.setAttribute('src', 'imagens/mulher-adulta.png')
            } else {
                //idoso
                genero = 'uma idosa'
                img.setAttribute('src', 'imagens/mulher-idosa.png')
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}
