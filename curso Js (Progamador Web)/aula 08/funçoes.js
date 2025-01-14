//funcao de soma
function soma(valor1, valor2,) {
    return valor1 + valor2;
}

console.log(soma(10, 10))


//funçao de cotaçao
function realParaDolar(real, cotDolar) {
    return real * cotDolar
} 

var real = 7.89;
var cotacao = 5.08;

console.log(`O valor em real e R$${real} o valor em dolar e U$${realParaDolar(real, cotacao).toFixed(2)}`);