const nomes = ["Augusto", "Pedro", "Maria"]
const novoArray = nomes.map(item => ({nome:item}))

console.log(novoArray)
"---------------------------"


const pessoas = [
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 17 }
]
const maior = pessoas.map(item =>({
    nome: item.nome,
    situacao: item.idade >= 18 ? "maior de idade" : "menor de idade"
}))

console.log(maior)
"---------------------------"


const produtos = ["Mouse", "Teclado", "Monitor"]

const ordem = produtos.forEach((item, posicao) => {
    console.log(posicao + "-" + item)
})
