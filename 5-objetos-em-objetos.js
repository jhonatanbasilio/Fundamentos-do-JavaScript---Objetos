/*
    Desafio - Compondo um objeto
    Adicionar dependentes para um dos clientes cadastrados, com nome, idade e parentesco.
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com",
    telefone: ["98893-3215"]
}

console.log("Objeto cliente original:");
console.log(cliente);

//Add o dependente
cliente.dependente = {
    nome: "Lavinia",
    idade: 19,
    parentesco: "Irmã"
}

console.log("Objeto cliente após add dependentes:");
console.log(cliente);

//Editando algo do dependente.
cliente.dependente.idade = 20;

console.log("Objeto cliente após editar idade do dependente:");
console.log(cliente);
/*
    Todas propriedades e funcionalidades de um objeto funcionam normal mesmo se o objeto existir 
dentro de um outro objeto, porém, para fazer isso deve-se usar o objeto "pai" e chamar o objeto "filho" usando
as notações de ponto ou colchetes e ai chamar a propriedade/chave/atributo que quer ser editado.
    Um exemplo agora de add uma chavede cpf para o dependente e depois remove-la:
*/

cliente["dependente"].cpf = "123456789-12";

console.log("Depedente com o cpf add:");
console.log(cliente.dependente);

//Removendo o cpf do dependente

delete cliente.dependente["cpf"];

console.log("Depedente ap´s remover o cpf:");
console.log(cliente.dependente);