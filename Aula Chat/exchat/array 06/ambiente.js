let nomes = ['Ana', 'Carlos', 'João', 'Amanda', 'Bruno']

// nomes cm mais de 5  letras
for(let nome of nomes){
    if(nome.length > 5){
        console.log(nome)
    }
}

//maior num
let numeros = [10, 5, 20, 8, 15]
let maior = numeros[0]
for(let num of numeros){
    if(num > maior){
        maior = num
        console.log(`o maior num e ${num}`)
    }
}