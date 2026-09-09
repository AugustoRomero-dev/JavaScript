const input = document.querySelector('.tarefa-texto')
const botaoAdd = document.querySelector('.botao')
const listaUL = document.querySelector('.tarefas')

let arrayTarefa = []



function criaTarefa(textInput) {
    const li = document.createElement('li')
    li.innerText = textInput
    listaUL.appendChild(li)
}

function adicionaArray(inputArray) {
    arrayTarefa.push(inputArray)

    input.value = ''

}


botaoAdd.addEventListener('click', function(evento){
    if(input.value === '') {
        alert('Digite uma tarefa')
        return
        
    }
    criaTarefa(input.value);
    adicionaArray(input.value)

    console.log(arrayTarefa)


    


})