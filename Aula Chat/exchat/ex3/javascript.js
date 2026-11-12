function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'homem'
            if(idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'bebe H.png')
                res.innerHTML = `Detectamos menino de ${idade} anos`
                document.body.style.background = 'black'
                

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem H.png')
            } else if( idade < 50){
                //adulto
                img.setAttribute('src', 'Adulto H.png')
            } else {
                //idoso
                 img.setAttribute('src', 'VelhoH.png')
            }
        } else if(fsex[1].checked){
            genero = 'mulher'
             if(idade >= 0 && idade <= 10){
                //crianca
                img.setAttribute('src', 'bebe M.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem M.png')
            } else if( idade < 50){
                //adulto
                 img.setAttribute('src', 'Adulto M.png')
            } else {
                //idoso
                 img.setAttribute('src', 'VelhoM.png')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos genero ${genero} de ${idade} anos`
        res.appendChild(img)
        
       
            
            
    }
}

//1. pegar ano atual
//2. pegar input
//3. calcular idade
//4. verificar sexo
//5. escolher imagem
//6. mostrar resultado