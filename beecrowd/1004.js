var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var lines = input.split('\n');

let n1 = parseInt(lines.shift())
let n2 = parseInt(lines.shift())

let PROD = n1 * n2

console.log(`PROD = ${PROD}`)