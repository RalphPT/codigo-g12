function palindromo (cadena){
    let string = cadena.toLowerCase().replaceAll(/\s+/g, "");
    let arrayReverseCadena = string.split("").reverse().join("");

    if(arrayReverseCadena == string) console.log("Es palindromo");
    else console.log ("No es palindromo");
}
palindromo("Anitá lava lá tina")