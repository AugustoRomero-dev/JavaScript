function funcao(){
    console.log(arguments[0]) // ou (arguments) vai mostrar tudo
}

funcao('valor', 1, 2, 3, 4, 5)

function conta (operador, acumulador, ...numeros){
    for(let numero of numeros){
        if(operador === '+') acumulador += numero
         if(operador === '-') acumulador -= numero
          if(operador === '/') acumulador /= numero
           if(operador === '*') acumulador *= numero
    }

    console.log(acumulador)
}
conta('+', 0, 20, 30, 40, 50)



// rest operator e os '...' ele adiciona varios numeros, strig e etc sem ele vem apenas 1 numero 