/**
 * Carro
 * @author Gabriel Coutinho
 */

console.clear()

class Carro {
    constructor(ano, cor,) {
        this.ano = ano
        this.cor = cor
        
    }

    criarCarro() {
        console.log("---------------------------------------")
        console.log("🚗")
        console.log(`Ano: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
    }
    ligar() {
        console.log("O carro está ligado")

    }
    desligar() {
        console.log("O carro está desligado")

    }
    acelerar() {
        console.log("O carro está acelerando")

    }
}

class Aviao extends Carro {
    constructor(ano, cor, envergadura) {
        super(ano, cor)
        this.envergadura = envergadura
    }
    criarAviao() {
        console.log("---------------------------------")
        console.log("✈️")
        console.log(`Ano: ${this.ano}`)
        console.log(`Cor: ${this.cor}`)
        console.log(`Envergadura: ${this.envergadura}`)


    }
    aterrizar() {
        
        console.log("Avião aterrissando")

    }
    acelerar() {
        console.log("Avião acelerando")
    }
}

const carro1 = new Carro("Azul", 2024)
carro1.criarCarro()
carro1.ligar()

const carro2 = new Carro ("Verde", 2022)
carro2.criarCarro()
carro2.acelerar()

const aviao1 = new Aviao ("Amarelo", 2023, 30)
aviao1.criarAviao()
aviao1.aterrizar()
aviao1.acelerar()


