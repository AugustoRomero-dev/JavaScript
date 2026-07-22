let itens = [
      { produto: "Café", noCarrinho: true },
      { produto: "Açúcar", noCarrinho: true },
      { produto: "Leite", noCarrinho: true }
    ]

    const listaUL = document.getElementById('carrinho')
    const resumo = document.getElementById('resumo')

    function renderizar() {
      listaUL.innerHTML = ''
      itens.forEach((item, posicao) => {
        const li = document.createElement('li')
        li.textContent = item.produto
        li.dataset.id = posicao

        const botaoRemover = document.createElement('button')
        botaoRemover.textContent = 'remover'
        li.appendChild(botaoRemover)

        listaUL.appendChild(li)
      })

      // item.length. quantidade
    }

    // seu addEventListener vai aqui

    renderizar()