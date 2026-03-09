function verificar(){
    let ini = document.getElementById('ini')
    let fim = document.getElementById('ifim')
    let pass = document.getElementById('ipasso')
    let res = document.getElementById('res')
    if ( ini.value.length == 0 || fim.value.length == 0  || pass.value.length == 0 ){
        window.alert('erro')
    } else {
        res.innerHTML = 'contando'
        let i =Number(ini.value)
        let f =Number(fim.value)
        let p =Number(pass.value)
        if( i < f){
            for(let c = i; c <= f; c += p){
            res.innerHTML += `${c} `
            }
        } else {
            for(let c = i; c >= f; c -= p ){
                res.innerHTML += `${c} `
            }
        }
    
    }

}
