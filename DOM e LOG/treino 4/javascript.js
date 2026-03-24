function Dividir(){
    let num = document.getElementById('inum')
    let res = document.getElementById('res')
    let n1 = num.value
    if(n1 % 2 == 0){
        res.innerHTML = `O numero ${n1} e par`
    } else{
        res.innerHTML = 'Impar'
    }
}