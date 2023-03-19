//el texto que escribo en el input se muestre en consola
const containerForm = document.querySelector("#container-form");
const input = document.querySelector("input");
const tasks = document.querySelector(".tasks");

// form.onsubmit = function (event){
//     event.preventDefault();
//     if(!input.value) return;
//     console.log(input.value);
// }

const apiURL = "https://641523a54f32ca32918f7bb9.mockapi.io/tasks";

containerForm.onsubmit = async function (event) {
    //para evitar que la web cargue
    event.preventDefault();

    if (!input.value) return;

    // console.log(input.value);
    const response = await fetch(apiURL, {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify({
            name: input.value,
            status: 1,
        }),
    });
    const data = await response.json();
    // console.log(data);   
    input.value ="";
};


async function getTareas(){
    const response = await fetch("https://641523a54f32ca32918f7bb9.mockapi.io/tasks/");
    // console.log(response);
    const data = await response.json();
    // console.log(data)
    renderTareas(data);
}

function renderTareas(tareas){
    tareas.forEach((tarea) => {
        tasks.innerHTML +=`
        <div>
        <h2>${tarea.name}</h2>
        </div>`
    });
}

getTareas();