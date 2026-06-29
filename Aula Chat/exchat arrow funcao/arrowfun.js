const numeros = [10, 20, 30]

const dobro = numeros.map(item => item * 2)
console.log(dobro)

"(.............)"

const num = [5, 12, 20, 3]
const maior = num.filter(item => item > 10)

console.log(maior)

const usuarios = [
    { nome: "Augusto", email: "augusto@gmail.com", senha: "1234" },
    { nome: "Pedro", email: "pedro@gmail.com", senha: "abcd" },
    { nome: "Maria", email: "maria@gmail.com", senha: "9999" }
]
const usuario01 = usuarios.find(item => item.email === "pedro@gmail.com")
console.log(usuario01)