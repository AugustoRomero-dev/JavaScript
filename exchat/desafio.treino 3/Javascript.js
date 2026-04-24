let NumerosGeral = []

function Adicionar(){
  let numero = document.getElementById('inum')
  let n = Number(numero.value)
      if(numero.value.length === 0){
        alert('ADICIONE UM NUMERO')
        return

      }
      if(NumerosGeral.includes(n)){
        alert('JA POSSUI ESSE NUMERO')
        return
        
      }
      
      NumerosGeral.push(n)
      numero.value = ''// limpa
      
     

}
function mostrar(){
    let res = document.getElementById('res')
    res.innerHTML = `possui ${NumerosGeral.length} numeros`
}
function Finalizar(){
    
    let res = document.getElementById('res')
    


    PrimeiroN = NumerosGeral[0]

    for(let maior of NumerosGeral){ // maior numero
      if(maior > PrimeiroN){
        PrimeiroN = maior
       
      } 
      
    }
    for(let menor of NumerosGeral){ // menor numero
      if(menor < PrimeiroN){
        PrimeiroN = menor
       
      } 
    } 
    
    
 
}





// primeiro numero > que segundo