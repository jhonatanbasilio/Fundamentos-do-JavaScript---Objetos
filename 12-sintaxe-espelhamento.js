/*
    Desafio - Lista de dependentes
    Extrair de uma listagem de clientes apenas as informações de dependentes e montar uma lista unica, para 
analise de outros departamentos
*/
const clientes = [
    {
        nome: "Cliente A",
        idade: 40,
        cpf: "123.456.789-12",
        email: "a@email.com",
        telefone: ["99874-5612"],
        dependentes: [
            {
                nome: "Dependente A1",
                idade: 15,
                parentesco: "Filho"
            },
            {
                nome: "Dependente A2",
                idade: 12,
                parentesco: "Filha"
            }
        ]
    },
    {
        nome: "Cliente B",
        idade: 29,
        cpf: "444.456.895-12",
        email: "b@email.com",
        telefone: ["91234-5678", "3531-1234"],
        dependentes: [
            {
                nome: "Dependente B1",
                idade: 4,
                parentesco: "Filho"
            }
        ]
    }
];
//declarador de espelhamento é ..., abaixo exemplo

//const listaDependentes = [...clientes[0].dependentes, ...clientes[1].dependentes];
const listaDependentes = [];
for (let i = 0; i < clientes.length; i++) {
    listaDependentes.push(...clientes[i].dependentes);
}
//console.log(listaDependentes);//Assim vai mostrar um array com cada indice sendo um dependente
//Pra ficar mais bonito na tela, vamos usar o metodo abaixo, que exibe como uma tabela
console.table(listaDependentes);