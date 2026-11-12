
/* foi oq eu fiz
let numeros = [5, 8, 12, 3, 20, 7, 2, 23, 15]
numeros.sort((a, b) => a - b)
for(let num of numeros){
    if(num > 10){
        if(num%2 == 0){
            console.log(`${num} e par`)

        } else{
            console.log(`${num} e impar`)
        }
    }
}
*/

let numeros = [5, 8, 12, 3, 20, 7, 2, 23, 15]

// 1. Números > 10
for (let num of numeros) {
    if (num > 10) {
        console.log(num)
    }
}

console.log('---')

// 2. Números pares
for (let num of numeros) {
    if (num % 2 == 0) {
        console.log(num)
    }
}

console.log('---')

// 3. Soma total
let soma = 0

for (let num of numeros) {
    soma += num
}

console.log(`Soma: ${soma}`)