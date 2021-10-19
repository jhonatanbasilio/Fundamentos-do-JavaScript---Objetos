class Cliente{
    constructor(nome,cpf,email,saldo){
        this.nome = nome;
        this.cpf = cpf;
        this.email = email;
        this.saldo = saldo;
    }

    depositar(valor){
        this.saldo += valor;
    }
    sacar(valor){
        this.saldo -= valor;
    }
    exibirSaldo(){
        console.log(`O saldo de ${this.nome} é de ${this.saldo} reais.`);
    }
}

const andre = new Cliente("Andre", "123456789-12", "andre@email.com", 1000);
console.log(andre);
andre.exibirSaldo();
andre.depositar(600);
andre.exibirSaldo();
andre.sacar(100);
andre.exibirSaldo();