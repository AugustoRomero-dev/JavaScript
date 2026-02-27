
function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano  = document.getElementById('txtano')
    var res = document.getElementById('res')

    if ( fano.value.length == 0 || fano.value > ano){
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        if (fsex[0].checked){
            genero = 'homem'

            if(idade >= 0 && idade <= 10){
                //crianca
            } else if(idade < 21){
                //jovem
            } else if( idade < 50 ){
                // adulto
            } else {
                //idoso
            }
        }
    }
}
//1. pegar ano atual
//2. pegar input
//3. calcular idade
//4. verificar sexo
//5. escolher imagem
//6. mostrar resultado