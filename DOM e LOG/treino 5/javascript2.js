function verificar(){
    let nome = document.getElementById('txt1')
    let idade = document.getElementById('txt2')
    let res = document.getElementById('res')
    let idade1 = Number(idade.value)
    if ( idade1.value == 0 || nome.value == ''){
        alert('DIGITE UMA IDADE VALIDA')
        res.innerHTML = 'NAO COLOCOU UMA IDADE OU NOME'
        
    } else if (idade1 >= 18){
        res.innerHTML = `o ${nome.value} e maior de idade`
    } else{
        res.innerHTML = `o ${nome.value} e menor de idade`
    }

}