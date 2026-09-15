

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

    input.value = ''

}

function botaoApagar(listaComBotao){
    const botao = document.createElement('button')
    botao.innerText = 'apagar'
    listaComBotao.appendChild(botao)

    botao.addEventListener('click', function(){
        listaComBotao.remove
        // arrayTarefa.forEach((item, posicao) =>{
        //     posicao = listaComBotao
        //     listaComBotao.splice(posicao, 1)
        // })
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