const peso = document.getElementById('peso')
const altura = document.getElementById('altura')
const botao = document.getElementById("Calcular")

const form = document.getElementById("form")


form.addEventListener('submit', function(evento){
     evento.preventDefault()

     const pesoV = Number(peso.value)
    const alturaV = Number(altura.value)

    

    if(!pesoV){
        setResultado('peso invalido', false)
        return
    }
    if(!alturaV) {
        setResultado('altura invalida', false)
        return
    }

    const imc = getIMC(pesoV, alturaV)
    const nivelIMC = getNivelIMC(imc)

    const msg = `Seu imc e ${imc} (${nivelIMC})`

    setResultado(msg, true)
   
})

function getNivelIMC (imc){
    const nivel = ['Abaixo do peso', 'peso normal', 'sobrepeso', 'Obesidade grau 1', 'Obesidade grau 2', 'Obesidade grau 3']

    if (imc >= 39.9) return nivel[5]

    if (imc >= 34.9) return nivel[4]

    if (imc >= 29.9) return nivel[3]

    if (imc >= 24.9) return nivel[2]

    if (imc >= 18.5) return nivel[1]

    if (imc < 18.5) return nivel[0]
}

function getIMC (peso, altura){
    let imc = peso / (altura * altura)
    return imc.toFixed(2)
}

function criaP (){
     const p = document.createElement('p')
    
    return p
}


function setResultado (msg, isValidid) {
    const res = document.getElementById('resultado')
    res.innerHTML = ''
    const p = criaP()
    p.innerHTML = msg
    res.appendChild(p)

} 
   

 
   
