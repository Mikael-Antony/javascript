var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let A = parseInt(lines.shift())
let B = parseInt(lines.shift())
let C = parseFloat(lines.shift())

let Sal = B * C

console.log(`NUMBER = ${A}`)
console.log(`SALARY = U$ ${Sal.toFixed(2)}`)
