/*
    Desafio - Cliente poupança
    Aproveitar a classe cliente que já foi criada anteriormente, para criar a partir dela um novo cliente para
contas poupança.
*/
//A classe cliente
class Cliente{
    constructor(nome, cpf, email, saldo){
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
//Vamos aplicar herança dessa classe para a nova abaixo:

class ClientePoupanca extends Cliente{
    constructor(nome, cpf, email, saldo, saldoPoup){
        super(nome, cpf, email, saldo);
        this.saldoPoup = saldoPoup;
    }

    depositarNaPoupanca(valor){
        this.saldoPoup += valor;
    }
    moverParaPoupanca(valor){
        this.saldo -= valor;
        this.saldoPoup += valor;
    }
    sacarDaPoupanca(valor){
        this.saldoPoup -= valor;
    }
    movarDaPoupança(valor){
        this.saldoPoup -= valor;
        this.saldo += valor;
    }
    exibeSaldos(){
        console.log(`Saldo da cona de ${this.nome} é R$${this.saldo} e possui R$${this.saldoPoup} na poupança`);
    }
}

const andre = new ClientePoupanca("Andre", "123456789-12", "andre@email.com", 200, 1500);
console.log(andre);
andre.exibeSaldos();
andre.depositar(100);
andre.exibeSaldos();
andre.depositarNaPoupanca(400);
andre.exibeSaldos();
andre.moverParaPoupanca(100);
andre.exibeSaldos();
andre.movarDaPoupança(500);
andre.exibeSaldos();
andre.sacar(500);
andre.exibeSaldos();
andre.sacarDaPoupanca(500);
andre.exibeSaldos();