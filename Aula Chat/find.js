const usuarios = [
    { nome: "Augusto", email: "augusto@gmail.com", senha: "1234" },
    { nome: "Pedro", email: "pedro@gmail.com", senha: "abcd" },
    { nome: "Maria", email: "maria@gmail.com", senha: "9999" }
]
const clientes01 = usuarios.find(function(item){
    return item.email === "pedro@gmail.com"
})
console.log(clientes01)