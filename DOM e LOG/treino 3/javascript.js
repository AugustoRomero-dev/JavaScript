function Verificar(){
    let data = new Date()
    let ano = data.getFullYear()
    let fano = document.getElementById('fano')
    let res = document.getElementById('res')
    let idade = ano - Number(fano.value)
     
    if(fano.value.length == 0){
        alert('[Error] Digite um numero valido')
        res.innerHTML = 'Vc nao digitou o ano que vc nasceu'
    } else if(idade <= 17){
        res.innerHTML = 'Vc ainda e de menor'
    } else{
        res.innerHTML = 'vc e de maior'
    }
        
    
    
}