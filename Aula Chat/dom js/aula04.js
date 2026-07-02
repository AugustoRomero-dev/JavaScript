let tarefa = document.getElementById("tarefa")
const botao = document.getElementById("botao")
const listaUL = document.getElementById("lista")

let tarefas = []




botao.addEventListener('click', () =>{
    if(tarefa.value === ''){
        alert('Digite uma tarefa')
        return
    }
    if( tarefas.includes( tarefa.value)){
            alert("valor")
            return
        }


    const li = document.createElement("li")
    li.textContent = tarefa.value

    listaUL.appendChild(li)
    tarefas.push(tarefa.value)

    tarefa.value = ''
      
       
        
})