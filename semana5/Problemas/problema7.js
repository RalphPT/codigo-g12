function factoriales(numero) {
    if (numero === 0)
        return 1;

    for (let i = numero - 1; i >= 1; i--) {
        numero = numero * i;
    }
    return numero;
}
console.log(factoriales(5));