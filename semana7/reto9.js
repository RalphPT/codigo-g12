const pokemonForm = document.querySelector("#pokemon-form");
const result = document.querySelector(".result");

//Cuando hagamos click sobre un boton submit, dispara la info
pokemonForm.onsubmit = async function (event) {
    event.preventDefault();
    const pokemonName = event.target[0].value.toLowerCase();//es el input
    console.log(pokemonName);

    if (!pokemonName) {
        alert("Debes escribir el nombre del pokemon");
        return;
    }

    //debemos hacer la búsqueda usando el API
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);// O aquí colocar .toLowerCase();

    //si es falso
    if (!response.ok) {
        alert("El pokemon que buscas no existe");
        return;
    }

    const pokeData = await response.json();
    
    result.innerHTML = `
    <img src="${pokeData.sprites.other["official-artwork"].front_shiny}" />
    <h2>${pokeData.name}</h2>`;
};