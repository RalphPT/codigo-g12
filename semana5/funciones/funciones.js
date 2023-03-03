/**
 * Una función en JS recibe parámetros, esos van dentro
 * de los paréntesis
 * 
 * Queremos hacer una función la cual recibe un nombre
 * y edad y retorna el siguiente mensaje
 * 
 * Hola soy nombre y tengo edad años
 * 
 * Las funciones son creadas para hacer una instrucción
 * por ende hay 2 tipos de funciones
 * 
 * Primer tipo (puras) las cuales usan una palabra reservada
 * llamada return la cual indica que es  lo que nuestra función
 * retorna
 * 
 * Segun tipo (impura) las cuales solo sirven para ejecutar
 * una acción, pero estas no retornan nada
 */

/**
 * Cuando queremos juntar un string mas variable
 * eso se llama concatenar y en JS hay 2 formas
 * "Hola soy " + nombre + "y tengo " + edad + "años"
 * 
 * existe un concepto llamado template string,
 * el cual permite concatenar string + variables de la
 * siguiente forma
 * 
 *  'Hola soy ${nombre} y tengo ${edad} años'
 */
//BACKTICK alt + 96, CTRL + alt + }, ALT GR + }
function saludar(nombre, edad) {
    return `Hola soy ${nombre} y tengo ${edad} años`;
}

const saludo = saludar("Juan", 98);
let saludo2 = saludar("Pepe", 11);
const saludo3 = saludar(true, null);

console.log(saludo);
console.log(saludo2);
console.log(saludo3);

// Calcular el área de un cuadrado
// lado
//Funcion impura
function calcularAreaDeCuadrado(lado){
    console.log(lado ** 2);
}

calcularAreaDeCuadrado(10);
calcularAreaDeCuadrado(4);

/** FUNCION PURA
 * function calcularAreaDeCuadrado(lado){
    console.log(lado ** 2);
}
* console.log(calcularAreaDeCuadrado(10));
* console.log(calcularAreaDeCuadrado(4));
 */

//Una función que me diga si una persona es mayor o menor de edad

function esMayorDeEdad(edad){
    if (edad >= 18){
        return "Es mayor de edad";
    }else{
        return "No es mayor de edad";
    }
}

const res1 = esMayorDeEdad(10);
const res2 = esMayorDeEdad(20);

console.log("texto de ayuda", res1);
console.log("res2", res2);


// Operadores logicos
// > < >= <= ===
// !== distinto
console.log("10 > 20", 10 > 20);
console.log("20 >= 20", 20 >= 20);
console.log("10 < 5", 10 < 5);
console.log("5 <= 20", 5 <= 20);
console.log("1 == 1", "1" == 1);
console.log("1 === 1", "1" === 1);

// Hacer una función para saber si un numero es par o impar

function esNumeroParOImpar(numero){
    if (numero % 2 === 0){
        return "Es un número par";
    } else{
        return "Es un número impar"
    }
}

const num1 = esNumeroParOImpar(12);
const num2 = esNumeroParOImpar(13);
console.log(num1);
console.log(num2);

/*
 * Reto #1
 * EL FAMOSO "FIZZ BUZZ"
 *
 * Enunciado: Escribe una funcion que muestre por consola (con un print)
 * esta funcion recibe un numero
 * sustituyendo los siguientes:
 * - Múltiplos de 3 por la palabra "fizz".
 * - Múltiplos de 5 por la palabra "buzz".
 * - Múltiplos de 3 y de 5 a la vez por la palabra "fizzbuzz".
 */

// Hay 2 operadores que permite juntar mas de una opcion
// y => and => &&
// ó => or => ||
// distinto => !==

function calcularFizzBuzz(numero){

    if (typeof numero !== "number"){
        return "El programa solo acepta números"
    }// return indica que es el fin de una función

    if (numero % 3 === 0 && numero % 5 === 0){
        return "fizzbuzz";
    }else if (numero % 3 === 0){
        return "fizz";
    }else if (numero % 5 === 0){
        return "buzz";
    }else{
        return "El número no cumple las condiciones de juego";
    }
}

const r1 = calcularFizzBuzz(13) //No cumple
const r2 = calcularFizzBuzz(3) // Fizz
const r3 = calcularFizzBuzz(5) // Buzz
const r4 = calcularFizzBuzz(225) // FizzBuzz
console.log(r1);
console.log(r2);
console.log(r3);
console.log(r4);

//REFACTORIZADO

function calcularFizzBuzzRefactor(numero){

    if (typeof numero !== "number")return "El programa solo acepta números"

    if (numero % 15 === 0) return "fizzbuzz";
    if (numero % 3 === 0) return "fizz";
    if (numero % 5 === 0) return "buzz";
    
    return "El número no cumple las condiciones de juego";
    
}

const r5 = calcularFizzBuzzRefactor(13) //No cumple
const r6 = calcularFizzBuzzRefactor(3) // Fizz
const r7 = calcularFizzBuzzRefactor(5) // Buzz
const r8 = calcularFizzBuzzRefactor(225) // FizzBuzz
console.log(r5);
console.log(r6);
console.log(r7);
console.log(r8);


// Funciones anonimas
console.log("Funciones anonimas");

/**
 * Esta funcion sirve para calcular el area de un rectangulo
 * @param {number} base 
 * @param {number} altura 
 * @returns {number}
 */

const calcularAreaRectangulo = function (base , altura){
    return base * altura;
}

console.log(calcularAreaRectangulo(10, 20));

// FUNCIONES TIPO FLECHA => arrow functions

/**
 * Esta función sirve para poder decifrar una moneda    
 * @param {string} moneda 
 * @returns {string}
 */
const decifrarMoneda = (moneda) => {
    if (moneda === "S/") return "Soles";
    if (moneda === "$") return "Dolares";
    if (moneda === "MXN") return "Pesos Mexicanos";
    return moneda;
};

console.log(decifrarMoneda("S/"));

/**
 * Esta funcion sirve para calcular el areade una rectangulo
 * @param {number} base 
 * @param {number} altura 
 * @returns {number}
 */

// arrow function inline // solo se usa cuando retornamos algo simple
const calcularRectangulo = (base, altura) => base * altura;

console.log(calcularRectangulo(100, 200))
