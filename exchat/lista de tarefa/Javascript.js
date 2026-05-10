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