const input = document.querySelectorAll('.tarefa-texto')
const botaoAdd = document.querySelectorAll('.botao')
const listaUL = document.querySelectorAll('.tarefas')

let arrayTarefa = []



function criaTarefa(textInput) {
    const li = document.createElement('li')
    li.innerText = textInput
    listaUL.appendchild(li)
}


botaoAdd.addEventListener('click', function(evento){
    if(!inputTexto) return;
    criaTarefa(input.value);
    


})