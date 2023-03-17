const searchText = document.querySelector("#input-text");
const btnSearch = document.querySelector("#btn-search");
const avatar = document.querySelector("#avatar");
const fullName = document.querySelector("#name");
const userName = document.querySelector("#username");
const dateJoined = document.querySelector("#dateJoined");
const repos = document.querySelector(".repos");
const followers = document.querySelector(".followers");
const following = document.querySelector(".following");
const locat = document.querySelector(".location");
const github = document.querySelector(".github");
const gitUser = document.querySelector(".gitUser");

// btnSearch.onclick = async function () {
//     if(!searchText.value) return; //si es vacío
//     const response = await fetch(`https://api.github.com/users/${searchText.value}`);

//     const infoData = await response.json();
//     searchText.value="";
//     console.log(infoData);
// }

btnSearch.onclick = async function(){
    if(!searchText.value) return;
    const response = await fetch(`https://api.github.com/users/${searchText.value}`);

    const infoData = await response.json();
    searchText.value="";
    searchText.focus();

    console.log(infoData);
    avatar.src = infoData.avatar_url;
    fullName.textContent = infoData.name;
    userName.textContent = `@${infoData.login}`;
    dateJoined.textContent = Date(infoData.created_at);
    //const dateJoined = new Date(infoData.created_at);
    //console.log(dateJoined.toDateString());
    repos.textContent = infoData.public_repos;
    followers.textContent = infoData.followers;
    following.textContent = infoData.following;
    locat.textContent = infoData.location;
    github.textContent = infoData.html_url;
    gitUser.textContent = infoData.login;
}