// METODOS PARA OBJETOS

// OBJ.ASSIGN (copia um obj, mas pode ser alterado)
//OBJ.VALUES (parece com o keys mas esse pega os valores)
//OBJ.ENTRIES (basicamente mostra o keys e values junto em arrays)
//OBJ.getQwnPropertyDescriptor(0, "prop")
// ... (spread e o mais simples ele pode ser copiado mas pode ser alterado unicamente)

//ja vi
// obbj.keys (retorna as chaves)
// obj.freeze (congela obj)
//obj. defoneProprieties (define varias propriedades)
//obj.defineProperty (define uma propriedade)

const produto = {nome: 'produto', preco: 1.8}


console.log(Object.getOwnPropertyDescriptor(produto, "nome")) // mostra o defineProperty