//input
const pokemonName = document.querySelector(".input-text");
const pokemonesContainer = document.querySelector("image")
// const nameText = document.querySelector("h2")

//

//button submit
const form = document.querySelector("form");

const pokemones = [];

form.onsubmit = function (event) {
    event.preventDefault();

    pokemones.push({ name: pokemonName.value });
    pokemonName.value = "";
}

async function getPokemones() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
    const data = await response.json();

    renderPokemones(data.results);

}

function renderPokemones(pokemones) {  

    pokemones.forEach((pokemone) => {
        pokemonesContainer.innerHTML = `
         <div class="poke-description">
            <h2>${pokemone.name}</h2>
        </div>`
    });

}