let lista = []

function Adicionar(){
    let tarefa = document.getElementById("tarefa")
    let listaHTML = document.getElementById('lista')

    if(tarefa.value.length === 0 ){
        alert('Adicione uma tarefa')
        return
    }
    lista.push(tarefa)

    let item = document.createElement('li')
    item.text = `Tarefa ${tarefa} adicionada`
    listaHTML.appendChild(li)
}