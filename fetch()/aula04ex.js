async function buscarTarefasUsuario() {
    try{
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/99999/todos')
        if(!resposta.ok){
            throw new Error("Nao foi Possivel Carregar As Tarefas!")

            
        }
        const dado = await resposta.json()
        if (dado.length === 0) {
             throw new Error('Nenhuma tarefa encontrada para esse usuário')
        }
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