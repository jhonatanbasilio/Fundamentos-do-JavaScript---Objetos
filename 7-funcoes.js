/*
    Desafio - Fazendo depósitos
    Adicionar uma propriedade que permita "ações", para que os clientes que estão cadastrados consigam fazer 
operações bancárias, como depositar ou sacar dinheiro.

    O objeto cliente original era:
    const cliente = {
        nome: "Jhonatan",
        idade: 26,
        cpf: "123.456.789-12",
        email: "jhonatan@email.com",
        telefone: ["98893-3215", "98821-5908"],
        dependentes: [
            {
                nome: "Lavinia",
                idade: 19,
                parentesco: "Irmã"
            },
            {
                nome: "Lala",
                idade: 20,
                parentesco: "Irmã"
            }
        ]
    }
    Mas será feito alterações no proprio objeto, direto nele com as funcionalidades para resolver o desafio
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com",
    telefone: ["98893-3215", "98821-5908"],
    dependentes: [
        {
            nome: "Lavinia",
            idade: 19,
            parentesco: "Irmã"
        },
        {
            nome: "Lala",
            idade: 20,
            parentesco: "Irmã"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;//this. é para apontar pro proprio objeto, só rola dentro dele é claro
    },
    
}
/*
    Criando funções no objeto dá a ele novas funcionalidades que podem ser usadas normalmente como fuções e
se comportam como funções, dando retorno de tiver e sendo necessário passar parametos a ele se ele pedir.
    Essas funções que criamos dentro de objetos são chamadas de metodos.
*/

console.log("O cliente:");
console.log(cliente);

cliente.depositar(1500);
console.log("Depositado na conta, saldo atual: " + cliente.saldo);

/*
    Podemos também add uma função a um objeto da mesma maneira que add uma chave/atributo e também podemos
edita-la igualmente. Abaixo segue um exemplo com a função de sacar dinheiro da conta.
*/

cliente.sacar = function(valor){
    this.saldo -= valor;
}

cliente.sacar(500);
console.log("Feito saque na conta, saldo atual: " + cliente.saldo);

