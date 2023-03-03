const datosVariados = [1, "pepe", true, null, ["luis", "paco"]];

console.log(datosVariados[4][0]);

const edificio = [
    [1, 2, 3, 4, [1.1, 1.2, 1.3, 1.4]],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
];

console.log(edificio[1][3])

// Para poder contar la cantidad de elementos un arreglo
console.log("cantidad de elementos", edificio.length);
console.log(edificio[0][4].length);
// nota length también puede contar la cantidad de un string
console.log("Hola me llamo Rafael".length);
console.log(edificio[1][0]);

const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const nombres = ["Ander","Braulio", "Camila", "Diego","Esmeralda"];
// Esto no es posible
// nombres = ["numeros"];
console.log(" --- REVERSE ---");
numeros.reverse();
nombres.reverse();
console.log(numeros);
console.log(nombres);

const textoDeNombre = ["Rafael", "Percca", "Trejo"];
console.log(textoDeNombre.join(" "));
console.log(textoDeNombre.join("-"));
console.log(textoDeNombre.join("."));
console.log(textoDeNombre.join("+"));
console.log(textoDeNombre.join(""));
console.log(textoDeNombre);

//Convertir un string a un array *SPLIT*
const cursos = "React, Angular, HTML, CSS, JavaScript";
const cursosArray = cursos.replaceAll(" ", "").split(",");
console.log(cursosArray);
console.log(cursos);


/**
 * 
 */
//split convierte un string a un array
//join convierte el array a un string
//reverse invierte el orden
/*/*//*/*//*/*//**//*/*//*/*//*/*//**//*/*//*/*//*/*//**/
/**
 * 
 * function reverseWord(word) {
    console.log(word.split("").reverse().join(""));
}
reverseWord("hola mundo");
 */
/*/*//*/*//*/*//**//*/*//*/*//*/*//**//*/*//*/*//*/*//**/
/*
 * Reto #6
 * INVIRTIENDO CADENAS
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una function que invierta el orden de una cadena de
 * texto.
 * - Si le pasamos "Hola mundo" nos retornaría "odnum aloH"
 */
// Ahora si lo convertimos a arrow function
const reverseWord = (word) => console.log(word.split("").reverse().join(""));

reverseWord("hola mundo");