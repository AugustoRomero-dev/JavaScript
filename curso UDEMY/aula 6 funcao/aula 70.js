function criaPessoa(nome, sobrenome){
    return { nome, sobrenome }
}

const p1 = criaPessoa('luiz', 'Otavio')
const p2 = {
    nome: 'joao',
    sobrenome: 'oliveira'
}
console.log(p1)
console.log(p2)

//////////////////////////////////////////////////////////////////

function criaMultipliador(multiplicador){
    return function(n){
        return n * multiplicador
    }
}

const duplica = criaMultipliador(2)
const triplica = criaMultipliador(3)
const quadruplica = criaMultipliador(4)

console.log(duplica(3))
console.log(triplica(2))
console.log(quadruplica(10))