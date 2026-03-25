let numeros = [3, 7, 10, 15, 22, 8]

//mostrar numeros
for(num of numeros){
    console.log(num)
}

console.log('---')
//impares
for(num of numeros){
    if(num % 2 == 1){
       console.log(`${num} é ímpar`)
    }
}

console.log('---')

//dobro de cada numero
for(num of numeros){
    console.log(`${num * 2}`)
}
