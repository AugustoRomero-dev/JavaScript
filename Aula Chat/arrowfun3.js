const produtos = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Mousepad", preco: 50 }
]

const maior100 = produtos.filter(item => item.preco >= 100)
console.log(maior100)


"..............."


const umProduto = produtos.find(item => item.nome === "Monitor")
console.log(umProduto)

"..............."

const alunos = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 5 },
    { nome: "Pedro", nota: 7 }
]
const maiorNota = alunos.some(item => item.nota < 6)
console.log(maiorNota)

"..............."

const usuarios = [
    { nome: "Ana", idade: 20 },
    { nome: "Carlos", idade: 25 },
    { nome: "Pedro", idade: 17 }
]
const mais18 = usuarios.every(item => item.idade >= 18)
console.log(mais18)

"..............."

const FilterMap = produtos
    .filter(item => item.preco >= 100)
    .map(item => ({
        nome: item.nome,
        caro: true
}))

console.log(FilterMap)