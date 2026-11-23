function Produto(nome, preco, estoque){

    this.nome = nome
    this.preco = preco

    let estoquePrivado = estoque



    Object.defineProperty(this, 'estoque', {
        enumerable: false, // mostra a chave EX com for in e obj keys
        configurable: true, // configuravel
        
        get: function (){
            return estoquePrivado
        },
        set: function(valor){
            if(typeof valor !== 'number'){
               throw new TypeError('Mensagem de Estoque invalia.')
            }

            estoquePrivado = valor
        }
    })



}

const p1 = new Produto('camiseta', 20, 3)
p1.estoque = "kaskaks"
console.log(p1.estoque)