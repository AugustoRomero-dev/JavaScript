/*
Cada vez que você usa new Pessoa(...), o JS cria uma cópia nova da função nomeCompleto para aquele objeto. Com 2 pessoas, são 2 funções idênticas na memória. Com 10.000 pessoas, são 10.000 cópias da mesma função. É desperdício, porque o código dela é sempre igual.

O prototype resolve isso: você guarda a função uma vez só, num lugar compartilhado, e todos os objetos usam essa mesma função.

A analogia
Pensa numa empresa com 100 funcionários:

Sem prototype: cada funcionário tem o próprio manual de procedimentos impresso na gaveta. São 100 cópias iguais.
Com prototype: existe um manual só, na parede da sala. Quando um funcionário precisa saber como fazer algo, ele olha lá.

O que é individual (nome, sobrenome) fica com cada objeto. O que é comum a todos (os métodos) fica no prototype.

*/
function Pessoa (nome, sobrenome){
    this.nome = nome,
    this.sobrenome = sobrenome

}


Pessoa.prototype.nomeCompleto = function(){
    return this.nome + " " + this.sobrenome
}

const pessoa1 = new Pessoa("Luiz", "O.")
const pessoa2 = new Pessoa("Maria", "A.")
console.dir(pessoa1)