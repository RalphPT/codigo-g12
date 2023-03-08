// A partir del siguiente array que se proporciona:

// const valores = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
// Determinar cuales con los tipos de datos que contiene el array. Utilizar funciones para resolverlo.

const values = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
function typevalue() {
    for (let i = 0; i < values.length; i++)
        console.log(typeof (values[i]));
}
typevalue();