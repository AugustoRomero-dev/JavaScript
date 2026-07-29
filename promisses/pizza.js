function assarPizza() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Pizza pronta!")
    }, 3000)
  })
  
}

// suas 3 linhas vão aqui
console.log('coloquei a pizza no forno')
assarPizza().then((resultado) =>{
    console.log(resultado)
    
})
console.log('fui fazer outra coisa enquanto isso')


async function teste() {
    const resultado = await assarPizza(true)
    console.log(resultado)
}

teste()

