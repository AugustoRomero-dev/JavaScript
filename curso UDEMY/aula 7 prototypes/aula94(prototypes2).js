
// new Object -> Object.prototype
const objA = {
    chaveA: "A"
    
}

const objB = {
    chaveB: "B"
    
}

const objC = new Object()
objC.chaveC = "C"
    
Object.setPrototypeOf(objB, objA)
Object.setPrototypeOf(objC, objA)
//console.log(objB.chaveA)


//////////////////////////////////////////////////////////////////////////////////

// exemplo com proto

function Produto (nome, preco){
    this.nome = nome 
    this.preco = preco
}

Produto.prototype.desconto = function(percentual){
    this.preco = this.preco - (this.preco * (percentual / 100))
}
Produto.prototype.aumento = function(percentual){
    this.preco = this.preco + (this.preco * (percentual / 100))
}

const p1 = new Produto("camisa", 50)

const p2 = {
    nome: 'caneca',
    preco: 15
}
// outro jeito de transformar um obj no proto, mas aqui vou usar oq estudei anteriormente em conjunto
const p3 = Object.create(Produto.prototype, {
    preco: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 120
    },
    nome: {
         writable: true,
        configurable: true,
        enumerable: true,
        value: "short"
    }
})





// relacionando o obj p2 com o prototype
Object.setPrototypeOf(p2, Produto.prototype)





p1.aumento(10)
console.log(p1)
p2.aumento(30) // se nao relacionar o const p2 com o prototype ele nao vai dar certo pq foi feito sem a function produto
console.log(p2)
p3.aumento(10)
console.log(p3)