/*
    Desafio - Puxando relatorio
    Percorrer um objeto e extrair informações básicas do cliente em um formato mais legivel e de forma 
automatizada para fornecer a outros departamentos do banco.

    Metodo for in é um metodo do js para obj, abaixo ele será utilizado para percorrer os atributos/chaves
do obj cliente e selecionar para exibir os que não são funções, arrays e outros objetos.
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
    sacar: function(valor){
        this.saldo -= valor;
    }
}
let relatorio = "";
//A estrutura do for in:
//info é atribuido o nome da chave in obj
for (const info in cliente) {
    //como não queremos exibir de forma = ao fonte, fazer esse teste de tipo
    if(typeof cliente[info] === "object" || typeof cliente[info] === "function"){
    //aqui o array tbm tá sendo interpretado como object
        continue;
    }
    else{
        relatorio += `${info} - ${cliente[info]}.\n`;
    }
}
console.log(relatorio);