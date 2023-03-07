const values = [true, 5, false, "hola", "amigos", 20, 3.4, 10];
function typevalue (){
    for( let i=0; i<values.length; i++){
        console.log(typeof(values[i]));
    }
}
typevalue();