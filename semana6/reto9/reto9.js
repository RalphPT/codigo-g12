//input
const pokemonName = document.querySelector(".input-text");
const picture = document.querySelector("img")
const nameText = document.querySelector("h2")

//

//button submit
const form = document.querySelector("form");

const pokemones = [];

form.onsubmit = function (event) {
    event.preventDefault();

    pokemones.push({ name: pokemonName.value });
    pokemones.value = "";
}

async function getPokemones() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();

    renderPokemones(data.results);

}

function renderPokemones() {

    picture.textContent = URL.tofixed();
    nameText.textContent = .tofixed();
    // pokemonesContainer.innerHTML =`
    // <div class="poke.description">
    //     <h2>${}</h2>
    // </div>`
}