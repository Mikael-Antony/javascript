//comando base para pegar datas
const data = new Date();
console.log(data)

//pega o ano

let ano = data.getFullYear();
console.log(ano);


// pega o mes
let mes = data.getMonth();
console.log(mes);

let mesnomes = ['jan', 'fev', 'mar', 'abr', 'mai', 'jun', 'jul', 'ago', 'set', 'out', 'nov', 'dez',]

console.log(mesnomes[mes])

//pegar o dia do mes 
let diaMes = data.getDate();
console.log(diaMes)

//pegar o dia da semana
let diaSemana = data.getDay();
let diaSemanaNomes = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab']
console.log(diaSemana + 1);
console.log(diaSemanaNomes[diaSemana]);

//pegar as horas 
let hora = data.getHours();
console.log(hora)

//pegar os minutos
let minutos = data.getMinutes();
console.log(minutos);

//pegar os segundos 
let segundos = data.getSeconds();
console.log(segundos);

//pegar os milisegundos
let miliSegundos = data.getMilliseconds();
console.log(miliSegundos);

//horario completo
console.log(`${hora}:${minutos}:${segundos}`);

//pegar data no padrao brasileiro - dia / mes / ano
let dataBR = data.toLocaleDateString('pt-br')
console.log(dataBR);


