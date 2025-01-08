var valores = window.document.getElementById('num')
var add = window.document.getElementById('add')
var num = Number(valores.value)

add.addEventListener('click', adiciona(num))

function adiciona(n) {
     let res = window.document.getElementById('valores')
     return res.appendChild('option'), res.option = opa
}