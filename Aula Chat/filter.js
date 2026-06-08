const numeros = [5, 12, 8, 20, 3, 15]
const pares = numeros.filter(function(numero){
    return numero % 2 === 0
})
console.log(pares)

const idades = [12, 15, 18, 22, 30]
const maior = idades.filter(function(maioridade){
    return maioridade >= 18
})
console.log(maior)

const nomes = ["Ana", "Augusto", "Pedro", "Li"]
const nome = nomes.filter(function(grande){
    return grande.length > 4
})
console.log(nome)