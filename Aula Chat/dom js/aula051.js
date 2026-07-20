const tarefas = document.getElementById('tarefa')
const botao = document.getElementById("botao")
const listaUL = document.getElementById("lista")
const res = document.getElementById('res')

let arrayTarefa = []

botao.addEventListener('click', ()=>{
    if(tarefas.value.trim() === ''){
        alert('Digite um numero')
        return
    }
    if(arrayTarefa.includes(tarefas.value)){
        alert('esse numero ja existe')
        return
    }
    arrayTarefa.push({texto:tarefas.value, Concluida: false})
    //consigo colocar um objeto ao inves so do item
    tarefas.value = ''

    renderizar()
})

function renderizar(){
    listaUL.innerHTML = ''
    arrayTarefa.forEach((item, posicao)=>{
        const li = document.createElement('li')
        li.textContent = item.texto
        li.dataset.id = posicao
        listaUL.appendChild(li)

        const botao = document.createElement('BUTTON')
        li.appendChild(botao)
        botao.textContent = 'Remover'

        if(item.concluida === true){
                    li.style.textDecoration = 'line-through'
            }
    })
    
}
listaUL.addEventListener('click', (event)=>{
    const posicaoClicada = event.target.dataset.id
    if(event.target.tagName === 'BUTTON'){
        arrayTarefa.splice(posicaoClicada, 1)
    } else {
        arrayTarefa[posicaoClicada].concluida = !arrayTarefa[posicaoClicada.concluida]
    }
    renderizar()
})
