// Escribir una función que determine si la cadena de texto que se le pasa como parámetro es un palíndromo, es decir, si se lee de la misma forma desde la izquierda y desde la derecha. Ejemplos de palíndromos:

// La ruta nos aporto otro paso natural

// Sé verlas al revés

// Anita lava la tina

// Dabale arroz a la zorra el abad

// nota: Las tildes y los espacios no deben ser tenidos en cuenta.

function palindromo(cadena) {
    let string = cadena.toLowerCase().replaceAll(/\s+/g, "");
    let arrayReverseCadena = string.split("").reverse().join("");

    if (arrayReverseCadena == string) console.log("Es palindromo");
    else console.log("No es palindromo");
}
palindromo("Anitá lava lá tina")