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
    let listaHTML = document.getElementById("lista")
    let contador = document.getElementById("contador")

    listaHTML.innerHTML = ''

   lista.forEach(function(tarefa, posicao){
        let item = document.createElement('li')
        item.textContent = tarefa

        item.onclick = function(){
            lista.splice(posicao, 1)
            
            renderizar()

            
        }
        listaHTML.appendChild(item)
   });


    
    contador.textContent = `Você tem ${lista.length} tarefa`
    //deu errado
}
