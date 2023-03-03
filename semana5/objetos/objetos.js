//celular es el objeto
const celular = {
    //KEY (LLAVE)   : value (valor)
    marca: "apple",
    precio: 1200,
    rating: 4.4,
    oferta: 1000,
};

console.log(celular);

// destructuracion sirve para poder extraer alguna propiedad
// una manera de acceder a los valor de los objetos de sus keys
const { 
    marca: nombreDeMarca, 
    precio: precioFinal, 
    rating: puntuacion, 
    oferta} 
    = celular;
    
console.log("marca",  nombreDeMarca);


const persona = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 28,
    altura: 1.78,
    peso: 76.4,
    hobby: ["Futbol", "Natacion", "Bicicleta"],
    esMayorDeEdad: true,
    saludar: function (){
        return `Hola soy ${this.nombre} ${this.apellido} y tengo ${this.edad} años`;
    },
};

console.log("--- USANDO FUNCIONES EN OBJETOS ---");
console.log(persona.saludar());

console.log ("--- CONVERTIMOS UN OBJETO A UN ARRAY");
console.log ("values", Object.values(persona));
console.log ("keys", Object.keys(persona));

//ITERANDO VALUES
for (let valor of Object.values(persona)){
    console.log("valor", valor);
}
//ITERANDO KEYS
for (let key of Object.keys(persona)){
    console.log("key", key);
}

console.log("--- mostrando datos del objeto ---");
console.log(persona["edad"]);//antes se mostraba el dato así
console.log(persona.edad); //ahora se muestra el dato así
console.log(persona.nombre, persona.apellido);

console.log("--- insertando valores al objeto ---");
// dos maneras de insertar el dato
persona["dni2"] = "11111";
persona.dni = "88888888";

console.log ("--- mostrando el objeto actualizado ---");
//mostrando el objeto actualizado
console.log(persona);

console.log ("--- mostrando con for todo el contenido de un array ---");
// mostrando con for todo el contenido de un array
for (let hobby of persona.hobby) {
    console.log(hobby);
}

console.log ("--- DOS OBJETOS ---");
//2 objetos
const carros = [
    {
        marca: "bmw",
        modelo: "m2",
        precio: 200000,
        año: 2023,
        color: "rojo",
    },
    {
        marca: "mercedez",
        modelo: "gla 2",
        precio: 145000,
        año: 2022,
        color: "azul,"
    }
];

console.log("--- ITERANDO UN ARRAY DE OBJETOS ---");

for (let carro of carros) {
    console.log("marca", carro.marca);
}