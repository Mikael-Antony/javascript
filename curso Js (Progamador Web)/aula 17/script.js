class Carro {
    constructor(v1,v2,v3) {
        this.marca = v1;
        this.modelo = v2;
        this.ano = v3;
    }
    buzina() {
        return this.modelo 
        + ' buzinou: biiiiiiiii'
    }
}

const uno = new Carro('Fiat', 'Uno', 2001) 
const gol = new Carro('Volkswaen', 'Gol', 2013)

console.log(uno);
console.log(gol);
console.log(gol.buzina())

