const hamburgertoggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#menulist");

hamburgertoggle.addEventListener("click", onhamburgerclick)

function onhamburgerclick(){
    if(!navbar.classList.contains("open")){
        navbar.classList.add("open");
    }
    else {
        navbar.classList.remove("open");
    }
}