const lista = document.getElementById("lista");

lista.addEventListener("click", (event) => {
  console.log(event.target.dataset.id);
});