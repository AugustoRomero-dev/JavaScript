

let lista = []

function Adicionar(){
    const input = document.getElementById('tarefa')
    const ValorInput = input.value

    if(ValorInput.length === 0){
        alert('DIGITE UM NMR')
        return
    }
    if(lista.includes(ValorInput)){
        alert('ESTA ATIVIDADE JA EXYISTE')
        return
    }
    lista.push(ValorInput)
    
    input.value = ""
    renderizar()
}
function renderizar(){
<<<<<<< HEAD
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
=======
    let listaHTML = document.getElementById('lista')
    let contador = document.getElementById('contador')

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

} // foi
>>>>>>> 86c9b52096376202861bf67e44e41350bc09bf02
