async function buscarPost() {
  try {
    const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/999999')
    if (!resposta.ok) {
      throw new Error('Post não encontrado')
    }
    const dado = await resposta.json()
    console.log(dado)
  } catch (erro) {
    console.log('Deu erro:', erro.message)
  }
}

buscarPost()