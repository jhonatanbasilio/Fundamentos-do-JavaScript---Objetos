//Temos o obj abaixo:
/*
const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com"
}*/
/*
    No js as propriedades são expressas como strings e podem ser manipuladas em tempo de execução, o que 
confere uma flexibilidade muito grande na hora de escrever código . Vamos adicionar dinamicamente uma série 
de tipos de quadrinhos à lista de tipos do objeto colecionador:
*/
const colecionador = {
    nome: "João do Gibi",
    idade:41,
    tipocolecao: ["quadrinhos"],
    contato: "joao@email.com",
    adicionarTipo:function(propriedade,tipo){
        this[propriedade].push(tipo)
    }
}
console.log(colecionador);
//Depois vamos adicionar a definição do objeto com o seguinte código:
for(i = 0; i < 4; i++) {
    colecionador.adicionarTipo("tipocolecao","HQ"+i)
}
console.log(colecionador);
/*
    Usando uma estrutura for conseguimos manipular a propriedade tipocolecao do objeto colecionador, por meio 
da função adicionarTipo(). Usamos a notação de colchetes junto à palavra reservada this, que faz referência ao 
próprio objeto. Desse modo, fazemos uso do objeto como um array associativo.

    É importante que conheçamos as diversas maneiras que o JavaScript possui para acessarmos os valores das 
propriedades de um objeto. Uma dessas formas é usando o conceito de array associativo.
*/