const selectBreed = document.querySelector("#select-breed");
const gallery = document.querySelector(".gallery");

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


selectBreed.onchange = async function () {
    const currentBreed = this.value;

    const response = await fetch(`https://dog.ceo/api/breed/${currentBreed}/images`);//template string ``
    
    const data = await response.json();
    const images = data.message;

    gallery.innerHTML="";
    
    images.forEach((image) => {
        gallery.innerHTML +=`<img src="${image}"/>`
    })
};
// selectBreed.onchange =  function (event){
//     console.log(event.target.value);
// };
//o esto
// selectBreed.onchange = function () {
//     console.log(this.value); //this al select
// };

