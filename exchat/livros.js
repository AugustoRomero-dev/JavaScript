let listaLivros = [
      { titulo: "O Hobbit", lido: false },
      { titulo: "1984", lido: false },
      { titulo: "Dom Casmurro", lido: false }
    ]

    const listaUL = document.getElementById('livros')
    const contador = document.getElementById('contador')

    // seu código vai aqui embaixo

    listaUL.addEventListener('click', (event) =>{
        const posicaoClicada = event.target.dataset.id
        listaLivros[posicaoClicada].lido = !listaLivros[posicaoClicada].lido //inverte de false pra true

        const xLivros = listaLivros.filter(item => item.lido === true).length

        contador.textContent = `Vc leu ${xLivros} livros hoje`


        
    })