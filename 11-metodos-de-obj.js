/*
    Desafio - Oferta de seguro
    Percorrer um objeto, verificar se existe a chave 'dependenters' e, caso exista, enviar uma mensagem de 
oferta de seguro.

    Vamos utilizar o metodo de objs que é o Object.keys(), que retorna um array a partir das chaves de um obj.
*/
const cliente = {
    nome: "Jhonatan",
    idade: 26,
    cpf: "123.456.789-12",
    email: "jhonatan@email.com",
    telefone: ["98893-3215", "98821-5908"],
    dependentes: [
        {
            nome: "Lavinia",
            idade: 19,
            parentesco: "Irmã"
        },
        {
            nome: "Lala",
            idade: 20,
            parentesco: "Irmã"
        }
    ],
    saldo: 100,
    depositar: function(valor){
        this.saldo += valor;//this. é para apontar pro proprio objeto, só rola dentro dele é claro
    },
    sacar: function(valor){
        this.saldo -= valor;
    }
}

//Um exemplo de uso desse metodo:
//const propsCliente = Object.keys(cliente);
//console.log(propsCliente);
//Ao rodar console.log(propsCliente), ele vai mostrar os nomes de todos atributos/chaves do objeto

function oferecerSeguro(obj){
    const propsCliente = Object.keys(obj);
    if(propsCliente.includes("dependentes")){
        if(obj.dependentes.length != 0){
            console.log(`Oferta de seguro para o ${obj.nome} possivel.`);
        }
        else{
            console.log(`Sem oferta de seguro para o ${obj.nome} possivel.`);
        }
    }

}
oferecerSeguro(cliente);

/*
    Além do Object.keys() que pega as chaves/atributos, tem o Object.values() que pega os valores do objeto
e retorna para um array que nem o keys.
    Tem também o Object.entries() que retorna um array com conjunto de arrays contendo em cada array do
conjunto a chave e seus valores
    Abaixo um exemplo de cada:
*/
console.log("Ex de Object.values()");
console.log(Object.values(cliente));
console.log("\nEx de Object.entries()");
console.log(Object.entries(cliente));