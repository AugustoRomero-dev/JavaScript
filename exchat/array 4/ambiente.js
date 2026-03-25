let numeros = [5, 12, 9, 21, 30, 4]

//num > 10
for(let num of numeros){
    if(num > 10){
        console.log(num)
    }
}

console.log('...')

//divisivel por 3

for(let num of numeros){
    if(num % 3 == 0){
        console.log(num)
    }
}

console.log('...')


//quantos num sao pares
let contador = 0
for(let num of numeros){
    if(num % 2 == 0){
        contador++
        
       
    }
}
console.log(`Quantidade de números pares: ${contador}`)
