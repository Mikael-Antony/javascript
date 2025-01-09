var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let nome = String(lines.shift())
let salfix = Number(lines.shift())
let totven = Number(lines.shift())

let salf = salfix + totven * (15 / 100)

console.log(`TOTAL = R$ ${salf.toFixed(2)}`)