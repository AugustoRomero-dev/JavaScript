let lista = []

function Adicionar(){

    let numero = document.getElementById('inum')
    let n = Number(numero.value)
    let res = document.getElementById('res')

    if(numero.value.length === 0){
        alert('ADICIONE UM NUMERO PRA COMECAR')
        return
    }
    if( n < 1 || n > 100 ){ 
        alert('ADICIONE NUMEROS ENTRE 1 E 100')
        return
    }
    if(lista.includes(n)){
        alert('NUMERO REPETIDO')
        return
    }
    
    lista.push(n) //add numero na lista
    numero.value = '' // limpa input

    res.innerHTML += `Valor ${n} Adicionado <br>`
    


}
function Finalizar(){


    let res = document.getElementById('res')

     numero.value = '' // limpa input
    if(lista.length === 0){
       alert('Adicione números antes de finalizar')
        return
    }

    let maior = lista[0] //primeiro numero da array
    let menor = lista[0]
    let soma = 0

    for(let num of lista){ //maior e menor numero da lista
        if(num > maior){
            maior = num
        }
        if(num < menor){
            menor = num
        }
        
        soma += num // soma dos numeros
        
        
    } 

    let media = soma / lista.length // media
        

        res.innerHTML = ''
        res.innerHTML += `Esse sistema possui ${lista.length} numeros <br>`
        res.innerHTML += `O maior  numero e ${maior}<br>`
        res.innerHTML += `O menor  numero e ${menor}<br>`
        res.innerHTML += `A soma e ${soma}<br>`
        res.innerHTML += `A media e ${media}<br>`
   
}