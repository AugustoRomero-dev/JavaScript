let lista = [] // ARRAY GLOBAL

function Adicionar(){

    
    let numeros = document.getElementById('inum')
    let n = Number(numeros.value)
    
    if(numeros.value.length === 0 ){ //verifica input vazio
        alert('[ERRO] Digite um numero')
        return

    } else if(lista.includes(n)) { // verifica numero repetido
        alert('NUMERO JA ADICIONADO')
        return
      
       
    } else{
         lista.push(n) // guarda no array  
         numeros.value = '' // // limpa antes 
    }
     

}

function mostrar(){
    let resultado = document.getElementById('res')

    resultado.innerHTML = '' // limpa antes

    for (let num of lista){
        resultado.innerHTML += `${num} <br>`
    }
}

function Finalizar(){
    
}