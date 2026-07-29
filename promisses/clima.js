function buscarClima() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("28°C"), 2000)
  })
}

function buscarTransito() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("Trânsito leve"), 1000)
  })
}

// seu código aqui
Promise.all([buscarClima(), buscarTransito()])
    .then((resultado)=>{
        console.log(resultado[0])
        console.log(resultado[1])
    })
        
