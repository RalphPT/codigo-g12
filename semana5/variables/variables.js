const nombre = "Raphael";
const direccion = "Av Siempre Viva 123";
const pasatiempos = "Futbol, videojuegos, caminar";


//Los console no deben ir a producción
console.log(nombre);
console.error(direccion);
console.warn(pasatiempos);

let curso = "Front-End developer";

console.log(curso);

// Guardar mas de un valor en una variable
// array - arreglo

//camelcase

/**
 * cada elemento de un array tiene indices
 * esos indices inician con el numero 0
 * si queremos obtener el primer valor de
 * un array tenemos que usar el indice 0
 */
const cursosDeProgramacion = ["js", "CSS", "html", "REACT"];

console.log(cursosDeProgramacion);
console.log("indice 0", cursosDeProgramacion[0]);
console.log("indice 1", cursosDeProgramacion[1]);
console.log("indice 2", cursosDeProgramacion[2]);
console.log("indice 3", cursosDeProgramacion[3]);

let datosVariados = ["mouse", true, 100, null, -10, "hola"];

/**
 * JS tiene funciones ya creadas para poder alterar los
 * valores de un arreglo
 */

// Para aumentar un valor a un array usamos
// la función push, inserta un nuevo valor al final
// del array
datosVariados.push("otro dato");

console.log("-------------");
console.log(datosVariados);

//Para quitar el último valor de un array
datosVariados.pop();

//alterando un valor en específico
datosVariados[1] = false;
//Inserta un elemento en la primera posición (0) de un arreglo
datosVariados.unshift("Soy primero");
//Elimina el primer elemento posicion(0)
datosVariados.shift();

console.log("--------------");
console.log(datosVariados);

console.log("----------- AT ---------");
console.log(datosVariados.at(4));
