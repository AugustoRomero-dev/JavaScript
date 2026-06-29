const botao = document.getElementById("botao")
const titulo = document.getElementById("titulo")

botao.addEventListener("click", () => {
    titulo.textContent = 'Bem-vindo ao JavaScript!'
})

//elemento.addEventListener("EVENTO", função)