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
//console.log(cliente[chaves[0]]);//comentado para ajudar a visualizar o trecho de baixo
/*
    Esse tipo de notação de colchetes para aessar uma chave/atributo do objeto é valida assim como a notação
de ponto vista anteriormente.
    Funcionaria com uma variavel apenas no lugar do array, porém, pra tanto variavel e array não funciona se
for passado na noação de ponto, na notação de ponto já tem que pegar a chave, para esses casos como de uma
variavel ou array deve-se usar a notação de colchetes.
*/
const chave = "idade";
//console.log(cliente[chave]);//comentado para ajudar a visualizar o trecho de baixo
//console.log(cliente.chave);//dessa forma não vai funcionar

//Agora para printar todos itens doobjeto usando a lista chaves será usado um forEach(), mas não precisa ser só com ele
chaves.forEach(info => console.log(info + ": " + cliente[info]));

//Uma outra forma que pode usar anotaão de colchetes é passar uma string direta, como abaixo
console.log(`O nome do cliente é ${cliente["nome"]} que tem ${cliente["idade"]} anos.`);
//Mas se vai passar o texto da string direto igual acima acessa pela notação de ponto ditero s/string que é melhor

/*
    Quando passa uma chave de objeto que não existe o js não dá msg de erro, ele só retorna undefined no 
resultado, o que pode ser uma dor de cabeça na hora de debugar o codigo, por isso fique atento a esse detalhe.
    Esse detalhe é uma particularidade do js, não quer dizer que ocorre isso em outras lps, o C++ e o Java por
exemplo, eles dão erro de compilação se fizer isso ou algo parecido.
    Isso ocorre em muitas coisas do js que em outras lps dão erro e no js só dá undefined invez de gerar um 
erro ou um alerta de erro, o que dificulta em muito na hora de debugar o codgo, pois você espera que retorne 
um erro e não aparece nenhum erro.
*/