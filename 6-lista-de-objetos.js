/*
    Desafio - Lista de dependentes
    Verificar a melhor formar de agregar a informação de um novo dependente ao objeto cliente.

    Esse seria o objeto cliente contendo dependente:
    const cliente = {
        nome: "Jhonatan",
        idade: 26,
        cpf: "123.456.789-12",
        email: "jhonatan@email.com",
        telefone: ["98893-3215"],
        dependente: {
            nome: "Lavinia",
            idade: 19,
            parentesco: "Irmã"
        }
    }
    Porém, queremos que haja mais de um dependente, então o objeto cliente será criado da seguinte forma:
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com",
    telefone: ["98893-3215"],
    dependentes: [{
        nome: "Lavinia",
        idade: 19,
        parentesco: "Irmã"
    }]
}

console.log("Objeto original:");
console.log(cliente);

//Assim depedentes é um array de objetos e assim funções de arrays funções nele, ex, add um novo dependente
cliente.dependentes.push({
    nome: "Lala",
    idade: 20,
    parentesco: "Irmã"
})

console.log("Objeto com mais um novo dependente:");
console.log(cliente);

/*
    Agora podemos usar o array de dependentes e nos atributos e chaves dele utilizando as propriedades, metodos
e funções de arrays e de objetos.
    Será filtrado qual o dependente mais novo e exibido o nome dele:
*/

function maisNovo(dependente){
    let idade = dependente[0].idade;
    let indice = 0;
    for(let i = 0; i < dependente.length; i++){
        if(idade < dependente[i].idade){
            idade = dependente[i].idade;
            console.log("Entrou");
            indice = i;
        }
    }
    return dependente[indice];
}
const depedenteMaisNovo = maisNovo(cliente.dependentes);
console.log("O dependente mais novo é: " + depedenteMaisNovo.nome);
