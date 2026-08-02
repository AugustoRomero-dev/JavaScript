async function buscarTarefasUsuario() {
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/1/todos')
        if(!resposta.ok){
            throw new Error("Nao foi Possivel Carregar As Tarefas!")

            
        }
        const dado = await resposta.json()
        dado.forEach((item, posicao) => {
            if(item.completed === false){
                console.log(item,  '-PENDENTE')
            } else{
                console.log(item,  '-CONCLUIDA')
            }
        });
        


    } catch(erro){
        console.log('Deu Erro:', erro.message)
    }
}
buscarTarefasUsuario()