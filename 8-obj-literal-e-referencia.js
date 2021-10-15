//Vimos anteriormente como é a estrutura de um objeto, com seus pares de chave e valor:
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20"
}
/*
    O exemplo acima é um objeto literal. Um objeto literal é um objeto criado com a notação literal, ou seja: 
uma lista de chave e valores dentro de chaves { }, que atribuímos a uma variável para que o valor possa ser 
acessado depois. Exatamente como no exemplo acima.

    Objetos literais funcionam bem quando queremos ter um objeto único, com seus próprios dados. Isso porque 
um objeto literal sempre aponta para um mesmo local na memória, mesmo se você criar cópias dele. Vejamos o 
código a seguir:
*/

const objPersonagem2 = objPersonagem;
//Se alterarmos apenas o objPersonagem2, o resultado é:
objPersonagem2.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf, o Cinzento
console.log(objPersonagem2.nome) //Gandalf, o Cinzento

/*
    A variável objPersonagem2 não fez uma cópia do objeto original, apenas serviu como referência para o 
objeto original objPersonagem. Assim, qualquer alteração em qualquer um dos objetos altera ambos. Isso porque
o JavaScript, quando trabalha com objetos, acessa os valores deles fazendo referência ao original. mas não 
cria uma cópia. Já o acesso por cópia funciona com tipos primitivos (string, number, booleano, null, symbol).
*/

//Para podermos contornar esse comportamento quando criamos objetos, utilizandos o método Object.create():
objPersonagem.nome = "Gandalf"
const objPersonagem3 = Object.create(objPersonagem)
objPersonagem3.nome = "Gandalf, o Cinzento"

console.log(objPersonagem.nome) //Gandalf
console.log(objPersonagem3.nome) //Gandalf, o Cinzento
/*
    O método Object.create() cria um novo objeto utilizando como protótipo o objeto passado via parâmetro.
    Dessa forma, objPersonagem3 é uma instância diferente de objPersonagem e pode ser trabalhada de forma 
independente.
    Mais exemplos desse método na documentação do link: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/create
*/