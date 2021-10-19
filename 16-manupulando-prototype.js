/*
    Desafio - Cliente poupança
    Aproveitar o Cliente que já existe e criar a partir dele um novo ipo de cliente para contas poupança.
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

//Vamos criar uma nova função para esse tipo de cliente chamando o Cliente() usando o metodo call():

function ClientePoupanca(nome, cpf, email, saldo, saldoPoup){
    Cliente.call(this, nome, cpf, email, saldo, saldoPoup);
    //Aqui o obj que estamos criando vai herdar tudo que tem em cliente, inclusive as funções.
    //O 1° parametro é o proprio obj, o resto é o que o obj que está sendo chamado pede
    this.saldoPoup = saldoPoup;
}
//Agora tem um novo construtor, vamos chama-lo:
const jhonatan = new ClientePoupanca("Jhonatan", "123456789-12", "jhonatan@email.com", 500, 1000);
console.log(jhonatan);
/*
    Ele possui tudo de Cliente + as funções e atributos extras. Porém, o depositar ainda deposita no saldo 
normal, vamos então add na função que cria o obj ClientePoupanca uma função para depositar no saldo da
poupança também.
    Vamos add a função no prototipo usando prototype para add no prototipo todo e não só em um dos clientes
de poupança já criado. Isso não vai add em Cliente, mas se criar em Cliente, como o ClientePoupanca herda
de Cliente ele vai herdar essa nova função.
*/
ClientePoupanca.prototype.depositaPoup = function(valor){
    this.saldoPoup += valor;
}
console.log("Saldo da poupança de " + jhonatan.nome + " é de " + jhonatan.saldoPoup + " reais");
jhonatan.depositaPoup(500);
console.log("Saldo da poupança de " + jhonatan.nome + " é de " + jhonatan.saldoPoup + " reais");