function numeroRandom(min, max){
    //Generar un número al azar entre 15 y 34 y devolverlo
    
    return Math.random()*(max-min+1)+min;

}

const random = numeroRandom(15, 34);
console.log(Math.floor(random));