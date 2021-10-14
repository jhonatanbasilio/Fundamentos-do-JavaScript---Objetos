/*
    Desafio - Acessar chaves.
    Consultar um objeto utilizando uma lista de chaves relativas a informações de clientes gerada pelo sistema e printar o resultado na tela.

    Acontece que nem sempre dá para fixar no código, qual que é a chave que queremos acessar, ao contrário que já fizemos anteriormente, que sabíamos que as nossas chaves eram nome, CPF, etc.
    Uma possibilidade é usar a notação de colchete, que é muito parecida com a notação utilizada no array, onde você passa a chave como uma variável, aí consultamos esse objeto, essa chave, através dessa variável que vamos estar passando.
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com"
}

//Através do array abaixo, vamos consultar o objeto cliente para procurar o atributo que corresponde ao nome
const chaves = ["nome", "idade", "cpf", "email"];
//Como o nome no array está no indice 0, ao consultar o objeto usaremos o indice 0 do array
console.log(cliente[chaves[0]]);
/*
    Esse tipo de notação de colchetes para aessar uma chave/atributo do objeto é valida assim como a notação
de ponto vista anteriormente.
    Funcionaria com uma variavel apenas no lugar do array, porém, pra tanto variavel e array não funciona se
for passado na noação de ponto, na notação de ponto já tem que pegar a chave, para esses casos como de uma
variavel ou array deve-se usar a notação de colchetes.
*/
const chave = "idade";
console.log(cliente[chave]);
//console.log(cliente.chave);//dessa forma não vai funcionar
//fonte inacabado