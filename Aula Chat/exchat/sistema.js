const usuarios = [
    { nome: "Augusto", email: "augusto@gmail.com", senha: "1234" },
    { nome: "Pedro", email: "pedro@gmail.com", senha: "abcd" },
    { nome: "Maria", email: "maria@gmail.com", senha: "9999" }
]
    
    const verificandoUSU = usuarios.find(function(item){
     return item.email === "pedro@gmail.com" && item.senha === "abcd"
       
    }) 
     if(verificandoUSU){
        
            console.log('login correto')
        } 
        else{
            console.log('email ou senha incoerrretos')
        }
    
   
