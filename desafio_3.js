class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome
        this.idade = idade
        this.tipo = tipo
    }

    atacar(){
        console.log(`O herói é ${this.nome}`)
        console.log(`A idade é ${this.idade}`)
        console.log("----------------------")
        
        let ataque
        if(this.tipo === "mago"){
            ataque = poder.tipoAtaque[0]
        } else if(this.tipo === "guerreiro"){
            ataque = poder.tipoAtaque[1]
        } else if(this.tipo === "monge"){
            ataque = poder.tipoAtaque[2]
        } else{
            ataque = poder.tipoAtaque[3]
        }
        console.log(`O ${this.tipo} atacou usando ${ataque}.`)
    }
}

let poder = {
    tipoAtaque: {
    	0: "magia",
        1: "espada",
        2: "artes marciais",
        3: "shuriken"
    }
}

let nomeHeroi = new heroi("Hélio", 45, "mago")

nomeHeroi.atacar()
