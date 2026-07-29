function verificarServidor(online) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica aqui
      if(online){
        resolve('Servidor: OK')
      }else{
        reject('Servidor: OFFLINE   ')
      }
    }, 1000)
  })
}

function verificarBancoDados(online) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica aqui
       if(online){
        resolve('bANCO: OK')
      }else{
        reject('Banco: OFFLINE')
      }
    }, 1800)
  })
}

// seu código aqui

    async function checarSistema() {
    try{
       
        const resultado = await Promise.all([verificarServidor(true), verificarBancoDados(true)]) 
        console.log(resultado[0]) 
        console.log(resultado[1])  
    } catch(erro){
        
        console.log('Deu erro:', erro)
    }
        
}
checarSistema()