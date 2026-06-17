const numeros = [10, 20, 30, 55, 80]
const maior = numeros.some(function(item){
    return item > 50
})
console.log(maior)

const idades = [18, 22, 30, 19]
const maioridade = idades.every(function(item){
    return item >= 18
})
console.log(maioridade)