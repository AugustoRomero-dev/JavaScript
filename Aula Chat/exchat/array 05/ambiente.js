let numeros = [10, 5, 20, 8, 15]

// maior numero
let primeiroN = numeros[0]
for (let num of numeros){
    if(num > primeiroN){
        primeiroN = num
        
    }
}
console.log(`maior nuermo: ${primeiroN}`)

console.log('...')



// menor n
let menorN = numeros[0]
for (let num of numeros){
    if(num < menorN){
        menorN = num
       
    }
}
console.log(`menor numero: ${menorN}`)

console.log('...')





// soma
let soma = 0
for (let num of numeros){
   
    soma += num
    
}
console.log(`a soma total e: ${soma}`)

