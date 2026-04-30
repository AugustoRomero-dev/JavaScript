let lista = []

function Adicionar(){
    let tarefa = document.getElementById("tarefa")
    let listaHTML = document.getElementById('lista')
    let cont = document.getElementById('contador')

    if(tarefa.value.length === 0 ){ // input vazio nao aceita
        alert('Adicione uma tarefa')
        return
    }
    //if(lista.includes(tarefa)){ // verifica item igual
        //alert('ja possui esse item na sua lista')
       // return
    //}
    lista.push(tarefa)
    tarefa.value = ''//limpa input

    let item = document.createElement('li') // cria um <li> (item de lista) na memória

    item.textContent = `Tarefa ${tarefa} adicionada`//coloca texto dentro do <li>

    listaHTML.appendChild(item)
    //listaHTML.innerHTML = `possui ${lista.length} tarefas`
    item.innerText = `${tarefa}`
}