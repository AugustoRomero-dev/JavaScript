function calcular(){
    let numero = document.getElementById('inum')
    let res = document.getElementById('res')
    if (numero.value.length == 0){
        alert('{ERRO} Digite um numero')
    } else{
        res.innerHTML = ''
        let n1 = Number(numero.value)
        for(let n2 =1; n2 <= n1; n2++){
            if(n2%2 == 0){
                res.innerHTML += `${n2} - PAR <br>` 

            } else{
                res.innerHTML += `${n2} - IMPAR <br>`
            }
        }
    } 
}