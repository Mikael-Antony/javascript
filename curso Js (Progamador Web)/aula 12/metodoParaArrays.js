const jogadores = [
    'Biro biro',
    'Ribamar',
    'Pelé',
    'maradona',
    'Neymar',
    'CR7',
    'Vampeta',
    'Dimitri'
];

const craques = jogadores.slice(2, 6);

console.log(craques);


const txt = 'opa bom dia'

console.log(txt.slice(1, 2));

//

const numeros = [40, 100, 1, 5, 25, 10]

console.log(MaiorNumero(numeros));
console.log(MenorNumero(numeros));
console.log(numeros.filter(filtragem));

function MaiorNumero(array) {
    return Math.max.apply(null, array);
};

function MenorNumero(array) {
    return Math.min.apply(null, array);
};

function filtragem(value, index, array) {
    return value > 20;
};