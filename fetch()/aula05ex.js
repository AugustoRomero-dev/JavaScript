async function buscarAlbuns() {
    try{ 
        const resposta = await fetch('https://jsonplaceholder.typicode.com/users/2/albums')
        if(!resposta.ok){
            throw new Error("Nao localizei o album");
            
        }
        const dado = await resposta.json()
        if(dado.length === 0){
             throw new Error('Nenhuma tarefa encontrada para esse usuário')
        }
        const dadoNovo = dado.filter(item => item.title.length > 20)
        console.log(dadoNovo.length)
        console.log(dadoNovo)

    } catch(erro){
        console.log('Deu Erro:', erro.message)
    }
}
buscarAlbuns()