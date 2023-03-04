// console.log(console);
// console.log(window);
// console.log(Math);

// Objeto Math
// Math.pow


//Math.pow(base, exponente);

console.log(Math.pow (2, 2));
console.log(Math.pow (-2, 5))
console.log(Math.pow (2.4, 5))

Math.round, Math.floor, Math.ceil

// Math.round = redondea un número decimal al entero más proximo

console.log(Math.round(6.45));

// Math.floor = redondea el número decimal al entero de menor valor

console.log(Math.floor(6.999));

// Math.ceil = redondea un número al entero más cercano hacia arriba

console.log(Math.ceil(6.0001));

//permite conocer el valor máximo y mínimo
Math.max, Math.min

console.log(Math.max(1, 2, 3, 4, 5));
console.log(Math.min(1, 2, 3, 4, 5));

const numero = [1, 2, 3, 4, 5]
console.log(Math.max(...numero)) // =>spread operator // muestra el número máximo en un array

//*-*--*-*-*-*-*--*-***-*****-*--*-*-*-*-*--*-***-*****-*--*-*-*-*-*--*-***-*****-*--*-
//Math.random() = permite generar un número aleatorio entre 0 y el 1 (toma el 0 y excluye el 1)
//ejemplo numero aleatorio entre el 1 al 10
min = 1; max =10
console.log(Math.floor(Math.random()*(max-min+1)+min));


//Object.keys(); => Nos devuelve un arreglo con el nombre de todas las propiedades de un objeto

const libro = {
    auto: 'Borges',
    genero: 'policial',
    año: 1990,
};

const todasLasPropiedades = Object.keys(libro);
console.log(todasLasPropiedades);

//Object.values(); => devuelve todos los valores de nuestro objeto
const todosLosValores = Object.values(libro);
console.log(todosLosValores);


//Método del objeto String

"Codigo Frontend";
'Codigo Frontend';

const nombre = 'Mariana';
const apellido = 'Navarro';
const edad = 28;

const resultado = nombre + apellido + edad;
console.log(resultado);

const resultado2 = 'Hola ' + nombre + ' ' + apellido + ' tu edad es ' + edad;
console.log(resultado2);

// Template string: una forma de concatenar de manera más sencilla
const resultado3 = `Hola ${nombre} ${apellido} tu edad es ${edad}`;
console.log(resultado3);

const resultado4 = `
Hola ${nombre} ${apellido}
tu edad es ${edad}`;
console.log(resultado4);

//toLowerCase, toUpperCase
const names = "Rafael";
console.log(names.toLowerCase());
console.log(names.toUpperCase());

// trim (elimina solo los espacio en blanco al inicio y al final de la cadena)
const fruta = " platano ";
console.log(fruta.trim());

// includes => nos indica si una cadena de texto se encuentra dentro de otra cadena de texto, devuelve: true o false
const bootcamp = "Fullstack Codigo";
console.log(bootcamp.includes("F"));