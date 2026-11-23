// produto -> aumento e desconto
// camiseta = cor, caneca = material
function Produto(nome, preco){
    this.nome = nome
    this.preco = preco
}
Produto.prototype.aumento = function(quantia){
    this.preco += quantia
}
Produto.prototype.desconto = function(quantia){
    this.preco -= quantia
}





function Caneca(nome, preco, cor, material, estoque){
    Produto.call(this, nome, preco)
    this.cor = cor
    this.materia = material
    this.estoque = estoque
}
Caneca.prototype = Object.create(Produto.prototype)
Caneca.prototype.constructor = Caneca
// vou mudar o aumento APENAS da caneca pra porcentagem 
Caneca.prototype.aumento = function(percentual){ 
    this.preco = this.preco + (this.preco * (percentual / 100))
}






function Camiseta(nome, preco, cor){
    Produto.call(this, nome, preco)
    this.cor = cor
}
//linkando camiseta com o proto
Camiseta.prototype = Object.create(Produto.prototype)
// desrelacionando a funcao produto com camisetas (constructor estava Produto {    })
Camiseta.prototype.constructor = Camiseta




const caneca = new Caneca("homem aranha", 20, "vermelha", "Ceramica", 3)
caneca.aumento(100) // esse aqui esta falando q teve aumento de 100%
console.log(caneca)



const camiseta = new Camiseta("Regata", 7.5, "Preta")
camiseta.aumento(10) // esta falando q teve um aumento de 10 reais
console.log(camiseta)
