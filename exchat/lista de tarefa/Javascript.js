

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

//teste