function reservarHotel(temVaga) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica: resolve ou reject dependendo de temVaga
      if(temVaga){
        resolve('Hotel Reservado!')
      } else{
        reject('Hotel Sem Vaga!')
      }
    }, 1500)
  })
}

function reservarVoo(temAssento) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // sua lógica: resolve ou reject dependendo de temAssento
      if(temAssento){
        resolve('Voo Reeservado!')
      }else{
        reject('Voo sem assento!')
      }
    }, 2000)
  })
}

// suas chamadas aqui
Promise.all([reservarHotel(true), reservarVoo(true)])
    .then((resultado)=>{
        console.log(resultado[0])
        console.log(resultado[1])
        
    })
    .catch((resultado)=>{
        console.log(resultado[0])
        console.log(resultado[1])
    })
