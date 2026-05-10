

let lista = []

function Adicionar(){
    let tarefa = document.getElementById("tarefa")

    let texto = tarefa.value

    if(texto.length === 0){
        alert('Adicione uma tarefa')
        return
    }

    lista.push(texto)
    tarefa.value = ''

    renderizar()
}
function renderizar(){
    let inputLista = document.getElementById('lista')
    let contador = document.getElementById("contador")

    inputLista.innerHTML = ""
    lista.forEach(function(item, posiçao){
        let li = document.createElement("li")
        li.textContent = tarefa
        li.onclick = function(){
            lista.splice(posiçao, 1)
            renderizar()
        }
        inputLista.appendChild(li)
    });     
    contador.textContent = `Você tem ${lista.length} tarefa`
}
