let num = [8, 2, 3, 4, 7]

num.sort()
num.push(1)
console.log(num)
console.log(`a array tem ${num.length} numeros`)
console.log(`o primeiro vetor e ${num[0]}`)

let pos = num.indexOf(8)
let antes = num.indexOf(6)
console.log(`o valor 1 esta na posicao ${pos}`)
console.log(`o valor 6 esta na posicao ${antes}`)
console.log(num[5])