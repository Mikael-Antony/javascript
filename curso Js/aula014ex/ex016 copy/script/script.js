var evencli = window.document.getElementById('n')
evencli.addEventListener('click', tabuada)


function tabuada() {
     let num = document.getElementById('num')
     let n = Number(num.value)
     let tab = document.getElementById('slctab')
     tab.innerHTML = ''
          tab.size = 11

     if (num.value.length == 0) {
          window.alert('Por Favor, Digite um número!')
     } else {
          let c = 0
          
          
          while (c <= 10) {
               let res = document.createElement('option')
               res.text = `${n} x ${c} = ${n * c}`
               res.value = `tabs${c}`
               tab.appendChild(res)
               c ++
          }
     }

}