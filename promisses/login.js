function fazerLogin(usuarioCorreto) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (usuarioCorreto) {
        resolve("Login efetuado com sucesso!")
      } else {
        reject("Usuário ou senha inválidos.")
      }
    }, 1500)
  })
}

// seu código vai aqui
fazerLogin(true)
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((erro) =>{
        console.log(erro)
    })
fazerLogin(false)
    .then((resultado) =>{
        console.log(resultado)
    })
    .catch((erro) =>{
        console.log(erro)
    })

   async function testarLogin() {
  try {
    const resultado = await fazerLogin(false)
    console.log(resultado)
  } catch (erro) {
    console.log("Deu erro:", erro)
  }
}

testarLogin()