const movieName = document.querySelector("#name");
const description = document.querySelector("#description");
const image = document.querySelector("#image");

//button submit
const form = document.querySelector("form");

const moviesContainer = document.querySelector(".movies");

//array vacio
const movies = [];

//Evita que el formulario se recargue
form.onsubmit = function (event) {
    event.preventDefault();

    movies.push({
        name: movieName.value,
        description: description.value,
        image: image.value,
    });

    // moviesContainer.innerHTML += `
    // <div class="card mt-10">
    // <h4>${movieName.value}</h4>
    // <p>${description.value}</p>
    // <img width="200" src="${image.value}" />
    // </div>`

    

    movieName.value = "";
    description.value = "";
    image.value = "";

    renderMovies();
};

function renderMovies() {
    if (movies.length === 0) return;
  
    moviesContainer.innerHTML = "";
  
    movies.forEach((movie) => {
      moviesContainer.innerHTML += `
        <div class="card mt-10">
          <h4>${movie.name}</h4>
          <p>${movie.description}</p>
          <img width="200" src="${movie.image}" />
        </div>
      `;
    });
  }