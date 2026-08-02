async function buscarPost() {
  const resposta = await fetch('https://jsonplaceholder.typicode.com/posts/1')
  const dado = await resposta.json()
  console.log(dado)
}

buscarPost()