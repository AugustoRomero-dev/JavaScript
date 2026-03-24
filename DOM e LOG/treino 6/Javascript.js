function Calcular(){
    let n1 = document.getElementById('1num')
    let n2 = document.getElementById('2num')
    let res = document.getElementById('res')
    if (n1.value.length == 0 || n2.value.length == 0){
        alert('[ERRO] nao colocou os dados')
    } else{
        let soma = Number(n1.value) + Number(n2.value)
        res.innerHTML = `A soma e ${soma}`

    }

        
        
    
        
    
}
//declarar variaveis
//