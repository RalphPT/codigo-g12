// usaremos la forma antigua
const titulo = document.getElementsByTagName("h1");
console.log("BY TAG NAME");
console.log(titulo);

//ID ÚNICO ELEMENTO
const primerBoton = document.getElementById("first-button");

console.log("BY ID");
console.log(primerBoton);

//CLASS VARIOS ELEMENTOS
const segundoBoton = document.getElementsByClassName("second-button");
console.log("BY CLASS");
console.log(segundoBoton);

console.log("USANDO LA FORMA ACTUAL");

//class = .
// id = #
//querySelector => retorna solo 1 elemento
//querySelector => retorna un array de elemento
const box = document.querySelector(".box");
console.log("box", box);

const boxs = document.querySelector(".box");
console.log("boxs", boxs);

const profile = document.querySelector("#profile");
console.log("image", profile);

const tituloMediano = document.querySelectorAll("h5");
console.log(tituloMediano[1]);


// // class = .
// // id = #
// // querySelector => retorna solo 1 elemento
// // querySelectorAll => retorna un array de elemento

// const box = document.querySelector(".box");

// console.log("box", box);

// const boxs = document.querySelectorAll(".box");

// console.log("boxs", boxs);

// const profile = document.querySelector("#profile");

// console.log("image", profile);

// const tituloMediano = document.querySelectorAll("h5");

// console.log(tituloMediano[1]);