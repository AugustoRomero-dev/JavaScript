function Calcular(){
    let n1 = document.getElementById('itab')
    let res = document.getElementById('res')
    if(n1.value.length == 0){
        alert(`{ERRO} Nenhum valor digitado`)
        res.innerHTML = 'Digite um numero para calcular'
    } else{
        res.innerHTML = ''
        let n = Number(n1.value)
        for(let c = 0; c <=20; c ++ ){
            let item = document.createElement('option')
            item.innerHTML = `${n} x ${c} = ${n * c}`
            res.appendChild(item)
        }
        
    }
}