function verificar(){
    let inicio = document.getElementById('ini')
    let fim = document.getElementById('ifim')
    let passo = document.getElementById('ipasso')
    let res = document.getElementById('res')

    if(inicio.value.length == 0 || fim.value.length == 0){
        res.innerHTML = 'IMPOSSIVEL INICIAR A CONTAGEM'
        return
    }

    if(passo.value.length == 0){
        alert('Passo inválido! Considerando PASSO = 1')
        passo.value = 1
    }

        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        res.innerHTML = ''

    if(i <= f){
        for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} ->`
        }
    } else{
        for(let c = i; c >= f; c -= p){
            res.innerHTML += `${c} -> `
        }
    }
}