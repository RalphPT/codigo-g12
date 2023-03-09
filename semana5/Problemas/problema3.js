//Escribe una función que reciba un número y devuelva el cuadrado de ese número.
function cuadrado(numero) {
    return Math.pow(numero, 2);
}
console.log(cuadrado(4));

// function cuadrado(numero) {
//     return numero ** 2;
// }
// console.log(cuadrado(4));

function elevarAlCuadrado(num) {
    // Devuelve el valor de "num" elevado al cuadrado
    // ojo: No es raiz cuadrada!
    // Tu código:
    return Math.pow(num, 2);
}

const potencia = elevarAlCuadrado(8);
console.log(potencia);

//estructura de arrow function
// const nombreDeFuncion = () => {
// }

const elevarCuadradoArrow = (numero) => numero ** 2;

const potencia2 = elevarCuadradoArrow(18);
console.log(potencia2);