//Escribe una función que reciba un número y devuelva el doble de ese número si es par o el triple de ese número si es impar.
function determine(numero) {
    if (numero % 2 === 0) return numero * 2;
    if (numero % 2 !== 0) return numero * 3;
}
console.log(determine(3));
console.log(determine(4));