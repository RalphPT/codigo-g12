const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");

const btnClose = document.querySelector("#btn-close");
const galleryResult = document.querySelector(".gallery-result");
const main = document.querySelector("main");

//boton cerrar
btnClose.onclick = function () {
    main.style.display = "block";

    btnClose.style.display = "none";
    galleryResult.style.display = "none";
};

//Crear una función que obtenga el json del api de razas
//https://dog.ceo/api/breeds/list/all
const getBreeds = async () => {

    const response = await fetch("https://dog.ceo/api/breeds/list/all");
    const breedData = await response.json();
    // convierte un object a un array, en este usando las keys
    const breeds = Object.keys(breedData.message);

    breeds.forEach((breed) => {
        selectBreed.innerHTML += `<option value="${breed}">${breed}</option>`;
    });
};
getBreeds();

//Muestra la imagen
function showImage(image) {
    main.style.display = "none";

    btnClose.style.display = "block";
    galleryResult.style.display = "block";
    galleryResult.innerHTML = `<img src="${image.src}" />`;
}


selectBreed.onchange = async function () {
    const currentBreed = this.value;

    const response = await fetch(`https://dog.ceo/api/breed/${currentBreed}/images`);//template string ``

    const data = await response.json();
    const images = data.message;

    gallery.innerHTML = "";

    images.forEach((image) => {
        gallery.innerHTML += `<img onclick="showImage(this)" src="${image}"/>`
    })
};
// selectBreed.onchange =  function (event){
//     console.log(event.target.value);
// };
//o esto
// selectBreed.onchange = function () {
//     console.log(this.value); //this al select
// };