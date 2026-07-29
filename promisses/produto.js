function verificarEstoque(temProduto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica aqui
      if(temProduto){
        resolve('Produto disponivel')
      } else{
        reject('produto fora de estoque')
      }
    }, 1500)
  })
}

// suas chamadas aqui
verificarEstoque(true)
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((resultado)=>{
    console.log(resultado)
  })  
  // false agora
  verificarEstoque(false)
  .then((resultado)=>{
    console.log(resultado)
  })
  .catch((resultado)=>{
    console.log(resultado)
  })
