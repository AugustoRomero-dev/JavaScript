const pessoa1 = new Object()
pessoa1.nome = 'luiz'
pessoa1.sobrenome = 'otavio'
// jeito construtor completo

const pessoa2 = {
    nome: 'luiz',
    sobrenome: 'otavio'
}
// jeito literal

console.log(pessoa1, pessoa2)









// EX: FUNCTION CONSTRUCTOR
function Pessoa(nome, sobrenome){
    this.nome = nome
    this.sobrenome = sobrenome

    Object.freeze(this) // ou posso fazer isso, que trava tudo ao inves de um so
}

const p1 = new Pessoa ('Augusto', 'cORDEIRO')
Object.freeze(p1) // nao deixa alterar o valor do valor da constante mesmo se eu fizer

p1.nome = 'Dayane' // existe diferenca entre esses dois // p1 = 'dayane'
const p2 = new Pessoa ('Joao', 'cORDEIRO')

console.log(p1)