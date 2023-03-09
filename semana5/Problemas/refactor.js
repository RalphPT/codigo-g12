

const esPositivo = (numero) => {

    if (Math.round(numero) > 0) return "Es positivo";
    if (Math.round(numero) < 0) return "Es negativo";
    return false;
}

console.log(esPositivo(2));
console.log(esPositivo(-5));
console.log(esPositivo(0));

//refactor
// function isPositive(number) {
//     if (number === 0) return false;
  
//     return number > 0 ? "positivo" : "negativo";
// }