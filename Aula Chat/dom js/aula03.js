const idade = document.getElementById("idade")
const verificar = document.getElementById("verificar")
const res = document.getElementById("resultado")

verificar.addEventListener('click', () => {
    if(idade.value >= 18){
        res.textContent = 'Maior de Idade'
    } else{
        res.textContent = 'Menor de Idade'
    }
})