var idade = 19
console.log(`Voçê tem ${idade} anos?`)

if (idade < 16) {
    console.log('Não vota')
} else if (idade < 18 || idade > 65) {
        console.log('Voto opciobal')
} else {
    console.log('Voto obrigatorio')
}