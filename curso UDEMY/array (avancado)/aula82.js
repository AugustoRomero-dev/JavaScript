const nomes = ["Maria", "joao", "eduardo", "gabriel"]

// nomes.splice(indice, delete, elem1, elem2, elem3)
// se colocar (3, 2(quantos remove), "Luiz" (com nome no final adiciona o nome no indice q foi escolhido o 3 nesse caso)  )













////////////////// aula 83 concatenacao de array

const a1 = [1, 2, 3]
const a2 = [4, 5, 6]

const a3 = a1.concat(a2, [7, 8, 9], "luiz") // ou fazer com ...rest
const a3Rest = [...a1, ...a2, "luiz"]


console.log(a3) 
console.log(a3Rest)

