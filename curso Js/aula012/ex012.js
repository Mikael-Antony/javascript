var agora = new Date()
var hora = agora.getHours()
console.log(`Agora são ${hora}`)
if (hora < 12) {
    console.log(`Então esta de manhã`)
} else if (hora <= 18) {
    console.log(`Então esta de tarde`)
} else {
    console.log(`Então esta de noite`)
} 