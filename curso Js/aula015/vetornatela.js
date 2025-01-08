let valores = [8, 1, 7, 4, 2, 9]
valores.push(1)
valores.sort()
 
console.log(valores)

/*
for (let n = 0; n < valores.length; n++) {
    console.log(`A posiçao ${n} tem o valor ${valores[n]}`)
}
*/

for (let pos in valores) {
    console.log(`A posiçao ${pos} tem o valor ${valores[pos]}`)
}

let pos = valores.indexOf(1)

if (pos == -1) {
    console.log('O valor nao foi encontrado')
} else {
    console.log(`o valor esta na posiçao ${pos}`)
}