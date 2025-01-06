var evencli = window.document.getElementById('cont')
evencli.addEventListener('click', conta)

var res = window.document.getElementById('res')

var ini = window.document.getElementById('iinicio')
var iniv = Number(ini.value)

var ifim = window.document.getElementById('ifim')
var ifimv = Number(ifim.value)

var ipas = window.document.getElementById('ipasso')
var ipasv = Number(ipas.value)
/*
var erro = 0

function check() {
     if (iniv >= 0 && ifim >= iniv && ipass >= 0) {
          window.alert('erro: verifique os valores (o valor inicio deve ser maior que 0, o valor fim deve ser maior que o inicio, e o passo deve ser maior que 0(valores entre 0 e 1 sao aceitos))')
     }
}
*/
function conta() {

     for (res.innerHTML = `${iniv}emoji `; iniv <= ifimv; iniv += ipasv) {
          res.innerHTML += `${iniv}emoji `
     }

}
