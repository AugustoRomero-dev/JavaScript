const precos = [100, 250, 80]
const desconto = precos.map(function(valor){
    return valor * 0.9
    
})
console.log(desconto)

const produtos = ["Mouse", "Teclado", "Monitor"]
const newArray = produtos.map(function(item){
   //return "Produto: " + item OU de outro jeito
   return `Produto: ${item}`

})
console.log(newArray)