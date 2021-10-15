/*
    Desafio - Lista de telefones
    Acessar alistat de números de telefone das pessoas cadastradas no sistema e imprimi-la, verificando se há
mais de um número em algum cadastro
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com",
    telefone: ["98893-3215", "3531-4100"]
}

console.log("Os telefones de cliente:");
cliente.telefone.forEach(fone => console.log(fone));

//Adicionando um outro telefone
cliente.telefone.push("98821-5908");

console.log("Os telefones de cliente adicionado um 3° n°:");
cliente.telefone.forEach(fone => console.log(fone));

//Removendo o 2° telefone:
cliente.telefone.splice(1,1);

console.log("Os telefones de cliente após ma nova atualização na lista:");
cliente.telefone.forEach(fone => console.log(fone));