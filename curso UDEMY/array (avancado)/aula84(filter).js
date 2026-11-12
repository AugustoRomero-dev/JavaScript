// FILTER, MAP, REDUCE, FOREACH
//FILTER = sempre retorna um array cm a msm quantidade ou menos
// MAP = retorna valores diferentes
// REDUCE = serve pra reduzir o array



// retorne numeros maior q 10
const numeros = [5, 50, 80, 1, 2, 3, 20, 8, 11]



function funcaoDoFilter(valor, indice, array){
    return valor > 10
} // ai e so colocar o nome dessa funcao dentro do parentese, ou fazer de forma reduzida

const numerosFiltrados = numeros.filter(valor => valor > 10) // forma reduzida
console.log(numerosFiltrados)



const pessoas = [
    {nome: "Luiz", idade: 62},
    {nome: "MARIA", idade: 23},
    {nome: "EDUARDO", idade: 55},
    {nome: "LETICIA", idade: 19},
    {nome: "ROSANA", idade: 6},
    {nome: "MARCOS", idade: 32}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.idade >= 30 )
const terminaComA = pessoas.filter(obj => obj.nome.toLocaleLowerCase().endsWith("a"))

console.log(pessoasComNomeGrande)
console.log(terminaComA)



///////////////////////////////////////////////////////// MAP

const pessoas1 = [
    {nome: "Luiz", idade: 62},
    {nome: "MARIA", idade: 23},
    {nome: "EDUARDO", idade: 55},
    {nome: "LETICIA", idade: 19},
    {nome: "ROSANA", idade: 6},
    {nome: "MARCOS", idade: 32},
]

//const retornaNome = pessoas1.map(valor => valor.nome)
//const addID = pessoas1.map((obj, indice) => obj.id = indice) 

// usando obj acaba q altera o pessoas1, mas nao e isso q queremos pq o map ele retorna um novo arrray cm valores diferentes! entao pra nao alterar o array principal a gente faz o seguinte

const addID02 = pessoas1.map(function(obj, indice){
    const newOBJ = {...obj}
    newOBJ.id = indice
    return newOBJ
})

console.log(addID02)

