function verificarPagamento(aprovado) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica aqui
      if(aprovado){
        resolve('Pagamento: aprovado!')
      } else{
        reject('Pagamento: recusado')
      }
    }, 1200)
  })
}

function verificarEstoqueProduto(disponivel) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica aqui
      if(disponivel){
        resolve('Estoque: disponivel!')
      } else{
        reject('Estoque: indisponivel')
      }
    }, 900)
  })
}

// seu código aqui
async function finalizarCompra() {
     try{
       
        const resultado = await Promise.all([verificarPagamento(true), verificarEstoqueProduto(false)]) 
        console.log(resultado) 
       
    }catch(erro){
        console.log('Deu erro:', erro)
    }
}
finalizarCompra()