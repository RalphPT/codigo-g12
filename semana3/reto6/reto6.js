//input
const inputBill = document.querySelector("#input-bill");
const numberPeople = document.querySelector("#number-people");

// button
const percentageFive = document.querySelector("#percentage-5");
const percentageTen = document.querySelector("#percentage-10");
const reset = document.querySelector("#reset");
// const percentageFifteen = document.querySelector("#percentage-15");
// const percentageTwentyFive = document.querySelector("#percentage-25");
// const percentageFifty = document.querySelector("#percentage-50");

// span //querySelector =>trae al elemento para este caso el valor del input
const tip = document.querySelector(".tip")
const total = document.querySelector(".total")

function calculateTip(percentage) {
    //Number convierte el string a números
    const bill = Number(inputBill.value);
    const people = Number(numberPeople.value);

    if (!bill || !people) {
        alert("Debes rellenar todos los campos");
        return;
    }
    // console.log(people, bill);

    // Si no estan vacios debemos hacer el cálculo
    // (bill * 5 / 100) / people

    const result = (bill * Number(percentage)) / people;
    //total = bill + (bill*0.05)
    const rtotal = (bill + bill * Number(percentage)) / people;

    //toFixed => redondea a la cantidad de decimales que querramos

    //textContent, permite cambiar el texto de un elemento o sobreescribe, para este caso sobreescribe al span
    tip.textContent = `S/ ${result.toFixed(2)}`;
    total.textContent = `S/ ${rtotal.toFixed(2)}`;
}

percentageFive.onclick = () => calculateTip(0.05);

percentageTen.onclick = () => calculateTip(0.1);

//RESET
reset.onclick = () => {
    inputBill.value = "";
    numberPeople.value = "";
    //textContent para span
    tip.textContent = "S/ 0.00";
    total.textContent = "S/ 0.00";
    inputBill.focus();
}

// percentageFifteen.onclick=function(){
//     calculateTip(0.15);
// }
// percentageTwentyFive.onclick=function(){
//     calculateTip(0.25);
// }
// percentageFifty.onclick=function(){
//     calculateTip(0.5);
// }

//REPETIR CÓDIGO INNECESARIO ES

// porcentageFive.onclick = function () {
//     //Number convierte el string a números
//     const bill = Number(inputBill.value);
//     const people = Number(numberPeople.value);

//     if (!bill || !people) {
//         alert("Debes rellenar todos los campos");
//         return;
//     }
//     // console.log(people, bill);

//     // Si no estan vacios debemos hacer el cálculo
//     // (bill * 5 / 100) / people

//     const result = (bill * 0.05) / people;
//     //total = bill + (bill*0.05)
//     const rtotal = (bill + bill * 0.05) / people;

//     //toFixed => redondea a la cantidad de decimales que querramos

//     //textContent, permite cambiar el texto de un elemento o sobreescribe, para este caso sobreescribe al span
//     tip.textContent = `S/ ${result.toFixed(2)}`;
//     total.textContent = `S/ ${rtotal.toFixed(2)}`;
// };

