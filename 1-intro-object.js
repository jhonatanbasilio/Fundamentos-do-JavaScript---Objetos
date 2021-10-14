/*
    Objetos são criados quando precisa-se armazenar mais de um tipo de informação e dados e que são diferentes.
    Abaixo um exemplo de um objeto que armazena os dados de um cliente, nele deve conter nome, idade, cpf e email. 
    Se fosse em um array não seria possivél armazenar essas informações adequadamente,poderia azer usando matrizes, mas o tipo de dado teria de 
ser tudo string ou numero, já num objeto podemos "declarar variaveis" que são chamadas de atrbutos e esses atributos podem ser todos de tipos 
diferentes e armazenar nesse objeto todas essas informações e dados.
    Com tudo, arrays e objetos podem sim trabalhar juntos, mas isso será abordado mais a frente.
*/

const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com"
}
//Ao declarar uma variavel, se for declararoutras deve por a virgula, só o ultimo que não precisa dela. O objeto fica sempre entre {}.

/*
    Agora que foi exemplificado a criação de um objeto, vem o desafio dessa aula.

    Desafio - Printar infos:
    Acessar as informações do objeto cliente e exibi-las no console.

    Para acessar os dado, usa o nome do objeto e usa o ponto tipo assim: cliente.nome
*/

console.log(`O nome do cliente é ${cliente.nome}, ele tem ${cliente.idade} anos`);

/*
    Mesmo sendo um objeto, seus atributos ainda possuem as propriedades do seu tipo, logo, os metodos daquele tipo, como por ex os metodos de
uma string, ainda podem ser usados, mas lembrando que para hamar aquele atributo tem que ser nome-do-objeto.-nome-do-atributo.
    Abaixo um exemplo de uso do metodo substring() do tipo string no atributo CPF para que exiba apenas os 3 primeiros digitos do CPF.
    Esse metodo pega e retorna uma parte da string que é definida na sua chamada. o 1° parametro é onde vai começar e o 2° é quantos indices
vão ser retornados apartir do primeiro parametro, sendo assim, como abaixo ele começa no indice 0 e vai andar 3 indices, que serão os indices 0,
1 e 2.
*/

console.log(`Os primeiros digitos do CPF é ${cliente.cpf.substring(0,3)}`);