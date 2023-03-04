const tecnologias = [20, 30, true, "React", "Javascript"]

// Añadir elementos del array

// push() => Agrega elementos al final del arreglo

tecnologias.push("GraphQL");
console.log(tecnologias);

// unshift() => Añadir elementos al incio del array

tecnologias.unshift("NodeJS");
console.log(tecnologias);

// spread operator = permite transformar un array en elementos únicos/ en lugar de usar UNSHIFT O PUSH

const nuevoArreglo1 = [ ... tecnologias, "Larabel"];
console.log(nuevoArreglo1);

const nuevoArreglo2 = ["Typescript", ... tecnologias];
console.log(nuevoArreglo2);

// Eliminar elementos de un array
// pop() => Elimina el último elemento del Array

console.log(tecnologias.pop());
console.log(tecnologias)

// shift() => Elimina el primer elemento del Array

console.log(tecnologias.shift());
console.log(tecnologias);

// splice() => Elimina una posición en específico
const tecnologias2 = [20, 30, true, "React", "Javascript"]
tecnologias2. splice(2,1)//(posicion, cantidad) // si solo es(posicion) elimina a todos los que tengan el mismo valor en la posición
console.log(tecnologias2)


const tecnologias3 = [20, 30, true, "React", "Javascript"]
//filter() => Sirve para filtrar elementos / Sirve para iterar los elementos de un array  / No elimina el arreglo original, genera uno nuevo
const nuevoArray =tecnologias3.filter(function(tech){//tech puede ser cualquier valor que le coloque, además representa cada uno de los elementos del array
    return tech !== "React";
}) 
console.log(nuevoArray); //filtra cualquier palabra que no sea React, y los demás elementos los muestra.

const nuevoArray2 =tecnologias3.filter(function(tech){
    return tech === "React";
}) //Filtra el elemento que sí sea igual a REACT, y los demás no los muestra.
console.log(nuevoArray2);

const tecnologias4 = [20, 30, true, "React", "Javascript"]
//Reemplazar elementos de un array
tecnologias4 [0] = "HTML";
console.table(tecnologias4);
//ACTUALIZADA MANERA DE HACERLO
// map() => Reemplaza el elemento y crea un nuevo array

const nuevoArray3 = tecnologias4.map(function(tech){
    if (tech === "Javascript") return "HTML";
    return tech;
})
console.log(nuevoArray3);

//forEach = me permite acceder a cada elemento del Array, se ejecuta una vez por cada elemento que hay en

const tecnologias5 = [20, 30, true, "React", "Javascript"];

tecnologias5.forEach(function(tech){
    return tech;
})
console.log(tecnologias5);


const tecnologias6 = [20, 30, true, "React", "Javascript"];
const numeros = [10, 20, 30];
// find => Devulve el primer elemento que cumple con la condición

const resultado = numeros.find(numero => numero > 9) // numero puede ser 10, 20, 30
console.log(resultado);


// some() =>me dice si al menos un elemento cumple con una condicion (true o false)
const resultado2 = numeros.some(numero => numero > 15)
console.log(resultado2);

// every() => retorna true o false si todos cumplen con la condición

// reduce() => 