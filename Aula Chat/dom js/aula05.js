const tarefas = document.getElementById('tarefa')
const botao = document.getElementById("botao")
const listaUL = document.getElementById("lista")
const res = document.getElementById('res')

let arrayTarefa = []

botao.addEventListener('click', ()=>{
    if(tarefas.value.trim() === ''){
        alert('Digite uma tarefa')
        return
    }
    if(arrayTarefa.includes(tarefas.value)){
        alert('Essa tarefa ja existe')
        return
    }

    arrayTarefa.push(tarefas.value)
    tarefas.value = ''

    renderizar()
})

function renderizar(){
    listaUL.innerHTML = ''
    arrayTarefa.forEach((item, posicao) =>{
        const li = document.createElement('li')
        li.textContent = item
        li.dataset.id = posicao
        listaUL.appendChild(li)
    })

    res.innerHTML = `Vc pososui ${arrayTarefa.length} tarefa`
}

listaUL.addEventListener('click', (event)=>{
    const posicaoClicada = event.target.dataset.id
    arrayTarefa.splice(posicaoClicada, 1)
    renderizar()
})