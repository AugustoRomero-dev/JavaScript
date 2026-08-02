async function buscarUsuario() {
    try{
        const resultado = await fetch('https://jsonplaceholder.typicode.com/users/1')
        if(!resultado.ok){
            throw new Error("Usuario nao Encontrado")  
        }
        const dado = await resultado.json()
        console.log('Nome:', dado.name)
        console.log('Email:', dado.email)
    } catch(erro){
        console.log('Deu erro:', erro.message)
    }
}
buscarUsuario()