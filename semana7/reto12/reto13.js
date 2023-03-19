async function renderTareas(){
    const response = await fetch("https://fakestoreapi.com/products/categories");
    console.log(response);
    const data = await response.json();
    console.log(data)
    // renderTareas(data.value);
}

renderTareas();