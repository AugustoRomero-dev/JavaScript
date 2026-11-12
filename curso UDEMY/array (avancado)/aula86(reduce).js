/////////////////////////////////////// REDUCE

const numerosReduce = [5, 50, 80, 1, 2, 3, 20, 8, 11]
const total = numerosReduce.reduce(function(acumulador, valor, indice, array){
    acumulador += valor
    return acumulador
}, 0) // acumulador recebe um valor = 0
//console.log(total)

const valorPar = numerosReduce.reduce(function(acumulador, valor){
    if(valor % 2 === 0) acumulador.push(valor )
        return acumulador
}, [])

//console.log(valorPar)


///////////// FILTER + MAP + REDUCE
// filtrar pares, dobrar valores e reduzir (somar tudo)

const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
const NumerosPares = numeros
.filter(valor => valor % 2 === 0)
.map(valor => valor * 2).reduce((acumulador, valor) =>  acumulador += valor)

//console.log(NumerosPares)

////////// FOREACH
const a1 = [10, 20, 30, 40, 50, 60, 70]
let total1 = 0
a1.forEach(valor => {
    total1 += valor
});
console.log(total1)
