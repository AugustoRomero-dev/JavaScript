let numeros = [2, 5, 8, 11, 14, 7, 6]
//maior que 7
for(num of numeros){
    if(num > 7){
        console.log(`Esses numeros sao maiores que sete: ${num}`)
    }
}

console.log('...')
//impares
let impar = 0
for(num of numeros){
    if(num % 2 !== 0){
        impar++
             
    }
    
}
console.log(`Esses numeros sao impares: ${impar}`)
//soma par
console.log('...')
let soma = 0
for(num of numeros){
    if(num % 2 === 0){
        soma += num
        
       
             
    }
    
}
console.log(` soma ${soma}`)




