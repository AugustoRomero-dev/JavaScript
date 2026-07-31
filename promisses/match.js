function verificarLike(deuMatch){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        if(deuMatch){
                resolve('Deu match!')
            } else{
                reject('Nao Teve Quimica')
            }
       }, 1000)
    })
}
function verificarDistancia(distancia){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
        if(distancia){
        resolve('Compativel na distancia!')
        } else{
        reject('Muito Longe')
        }
        },700)
    })
}
async function verificarPerfil() {
    try{
        const resultado = await Promise.all([verificarDistancia(true), verificarLike(true)])

        console.log(resultado)
    }catch(erro){
        console.log('Que chato', erro)
    }
}
verificarPerfil()