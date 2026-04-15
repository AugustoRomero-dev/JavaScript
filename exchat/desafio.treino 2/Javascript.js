let lista = [] //VARIAVEL GLOBAL

function Adicionar(){
    let numero = document.getElementById('inum') //adicionar
    let n = Number(numero.value) //adicionar

    if(numero.value.length === 0){ //verifica input vazio
        alert('ERRO! DIGITE UM NUMERO')
        return

    } else if(lista.includes(n)){ // verifica numero repetido
        alert('esse numero ja existe')
        return

    } else{
        lista.push(n) // guarda no array  
        numero.value = '' // // limpa antes 
    }
}


function mostrar(){
    let resultado = document.getElementById('res')

    for(let num of lista){
         resultado.innerHTML += `${num}<br>`

    }
}


function Finalizar(){
    let resultado = document.getElementById('res')

    if (lista.length === 0){
        alert('Adicione números antes!')
        return
    }

    resultado.innerHTML = ''

    // quantidade
    let total = lista.length

    // maior
    let maior = lista[0]

    // menor
    let menor = lista[0]

    // soma
    let soma = 0

    for (let num of lista){
        soma += num

        if (num > maior){
            maior = num
        }

        if (num < menor){
            menor = num
        }
    }

    let media = soma / total

    resultado.innerHTML += `Total: ${total} <br>`
    resultado.innerHTML += `Maior: ${maior} <br>`
    resultado.innerHTML += `Menor: ${menor} <br>`
    resultado.innerHTML += `Soma: ${soma} <br>`
    resultado.innerHTML += `Média: ${media} <br>`
}
/*function Finalizar(){
    let numero = document.getElementById('inum') //ADICIONAR
    let n = Number(numero.value) //ADICIONAR
    let resultado = document.getElementById('res') // MOSTRAR

    for(let Nlista in lista){ // QUANTIDADE DE NUMEROS
       
        resultado.innerHTML = `foram digitados ${Nlista} numeros`
    }




    let primeiroN = lista[0] // MAIOR NUMERO
    for(let num of lista){
        if(num > primeiroN){
            primeiroN = num

            resultado.innerHTML = `maior numerero e o ${primeiroN} `
        }
    }

    let ultimoN = lista[0] // MENOR NUMERO
    for(let num of lista){
        if(num < ultimoN){
            ultimoN = num

            resultado.innerHTML = `maior numerero e o ${ultimoN} `
        }
    }

    for(let num of lista){ // soma total
        let soma = lista[0] += num
        resultado.innerHTML = `A soma e ${soma}`
    }

     for(let num of lista){ // MEDIA
        let soma = lista[0] += num
        let media = soma % 2
        resultado.innerHTML = `A soma e ${media}`
    }





   
}*/