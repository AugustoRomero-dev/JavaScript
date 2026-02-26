function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')
    if ( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - fano.value
        var img = document.createElement('img') 
        img.setAttribute('id', 'foto')
        var genero = ''
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade <=10){
                //crianca
                img.setAttribute('src', 'bebe H.png')

            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'Jovem H.png')

            }else if (idade < 50){
                //adulto
                img.setAttribute('src', 'Adulto H.png')

            } else if (idade > 50){
                // idoso
                img.setAttribute('src', 'VelhoH.png')

            }

        }else if (fsex[1].checked)  {
            genero = 'Mulher'
             if (idade >= 0 && idade <=10){
                //crianca
                 img.setAttribute('src', 'bebe M.png')

            } else if (idade < 21){
                //jovem
                 img.setAttribute('src', 'Jovem M.png')

            }else if (idade < 50){
                //adulto
                 img.setAttribute('src', 'Adulto M.png')

            } else if (idade > 50){
                // idoso
                 img.setAttribute('src', 'VelhoM.png')

                
            }

        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos genero ${genero} com ${idade} anos`
        res.appendChild(img)
    }
    
}