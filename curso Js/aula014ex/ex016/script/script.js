var evencli = window.document.getElementById('cont')
evencli.addEventListener('click', conta)

var res = window.document.getElementById('res')

function conta() {

     //Variavels
     
     var ini = window.document.getElementById('iinicio')
     var iniv = Number(ini.value)

     var ifim = window.document.getElementById('ifim')
     var ifimv = Number(ifim.value)

     var ipas = window.document.getElementById('ipasso')
     var ipasv = Number(ipas.value)

     var infi = 4
     var ps = 3

     //checagem de erros no inicio ou fim

     if (!iniv && !ifimv) {
          infi = 3
     } else if (iniv && !ifimv) {
          infi = 2
     } else if (ifimv && !iniv) {
          infi = 1
     } else if (iniv && ifimv) {
          infi = 4
     }

     //açao tomada caso haja erro

     switch (infi) {
          case 1:
               res.innerHTML = 'Impossivel contar!<p style="color: red; transform: translate(0px, -10px); font-size: .5em;">(o inicio nâo possui um valor atribuido)</p>'
               break
          case 2:
               res.innerHTML = 'Impossivel contar!<p style="color: red; transform: translate(0px, -10px); font-size: .5em;">(o fim nâo possui um valor atribuido)</p>'
               break
          case 3:
               res.innerHTML = 'Impossivel contar!<p style="color: red; transform: translate(0px, -10px); font-size: .5em;">(o inicio e o fim nâo possui um valor atribuido)</p>'
               break
     }

     //checagem de ero no passo

     if (ipasv <= 0) {
          ps = 1
     } else if (ipasv) {
          ps = 2
     }

     //acao tomada caso haja erro

     if (ps != 2) {
          window.alert('Passo invalido! Considerando PASSO: 1')
          ipas.setAttribute('value', 1)
          ipas.value = 1
     }

     //contagem

     if (iniv <= ifimv && infi == 4 && ps == 2) {
          res.innerHTML = `Contando:<br>${iniv}&#x1F449;`
          while (iniv < ifimv) {
               iniv += ipasv
               res.innerHTML += `${iniv}&#x1F449`
          }
          res.innerHTML += `&#x1F3C1;`
     }

}
