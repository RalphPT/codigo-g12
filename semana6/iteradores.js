const numbers = [1, 10, 12, 30, 21, 32, 94];
/**
 * Cuando usar forEach?
 * Cuando necesitamos iterar sobre un array y no necesitamos retornar un nuevo array
 */
//ForEach             // cada elemento, posicion(0,1,2,etc) => es opcional
numbers.forEach(function (number, index) {
    if (number > 20) {
        console.log("Es mayor a 20", number, index);
    } else {
        console.log("Es menor a 20", number, index);
    }
});

//map => se usa cuando queremos cambiar o crear un array en base a otro
const powNumbers = numbers.map(function (number) {
    return { nummber: number ** 2 }; //|| return number**2
});
console.log("powNumbers");
console.log(powNumbers);
console.log(numbers);

// forEach itera un elemento, mientras que map itera un elemento, pero retorna un array base a otro elemento iterado.



// USANDO Arrow Function
console.log("Usando arrow function");

numbers.forEach((number, index) => {
    console.log(`${index}- ${number}`);
});

const powNumbersArrow = numbers.map((number) => {
    return { number: number ** 3 };
});

console.log(powNumbersArrow);

const powNumbersArrowInline = numbers.map((number) => number * 2);
console.log(powNumbersArrowInline);
// =============================================================================

// filter
const products = [
    {
      id: 1,
      name: "TV 75 pulgadas",
      category: ["Tech"],
      price: 3500.34,
      stock: 20,
    },
    {
      id: 2,
      name: "Cama king",
      category: ["Hogar"],
      price: 500.99,
      stock: 200,
    },
    {
      id: 3,
      name: "iPhone 14 pro",
      category: ["Tech"],
      price: 5600,
      stock: 10,
    },
    {
      id: 4,
      name: "microondas",
      category: ["Tech", "Hogar"],
      price: 500,
      stock: 120,
    },
    {
      id: 5,
      name: "iPhone 11",
      category: ["Tech", "Hogar"],
      price: 500,
      stock: 0,
    },
  ];


// filtro para tener los productos que cuesta más de 1000
const filterPrice = products.filter((product) => product.price > 1000);
console.log("Filter");
console.log(filterPrice);

//category: Tech
const filterCategory = products.filter((product) => product.category.includes("Tech") // includes => dice si existe en el array, si existe, retorna un true, si no existe un false.
);

console.log("filter category", filterCategory);

 const filtro = products.filter((product) =>
 product.category
      .join("-") // "Tech-Hogar"
       .toLowerCase() // "tech-hogar"
       .split("-") // ["tech", "hogar"]
        .includes("TECH".toLowerCase())
);

//===============================================================================
// busqueda que solo retorne un elemento
// iphone 14 pro
// find no retorna array retorna 1 solo elemento
const search = products.find(//find, forEarch, Map solo es solo para arrays
    (product) => product.name.toLowerCase() === "iphone 14 Pro".toLowerCase()
  );
  
  console.log("Buscando solo 1 elemento");
  console.log(search);

//================================================================================
// findIndex buscar solo un elemento pero lo que retorna es el indice(posicion)
const searchIndex = products.findIndex((product) => product.price > 1000);

// const searchIndex = products.findIndex(function(product) {
//      return product.price > 1000;
// });

console.log("searchIndex", searchIndex);

/**
 * for / si soporte return
 * for of / sí soporta return
 * for in / si soporta return
 * forEach
 * map /return []
 * filter /return []
 * find / return element
 * findIndex /return number
 */

// Quiero hacer una búsqueda, no es exacta, ejemlo escribo iPhone
const searchIphone = products.filter((product) => product.name.toLowerCase().includes("iphone".toLowerCase())
);

console.log("searchIphone", searchIphone);

//every => todo     &&
//some => alguno    ||

//ambos retornan true o false / si uno de los elementos no cumple da false
const hasStock = products.every((product) => product.stock > 0);
console.log(hasStock);

//basta que un elemento cumpla, da true
const hasZeroStock = products.some((product) => product.stock > 0);
console.log(hasZeroStock);
