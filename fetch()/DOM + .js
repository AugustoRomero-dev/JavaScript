const botaoBuscar = document.getElementById('botaoBuscar')
const resultado = document.getElementById("resultado")


     async function BuscarUsuarioNaTela() {
            resultado.textContent = 'carregando...'

           
            try{
                 const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1')

                if(!resposta.ok){
                    throw new Error("Usuario Nao Encontrado");
                    
                }
               const dado = await resposta.json()
               
               resultado.textContent = `Nome: ${dado.name} - Email: ${dado.email}`
               
            } catch(erro){
                resultado.textContent = `Deu erro: ${erro.message}`
            }
    }
    botaoBuscar.addEventListener('click', BuscarUsuarioNaTela)