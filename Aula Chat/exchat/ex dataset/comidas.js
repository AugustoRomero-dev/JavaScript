let comidas = [
  { nome: "Pizza", favorita: false },
  { nome: "Sushi", favorita: false },
  { nome: "Hambúrguer", favorita: false }
]

const listaFav = document.getElementById('favoritos')

// seu código aqui
listaFav.addEventListener('click', (event)=>{
   const posicaoClicada = event.target.dataset.id 
   comidas[posicaoClicada].favorita = !comidas[posicaoClicada].favorita

   console.log(comidas)
})