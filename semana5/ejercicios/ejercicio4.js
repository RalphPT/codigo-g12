function esPositivo(numero) {
    //Lan función va a recibir un entero. Devuelve como resultado una cadena de texto que indica si el número es positivo o negativo
    // Si el numero es positivo, devolver ---> "Es positivo"
    // Si el numero es negativo, devolver ---> "Es negativo"
    // Si el número es 0, devuelve false

    if (Math.round(numero) > 0) return "Es positivo";
    else if (Math.round(numero) < 0) return "Es negativo";
    return false;
}

console.log(esPositivo(0));
console.log(esPositivo(10));
console.log(esPositivo(-12));

//otra manera
const resultado1 = esPositivo(0);
const resultado2 = esPositivo(5);
const resultado3 = esPositivo(-3);
console.log(resultado1);
console.log(resultado2);
console.log(resultado3);