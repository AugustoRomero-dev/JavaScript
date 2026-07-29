function buscarEntrada() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Bruschetta")
    }, 2000)
  })
}

function buscarSobremesa() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Pudim")
    }, 3000)
  })
}

// seu código vai aqui
Promise.all([buscarEntrada(), buscarSobremesa()])
    .then((resultados)=>{
        console.log(resultados[0])
        console.log(resultados[1])
    })