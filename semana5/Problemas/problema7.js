// Escribir una funcion que calcule el factorial de un número entero n es una operación matemática que consiste en multiplicar todos los factores.

// n x (n-1) x (n-2) x ... 
// Así, el factorial de 5 es igual a:

// 5! = 5 x 4 x 3 x 2 x 1 = 120

function factoriales(numero) {
    if (numero === 0) return 1;

    for (let i = numero - 1; i >= 1; i--)
        numero = numero * i;

    return numero;
}
console.log(factoriales(5));