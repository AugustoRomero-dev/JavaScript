function Somar(){
    let numero1 = document.getElementById('txt1')
    let numero2 = document.getElementById('txt2')
    let res = document.getElementById('res')
    if(numero1.value.length == 0 || numero2.value.length == 0 )
        res.innerHTML = `Digite um numero valido`
    else{
        let n1 = Number(numero1.value)
        let n2 = Number(numero2.value)
        let s = n1 + n2
        res.innerHTML = `A soma e ${s}`
    }
}