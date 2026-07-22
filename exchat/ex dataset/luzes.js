 let estadoLuzes = [
      { comodo: "Sala", ligada: false },
      { comodo: "Cozinha", ligada: false },
      { comodo: "Quarto", ligada: false }
    ]

    const listaLuzes = document.getElementById('luzes')

    // seu código vai aqui embaixo
    listaLuzes.addEventListener('click', (event)=>{
        const posicaoClicada = event.target.dataset.id 
        //if(estadoLuzes[posicaoClicada].ligada = false){
            estadoLuzes[posicaoClicada].ligada = !estadoLuzes[posicaoClicada].ligada
        //} nao precisa do if, so inverter a posicao
        console.log(estadoLuzes)
    })