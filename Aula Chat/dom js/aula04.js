let tarefa = document.getElementById("tarefa")
const botao = document.getElementById("botao")
const listaUL = document.getElementById("lista")

let tarefas = []

botao.addEventListener('click', ()=> {
    if(tarefa.value.trim() === ''){
        alert('digite um numero')
        return
    }
    if(tarefas.includes(tarefa.value)){
        alert('numero ja exiiste')
        return
    }
    tarefas.push(tarefa.value)
    tarefa.value = ''

    renderizar()
})

function renderizar(){
    listaUL.innerHTML = "" // Apaga todos os <li> da tela
    tarefas.forEach((item, posicao) => {

    const li = document.createElement("li") // Cria um <li>

    li.textContent = item // Coloca o texto da tarefa
            
            li.addEventListener("click", () => {

            tarefas.splice(posicao, 1) // Remove do array

            renderizar() // Atualiza a tela

        })
     listaUL.appendChild(li) // Mostra o <li> na tela

    })
}