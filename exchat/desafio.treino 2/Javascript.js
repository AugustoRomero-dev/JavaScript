let lista = [] //VARIAVEL GLOBAL

let numero = document.getElementById('inum') //adicionar
let n = Number(numero.value) //adicionar

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
    let numero = document.getElementById('inum') //ADICIONAR
    let n = Number(numero.value) //ADICIONAR
    let resultado = document.getElementById('res') // MOSTRAR

    for(let Nlista in lista){ // QUANTIDADE DE NUMEROS
       
        resultado.innerHTML = `foram digitados ${Ntotal} numeros`
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




   
}