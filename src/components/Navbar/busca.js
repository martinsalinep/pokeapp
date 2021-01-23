import react from 'react';

let campoFiltro = document.querySelector("#inputSearch");

campoFiltro.addEventListener("input", function () {
  let pokemons = document.querySelectorAll(".Card__name");

  if (this.value.length > 0) {
    for (let i = 0; i < pokemons.length; i++) {
      let pokemon = pokemons[i];
      let Nome = pokemon.querySelector(".info-nome");
      let nomePokemon = Nome.textContent;
      let expressao = new RegExp(this.value, "i")

      if (!expressao.test(nomePokemon)) {
        pokemon.classList.add("invisivel")
      } else {
        pokemon.classList.remove("invisivel")
      }
    }
  } else {
    for (let i = 0; i < pokemons.length; i++) {
      let pokemon = pokemons[i];
      pokemon.classList.remove("invisivel");
    }
  }
});