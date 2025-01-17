// Objeto carro
/*
const carro = {
    marca: 'fiat',
    modelo: 'Uno',
    ano: 2001,
    motor: ['1.6', '1.4', '1.0']
}

let texto = JSON.stringify(carro);

document.getElementById('area').innerHTML += texto

let obj = JSON.parse(texto)

document.getElementById('area').innerHTML += `<br>${obj.marca}<br><br>`

const ajax = new XMLHttpRequest();
ajax.open('GET', 'https://viacep.com.br/ws/01001000/json/');
ajax.send();

ajax.onload = function() {
    document.getElementById('area').innerHTML += this.responseText
    let obj = JSON.parse(this.responseText)
    document.getElementById('area').innerHTML += `<br><br>${obj.cep}`
}
*/

function buscarCEP() {
    let input = document.getElementById('cp').value;

    const ajax = new XMLHttpRequest();
    ajax.open('GET', 'https://viacep.com.br/ws/' + input + '/json/');
    ajax.send();

    ajax.onload = function () {
        //document.getElementById('texto').innerHTML = this.responseText

        //transformando em objeto
        let obj = JSON.parse(this.responseText)

        let logradouro = obj.logradouro;
        let cidade = obj.localidade;
        let estado = obj.uf;

        document.getElementById('texto').innerHTML = `Logradouro: ${logradouro};<br>Cidade: ${cidade}; <br>Estado: ${estado};`

    }
}