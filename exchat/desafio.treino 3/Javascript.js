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
    


    let PrimeiroMaaior = NumerosGeral[0]
    let PrimeiroMenor = NumerosGeral[0]
    let SonaNum = 0

    for(let maior of NumerosGeral){ // maior numero
      if(maior > PrimeiroMaaior){
        PrimeiroMaaior = maior
       
      } 
      
    }
    for(let menor of NumerosGeral){ // menor numero
      if(menor < PrimeiroMenor){
        PrimeiroMenor = menor
       
      } 
    } 
    for(let soma of NumerosGeral){ // soma dos numeros
      SonaNum += soma
      
    }
    
    media = SonaNum / NumerosGeral.length // calcula media
    
    
    res.innerHTML = ''
    res.innerHTML += `Maior número: ${PrimeiroMaaior} <br>`
    res.innerHTML += `Menor número: ${PrimeiroMenor} <br>`
    res.innerHTML += `Soma: ${SonaNum} <br>`
    res.innerHTML += `Média: ${media} <br>`
    
   
    
    
 
}





// primeiro numero > que segundo