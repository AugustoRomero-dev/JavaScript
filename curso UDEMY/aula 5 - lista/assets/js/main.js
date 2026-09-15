

const input = document.querySelector('.tarefa-texto')
const botaoAdd = document.querySelector('.botao')
const listaUL = document.querySelector('.tarefas')

let arrayTarefa = []



function criaTarefa(textInput) {
    const li = document.createElement('li')
    li.innerText = textInput
    listaUL.appendChild(li)
    return li
}

function adicionaArray(inputArray) {
    arrayTarefa.push(inputArray)
    console.log(arrayTarefa)

    input.value = ''

}

function botaoApagar(listaComBotao){
    const botao = document.createElement('button')
    botao.innerText = 'apagar'
    listaComBotao.appendChild(botao)

    botao.addEventListener('click', function(){
        let posicao = arrayTarefa.indexOf(listaComBotao.innerText)
         arrayTarefa.splice(posicao, 1)
         listaComBotao.remove()
        //  arrayTarefa.forEach((item, indice) =>{
        //     let posicao = indice
        //     arrayTarefa.splice(indice, 1)
        //  })
    })

}
botaoAdd.addEventListener('click', function(evento){
    if(input.value === '') {
        alert('Digite uma tarefa')
        return
        
    }
    let li = criaTarefa(input.value);
    adicionaArray(input.value)
    botaoApagar(li)

    


    


})