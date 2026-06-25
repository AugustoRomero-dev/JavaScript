const numeros50 = [10, 80, 25, 60, 5, 100, 42]

const maior50 = numeros50.filter(item => item > 50)
console.log(maior50)

"..............."

const PRImenor10 = [25, 18, 12, 9, 3, 1]

const menor10 = PRImenor10.find(item => item < 10)
console.log(menor10)

"..............."

const produtosLoja = [
    { nome: "Mouse", preco: 80 },
    { nome: "Caneta", preco: 5 },
    { nome: "Teclado", preco: 150 }
]
const precoMenor20 =  produtosLoja.some(item => item.preco < 20)
console.log(precoMenor20)

"..............."

const alunos01 = [
    { nome: "João", nota: 8 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 9 }
]
const media7 = alunos01.every(item => item.nota >= 7)
console.log(media7)

"..............."

const produtos = ["Mouse", "Teclado", "Monitor"]
const novoArray = produtos.map(item => ({produto:item}))
console.log(novoArray)

"..............."

const alunos02 = [
    { nome: "Ana", nota: 8 },
    { nome: "Carlos", nota: 5 },
    { nome: "Pedro", nota: 7 }
]
const statusAlunos = alunos02.map(item => ({
    nome: item.nome,
    status: item.nota >= 7 ? 'APROVADO(a)' : 'REPROVADO(a)'
}))
console.log(statusAlunos)

"..............."

const usuarios = [
    { nome: "João", idade: 15 },
    { nome: "Maria", idade: 22 },
    { nome: "Pedro", idade: 17 },
    { nome: "Ana", idade: 30 }
]
const login18Mais = usuarios
    .filter(item => item.idade >= 18)
    .map(item => ({
        nome:item.nome,
        podeEntrar: true
    }))
console.log(login18Mais)

"..............."

const produtos100 = [
    { nome: "Mouse", preco: 80 },
    { nome: "Teclado", preco: 150 },
    { nome: "Monitor", preco: 900 },
    { nome: "Mousepad", preco: 50 }
]
const pro100 = produtos100
    .filter(item => item.preco > 100)
    .map(item => ({
        nome: item.nome,
        premium: true
    }))
    console.log(pro100)
