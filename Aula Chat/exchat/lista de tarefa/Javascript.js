let lista = [] // Array que armazena todas as tarefas

function Adicionar() {
    const input = document.getElementById('tarefa') // Pega o input pelo id
    const valorInput = input.value // Pega o valor digitado no input

    if (valorInput.length === 0) { // Verifica se o input está vazio
        alert('DIGITE UMA TAREFA') // Mostra alerta
        return // Para a execução da função
    }

    if (lista.includes(valorInput)) { // Verifica se a tarefa já existe
        alert('ESTA ATIVIDADE JÁ EXISTE') // Mostra alerta
        return // Interrompe a função
    }

    lista.push(valorInput) // Adiciona a tarefa no array

    input.value = "" // Limpa o input depois de adicionar

    renderizar() // Atualiza a lista na tela
}
function renderizar() {
    let inputLista = document.getElementById('lista') // Pega a lista no HTML
    let contador = document.getElementById("contador") // Pega o contador

    inputLista.innerHTML = "" // Limpa a tela para evitar duplicação

    lista.forEach(function(item, posicao) { // Percorre cada item do array
        let li = document.createElement("li") // Cria um elemento <li>

        li.textContent = item // Coloca o texto da tarefa no <li>

        li.onclick = function() { // Executa ao clicar na tarefa
            lista.splice(posicao, 1) // Remove 1 item da posição clicada
            renderizar() // Atualiza a tela
        }

        inputLista.appendChild(li) // Adiciona o <li> na lista do HTML
    })

    contador.textContent = `Você tem ${lista.length} tarefa(s)` // Mostra quantidade de tarefas
}