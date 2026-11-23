// Define property - defineProperties
// a diferenca e e que no defineProperties vc consegue ter mais controle doq fazer em cada obj

function Produto(nome, preco, estoque){
    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave EX com for in e obj keys
        value: estoque, // valor
        writable: false, // controla se o valor pode ser alterado ou nn
        configurable: true // configuravel
    })



    Object.defineProperties(this, {
        nome: {
            enumerable: true, // mostra a chave EX com for in e obj keys
            value: nome, // valor
            writable: true, // controla se o valor pode ser alterado ou nn
            configurable: true // configuravel
        },

        preco: {
            enumerable: true, // mostra a chave EX com for in e obj keys
            value: preco, // valor
            writable: true, // controla se o valor pode ser alterado ou nn
            configurable: true // configuravel
        }
    })



}

const p1 = new Produto('camiseta', 20, 3)
//console.log(p1)
console.log(Object.keys(p1)) // ou
for(let chave in p1){
    console.log(chave)
}