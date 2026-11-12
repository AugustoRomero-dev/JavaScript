let nomes = ['Pedro', 'Ana', 'Lucas', 'Amanda', 'Bruno']
// nomes que termina com 'o'
for(let nom of nomes){
    if(nom[nom.length - 1] === 'o'){
        console.log(nom)
    }
}
console.log('...')
//comeca cm A e termina com a

for(let nome of nomes){
    if(nome[0] === 'A' && nome[nome.length - 1] === 'a'){
        console.log(nome)
    }
}
console.log('...')

//contem a letra 'r'
/*
for(let nome of nomes){
    if(nome[0] === 'r' || nome[1] === 'r' || nome[2] === 'r' || nome[3] === 'r' || nome[4] === 'r'){
        console.log(nome)
    }
}
*/


//codigo corrigido
// contém a letra 'r'
for (let nome of nomes) {
    if (nome.includes('r')) {
        console.log(nome)
    }
}