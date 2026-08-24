function escopo() {


    const form = document.getElementById('form')
    const resultado = document.querySelector('.resultado')

    const pessoas = []

    function recebeEvento(evento){
        evento.preventDefault()

        const nome = document.getElementById('nome')
        const Sobrenome = document.getElementById('Sobrenome')
        const Peso = document.getElementById('Peso')
        const Altura = document.getElementById('Altura')
        const botao = document.getElementById('botao')


        pessoas.push({
            nome: nome.value,
            sobrenome: Sobrenome.value,
            peso: Peso.value,
            Altura: Altura.value
        })

        console.log(pessoas)

        resultado.innerHTML = `${nome.value} ${Sobrenome.value} ${Peso.value} ${Altura.value}`

            
        

        

    }

    form.addEventListener('submit', recebeEvento)
}
escopo()