var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

var raio = parseFloat(lines.shift())
n = 3.14159

area = n*raio**2

console.log(`A=${area}`)