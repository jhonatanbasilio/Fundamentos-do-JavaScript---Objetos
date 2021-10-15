/*
    Desafio - Adicionando campos
    Adicionar informações importantes que ainda estão faltando, como telefone e também seus valores.
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com"
}

console.log(`O objeto cliente base:`);
console.log(cliente);

//Adicionando o campo/chave/atributo telefone:
cliente.telefone = "8893-3215";
console.log(`O objeto cliente após adicionar o telefone:`);
console.log(cliente);
/*
    Sim, é só isso, mas ao add algo que já existe no objeto, como por exemplo add o telefone com essa chave
já existindo no objeto cliente o valor dessa chava vai ser substituido.
*/
cliente.telefone = "9 8893-3215";
console.log(`O objeto cliente após alterar o telefone:`);
console.log(cliente);

console.log("\n\n");
/*
    Agora sobre remover algo do objeto, vamos utilizar outros objetos a parte do desafio acima e considerar o 
objeto abaixo:
*/
const objPersonagem = {
    nome: "Gandalf",
    classe: "mago",
    nivel: "20",
    aliado: {
      nome: "Saruman",
      classe: "mago"
    },
    status: "desaparecido"
}
console.log("Objeto objPersonagem:");
console.log(objPersonagem);

//Se quisermos, por exemplo, remover a propriedade aliado, podemos utilizar o operador delete:
console.log("Chave aliado antes de ser removida:");
console.log(objPersonagem.aliado);

delete objPersonagem.aliado;

console.log("Chave aliado após ser removida:");
console.log(objPersonagem.aliado); //undefined

//Também é possível utilizar a notação de colchetes:
console.log("Status antes de ser removido:");
console.log(objPersonagem.status);

delete objPersonagem["status"];

console.log("Status após ser removido:");
console.log(objPersonagem.status); //undefined
/*
    Importante! Veja que o delete remove do objeto o valor da propriedade, assim como a chave.
    Após remover as duas propriedades acima, o objeto agora está desta forma:
    
    {
        nome: "Gandalf",
        classe: "mago",
        nivel: "20",
    }

    O valor de retorno do operador delete é um booleano, ou seja, retorna sempre true ou false para cada 
operação. Porém, é importante notar que ele não retorna false se tentarmos remover, por exemplo, uma 
propriedade que não existe no objeto:
*/
const delProp = delete objPersonagem.aliado;
const delPropInexistente = delete objPersonagem["endereco"];

console.log("Valor retornado pelo delete após tentar deletar aliado com aliado já não existindo");
console.log(delProp); //true

console.log("Valor retornado após tentar deletar uma chave que não existe no objeto:");
console.log(delPropInexistente) //true

/*
    O operador delete não remove propriedades herdadas de outro objeto, e aí sim, neste caso, retornará false 
se tentarmos fazer isso. Vamos entender melhor o tema “heranças” mais adiante no curso.
*/