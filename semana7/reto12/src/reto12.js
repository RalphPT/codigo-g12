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

    // if(input.value === apiURL.name){
    //     alert("Algo salió mal"); 
    //     return;
    // }
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
    input.value = "";
    getTareas();
    /* renderTareas(); */

};

//crear una funcion que liste (get) las tareas
async function getTareas() {
    const response = await fetch("https://641523a54f32ca32918f7bb9.mockapi.io/tasks/");
    // console.log(response);
    const data = await response.json();
    // console.log(data)
    renderTareas(data);
}

function renderTareas(tareas) {
    tasks.innerHTML = "";
    tareas.forEach((tarea) => {
        tasks.innerHTML += `
        <div class="card mt-3" > 
            <div class="card-body">
                <div>
                    <h4 id="name-${tarea.id}">${tarea.name}</h4>
                </div>
                <div>
                    <button class="btn btn-primary">Terminado</button>
                    <button onclick="updateTarea('${tarea.id}')" class="btn btn-warning">Editar</button>
                    <button onclick="deleteTarea(this)" data-id="${tarea.id}" class="btn btn-danger">Eliminar</button>
                </div>
            </div>
        </div>` //id="name-${task.id}"" generando un id dinamico
    });
}
getTareas();

//min 53, clase 8 22/03/2023
async function deleteTarea(element) { //element es el boton this, creo
    const id = element.dataset.id; // data set busca todos los data contenido, este caso solo halla al data-id
    // console.log(element.dataset.id)
    const response = await fetch(`${apiURL}/${id}`, {
        method: "DELETE",
        headers: {
            "content-type": "application/json",
        },
    });

    if (!response.ok) {
        alert("Algo salió mal");
        return;
    }

    //element = button // Eliminando el giftcard en tiempo real 
    element.closest(".card").style.display = "none"; //accediendo al elemento padre de forma corta y rápida solo indicando la clase)
    //element.parentElement.parentElement.parentElement.style.display = "none" //parentElement, para llegar al padre y otro para llegar al padre del padre
    // console.log(element.parentElement.parentElement.parentElement.style.display="none");
}

async function updateTarea(id) {
    const newText = prompt("Ingrese el nuevo texto de la tarea");
    const response = await fetch(`${apiURL}/${id}`, {
        method: "PUT",
        headers: {//por qué comillas? 02H:35m
            "content-type": "application/json",
        },
        body: JSON.stringify({ //Actualizar nombre de tarea
            name: newText,
        }),
    });
    if (!response.ok) {
        alert("Hubo un error");
        return;
    }
    //
    const textTask = document.querySelector(`#name-${id}`)
    textTask.textContent = newText; //Alterando el valor con esta linea
}

//otra manera de jalar la info
// async function getTareas() {
//     const response = await fetch("https://641523a54f32ca32918f7bb9.mockapi.io/tasks/");
//     // console.log(response);
//     const data = await response.json();
//     // console.log(data)

//     tareas.forEach((tarea) => {
//         tasks.innerHTML += `<div><h2>${tarea.name}</h2></div>`
//     });
// }

