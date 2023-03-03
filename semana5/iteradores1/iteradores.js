const celulares = ["iPhone", "Samsung", true, "Xiaomi", null, "Nokia"];

//Las formas antiguas de recorrer un array

// bucle for: Sirve para poder recorrer un arreglo

//let i = 0; posición donde se empieza
// i < celulares.length cantidad máxima que recorre
// i++ => i = i + 1 en cada vuelta me suma uno

console.log("--- Bucle FOR ---");

for (let i = 0; i < celulares.length; i++){
    console.log(celulares[i]);
}

console.log("--- Bucle FOR OF ---");

let contador = 0;

for (let celular of celulares){
    console.log(celular);
}

//FOR DE 2 EN 2
// let contador = 0;

// for (let celular of celulares){
//     if(contador % 2 === 0) console.log(celular);
    
//     contador ++
// }

console.log("--- Bucle FOR IN ---");

for (let celularIndice in celulares) {
    if(celularIndice % 2 === 0) console.log(celularIndice, celulares[celularIndice]);
}

// Hacer una función que detecte si un número es primo o no primo.
console.log("---- Resolviendo problemas ---");
function saberSiNumeroEsPrimo (numero){
    for (let i=1; i<=numero; i++){
        if(numero % i === 0){
            console.log(i);
        }
    }
}
saberSiNumeroEsPrimo(10);


// Hacer una funcion que detecte si un numero es primo o no primo
console.log("---- Resolviendo problemas 2 ---");

function saberSiNumEsPrimo(numero) {
  let contador = 0;
  
  for (let i = 1; i <= numero; i++) {
    if (numero % i === 0) contador++;
  }

  if (contador === 2) return "Es primo";
  return "No es primo";
}

console.log(saberSiNumEsPrimo(7));

/**
 * Escribir una function que pida una frase y escriba cuantas veces aparece la letra a

Ejemplo

frase: ama de casa
resultado: la letra a se repite 4 veces
 */

function contarA(frase) {
    const arrayFrase = frase.toLowerCase().replaceAll(" ","").split("");

    let contador = 0;

    for (let letra of arrayFrase){
        if (letra === "a" || letra ==="A") contador++;
    }
    return contador;
}
console.log(contarA("ama de casa"));

// function contarARefactor(frase){
//     return frase.toLowerCase().split("").filter((letra) => letra === "a").length;
// console.log(contarARefactor(frase)); || return frase;
// }

