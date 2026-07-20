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

    arrayTarefa.push({texto:tarefas.value, concluida:false})
    tarefas.value = ''

    renderizar()
})

function renderizar(){
    listaUL.innerHTML = ''
            arrayTarefa.forEach((item, posicao) =>{
                const li = document.createElement('li')
                li.textContent = item.texto
                li.dataset.id = posicao
                listaUL.appendChild(li)

                // botao de apagar
                const lixeira = document.createElement('BUTTON')
                lixeira.textContent = 'apagar'
                li.appendChild(lixeira)
                //

                if(item.concluida === true){
                    li.style.textDecoration = 'line-through'
                }
            })
    

    res.innerHTML = `Vc pososui ${arrayTarefa.length} tarefa`
}

listaUL.addEventListener('click', (event) => {
    const posicaoClicada = event.target.dataset.id

    if (event.target.tagName === 'BUTTON') {
        arrayTarefa.splice(posicaoClicada, 1)
    } else {
        arrayTarefa[posicaoClicada].concluida = !arrayTarefa[posicaoClicada].concluida
    }

    renderizar()
})