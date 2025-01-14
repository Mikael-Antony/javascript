
const carro  = {
    marca: 'ford',
    modelo: 'ka',
    ano: 2015,
    placa: 'ABC-1234',
    buzina: function() {console.log('biiiiiiiiiiiiiiii')},
    completo: function() {
        return `A marca e ${this.marca} E o modelo e ${this.modelo}`
    },
}

console.log(carro.completo())