function determine (numero){
    if( numero % 2 ===0 ) return numero * 2;
    if( numero % 2 !== 0 ) return numero * 3;
}
console.log(determine(3));
console.log(determine(4));