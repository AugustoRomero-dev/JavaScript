// Uma matriz (array de arrays) — pense como uma tabela 3x3
const numeros = [
  [1, 2, 3],  // índice 0
  [4, 5, 6],  // índice 1
  [7, 8, 9]   // índice 2
]
// FORMA 1 — acesso por índice
// numeros[1] → pega a segunda linha → [4, 5, 6]
// numeros[1][2] → pega o terceiro elemento dessa linha → 6
console.log(numeros[1][2]) // 6

// FORMA 2 — destructuring (desestruturação)
const [,[,,seis]] = numeros

// Lendo da esquerda pra direita:
// [  ,  [  ,  , seis  ]]
//  ↑        ↑  ↑
//  pula     pula pula
//  linha 0  el0  el1   → pega el2 e chama de "seis"

// A vírgula sem nome = "pula esse item"
// Linha 0 → pulada (vírgula sem variável)
// Linha 1 → entra nela: pula el0, pula el1, pega el2 → seis = 6

console.log(seis) // 6

/////////////////////////////////////////////////////////

const pessoa = {
  nome: 'Luiz',
  sobrenome: 'Miranda',
  idade: 30,
  endereco: {
    rua: 'Av Brasil',
    numero: 320
  }
};

// Desestruturação de objeto

console.log(nome, sobrenome) // Luiz Miranda

const { nome: teste = '', sobrenome } = pessoa
//       ↑         ↑     ↑              ↑
//    pega nome  renomeia valor        de onde
//    do objeto  para     padrão       vem
//               "teste"  (se não existir)