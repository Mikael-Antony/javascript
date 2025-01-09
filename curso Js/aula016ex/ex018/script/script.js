var valores = []
var val = 0
let res = document.getElementById('fimres')

function adicionar(n) {
     let num = Number(n.value)
     res.innerHTML = ''
     let select = document.getElementById('valores')
     let opt = document.createElement('option')


     if (n.value.length == 0 || num <= 0 || num > 100 || valores.indexOf(num) != -1) {
          window.alert('Valor invalido ou já encontrado na lista')
     } else {
          opt.value = `val${val}`
          opt.text = `Valor ${num} adicionado`
          valores.push(num)
          val++

          let d = document.getElementById('num')
          d.value = ''

          return select.appendChild(opt)
     }
}

function analize() {
     valores.sort()
     let som = 0
     let ultpos = valores.length - 1

     for (let pos in valores) {
          som += valores[pos]
     }

     let med = som / valores.length

     if (valores.length == 0) {
          window.alert('Adicione um valor antes de finalizar!')
     } else {
          return res.innerHTML = `<p>Ao todo temos ${valores.length} números cadrastados.</p><p>O maior valor informado foi ${valores[ultpos]}.</p><p>O menor valor informado foi ${valores[0]}.</p><p>Somando todos os valores, temos ${som}.</p><p>A media dos valores digitados e ${med.toFixed(2)}.</p>`
     }

}
