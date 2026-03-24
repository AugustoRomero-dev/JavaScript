function verificar(){ 
    var nome = document.getElementById('txt1').value 
    var res = document.getElementById('res') 
    if ( nome.value == ''){ 
        res.innerHTML = 'Digite um Nome' 
    } else { 
    res.innerHTML = `Ola, ${nome}` 
    } 
}