// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, a, p) {
  return {
    nome,        
    sobrenome,

    get nomeCompleto () {
        return `${this.nome } ${this.sobrenome}`
    }, 
    //tem osetter q nao sei fazer 
    // 'this' aqui se refere ao próprio objeto criado (ex: p1)
    fala(assunto) {
      return `${this.nome} está ${assunto}.`;
    },

    altura: a,     // propriedade 'altura' recebe o valor do parâmetro 'a'
    peso: p,       // propriedade 'peso' recebe o valor do parâmetro 'p'

    // Getter: parece uma propriedade comum, mas roda um cálculo
    // toda vez que é acessada (sem usar parênteses)
    get imc() {
      const indice = this.peso / (this.altura ** 2);
      // toFixed(2) arredonda o resultado pra 2 casas decimais
      return indice.toFixed(2);
    }
  };
}
// Chama a função fábrica, criando um objeto novo chamado p1
// nome='Luiz', sobrenome='Otávio', altura=1.8, peso=80
const p1 = criaPessoa('Luiz', 'Otávio', 1.8, 80);
p1.nomeCompleto = ''
console.log(p1.nomeCompleto)
// Acessa a propriedade 'nome' do objeto p1
console.log(p1.nome); // "Luiz"
// Acessa a propriedade 'sobrenome' do objeto p1
console.log(p1.sobrenome); // "Otávio"
// Acessa o getter 'imc' (sem parênteses!) 
// Ele calcula na hora: 80 / (1.8 ** 2)
console.log(p1.imc); // "24.69"