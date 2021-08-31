abstract class Pessoa {
    protected nome: string
    protected idade: number
    protected cidade: string

    constructor(nome: string, idade: number, cidade: string) {
        this.nome = nome
        this.idade = idade
        this.cidade = cidade
    }

    abstract exibirDados(): void
}

interface Veiculo {
    tipo: string
    marca: string
    modelo: string
    ano: number
}

class Motorista extends Pessoa {
    private veiculo: Veiculo

    constructor(nome: string, idade: number, cidade: string, carteiraDeMotorista: string, veiculo: Veiculo) {
        super(nome, idade, cidade)
        this.veiculo = veiculo
    }

    exibirDados() {
        console.log(this.nome, this.idade)
    }
}

const zezinDeMaua = new Motorista('Ze Da Silva', 200, 'Mauá', 'Z', {
    tipo: 'Carroça',
    marca: 'Potrancas',
    modelo: 'HIGH PONEI TURBO',
    ano: 1911
})
