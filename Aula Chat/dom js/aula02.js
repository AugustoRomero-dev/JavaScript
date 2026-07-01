const nome = document.getElementById("nome")
const botao = document.getElementById("botao")
const resultado = document.getElementById("resultado")

botao.addEventListener('click', () => {
    resultado.textContent = 'Ola ' + nome.value
})