/*
    No codigo anterior vimos um exemplo de uso do spread operator, ou sintaxe de espalhamento. Este operador 
copia as propriedades de objetos para outros, “espalhando” os conteúdos. Vamos ver mais alguns e
*/
const fichaGuerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const equipoGuerreiro = {
    espada: "Andúril",
    capa: "capa élfica +2"
}
/*
    Vamos agora tentar juntar esses dois objetos em apenas um, que vamos chamar de personagens. Em um primeiro 
teste, vamos criar um novo objeto literal com { } e passar para este objeto as variáveis de cada personagem:
*/
const guerreiroA = { fichaGuerreiro, equipoGuerreiro }
//console.log(guerreiroA)//comentado para ajudar na legibilidade do console
/*
    O resultado no console não é exatamente o que queremos, pois os objetos ainda estão separados; o nome de
cada variável agora é uma chave e o valor da chave é cada um dos objetos:
*/
const guerreiroB = { ...fichaGuerreiro, ...equipoGuerreiro }
//console.log(guerreiroB)//comentado para ajudar na legibilidade do console
/*
    Importante! Vale notar que, caso a sintaxe de espalhamento seja usada em objetos que tenham 
chaves/propriedades com o mesmo nome, o JavaScript vai sobrescrever o valor destas propriedades à medida que 
encontra novos valores com o mesmo nome de chave. Por exemplo:
*/
const mago = {
    nome: "Gandalf",
    classe: "mago"
}

const guerreiro = {
    nome: "Aragorn",
    classe: "guerreiro"
}
   
const ranger = {
    nome: "Legolas",
    classe: "ranger"
}
/*
    Os três objetos acima têm as mesmas propriedades. Vamos ver o que acontece se tentarmos “espalhar” os 
dados em um único objeto com o spread operator:
*/
const personagens = { ...mago, ...guerreiro, ...ranger }
console.log(personagens)
/*
    O JavaScript sobrescreveu as chaves com o mesmo nome a cada ocorrência, assim o resultado final foi 
somente o último objeto declarado dentro do objeto personagens.

    Apesar de prático, o uso da sintaxe de espalhamento pode gerar bastante processamento, então deve ser 
usado com cuidado em caso de loops ou funções recursivas.

    Também é possível utilizar esta sintaxe com arrays. Você pode conferir mais exemplos neste link: 
https://www.youtube.com/watch?v=f8a-qwKC5yk
*/