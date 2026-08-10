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

    arrayTarefa.push({texto: item.title, concluida: item.completed})
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

         const remover = document.createElement('BUTTON')
         remover.textContent = 'remover'
         li.appendChild(remover)

         if(item.concluida === true){
             li.style.textDecoration = 'line-through'
         }
        
    })
    const novoArray = arrayTarefa.filter(item => item.concluida === false)
    res.innerHTML = `Voce tem ${novoArray.length} tarefa pendente`
}

listaUL.addEventListener('click', (event)=>{
    const posicaoClicada = event.target.dataset.id
    if(event.target.tagName === 'BUTTON'){
        arrayTarefa.splice(posicaoClicada, 1)
    } else{
        arrayTarefa[posicaoClicada].concluida = !arrayTarefa[posicaoClicada].concluida
    }
    renderizar()
})
    
async function carregarTarefasDaApi() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
    if (!resposta.ok) {
      throw new Error('Não foi possível carregar as tarefas')
    }
    const dado = await resposta.json()

    dado.forEach(item => {
      arrayTarefa.push({texto: item.title, concluida: item.completed})
    })

    renderizar()
  } catch (erro) {
    console.log(erro.message)
  }
}

carregarTarefasDaApi()