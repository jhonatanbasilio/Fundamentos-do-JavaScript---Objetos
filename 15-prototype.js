/*
    Muitas vezes quando começamos a estudar o JavaScript, ou ouve falar, é muito comum escutar que o 
JavaScript é uma linguagem baseada em protótipos, e que tudo em JavaScript é um objeto.
    Esse codigo vai ser usado via browser, usando o console dele, conhecido como developer tools (normalmente, 
como no Chrome e Mozilla, acessa pelo F12). Vai ser usado ele, pois ele funciona de uma forma um pouco 
diferente do terminal que o visual studio usa.
    O objeto que utilizamos até agora é um objeto literal, que normalmente é declarado uma variavel com nome
e tem os itens do objeto entre {} ou somente o objeto sem a variavel ainda entre {}. Mas existe um outro tipo
de objeto que o JavaScript utiliza para que consigamos criar uma base para tudo que trabalhamos dentro da 
linguagem, sejam objetos, sejam arrays, sejam números.

    No console do navegador criemos um array,atribuimos valores a ele e usamos suas funções, mas vamos tbm
usar a propriedade array.__proto__ como abaixo:
    
    const arr = [1, 2, 3]
    arr.length
    arr.__proto__

    A propriedade proto ele guarda as definições de todo array que nos criamos no js, ele é como uma 
base/modelo que o js trás dentro de tudo que criamos no js, nos dados seja array, obj, n° ou strings. Junto
dessa base que ele cria e nos trás junto das nossas propriedades ele nós dá metodos assossiados a eles.
    Nos conseguimos utilizar tudo devido a esse metodo que fica num obj oculto que ficam dentro dessa 
propriedade __proto__.
    Nele, nós conseguimos ver uma propriedade chamada constructor, que é o construtor desse obj. No ex do
codigo acima do arr, o constructor do arr, esse constructor chama Array() (com A maiusculo msm), então com
essa  propriedade temos um novo meio de declarar esse array, como abaixo:

    const outroArray = new Array([1, 2, 3]);

    Conseguimos também fazer isso com outros tipos de dados, como objetos por exemplo:
    
    const obj = {a:1, b:'abc'}
    obj.__proto__

    Nesse ex tbm tem o constructor, que recebe Object() e nele temos todos metodos de obj visto antes, como o
keys(). Isso tbm é valido para funções, como abaixo:

    function funcao(){
        return 1
    }
    funcao.__proto__

    Nele tem tudo igual antes. Dados primitivos também tem isso, tipo:

    const texto = "Alura"
    texto.__proto__

    OS prototipos servem muito para trabalhar com o conseito de herança, que herda atributos, dados,
propriedades, funções a partir desse prototipo

    Agora que já foi explicado sobre o prototipo, vem o desafio:

    Desafio - Cliente generico
    Gerar uma função que permita a criação de novos clientes a partir de um modelo.
*/
function Cliente(nome, cpf, email, saldo){
    this.nome = nome;
    this.cpf = cpf;
    this.email = email;
    this.saldo = saldo;
    this.depositar = function(valor){
        this.salto += valor;
    }
    this.sacar = function(valor){
        this.saldo -= valor;
    }
}
/*
    Essa função serve como uma função construtora para um objeto de cliente com os atributos acima. Para
criar um objeto de cliente, basta chamar a função como abaixo:
*/
const jhonatan = new Cliente("Jhonatan", "123456789-12", "jhonatan@email.com", 500);
console.log(jhonatan);

/*
    No console de algum navegador, crie a função e depois o objeto e chame o objeto.__proto__, nele o
constructor dele vai ser Cliente(nome, cpf, email, saldo), já se fizer o objeto.__proto__.__proto__ ele
vai retornar o proto de um objeto normal, pois a função Cliente() criou um objeto generico que está
sendo criado como um objeto, mas ao usar ela pra criar um objeto vai retornar ela como construtor.
    Isso só aparece no navegador, no node não dá para ver mas existe normalmente.
*/