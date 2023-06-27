const hamburgertoggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#menulist");
const menu = document.querySelector("#menuicon");
const logo = document.querySelector(".mylogo");

hamburgertoggle.addEventListener("click", onhamburgerclick)

function onhamburgerclick(){
    hamburgertoggle.classList.toggle('open')
    menu.classList.add('hidden');
    logo.classList.add('offlogo')
    if(!navbar.classList.contains("open")){
        navbar.classList.add("open");
        
        
    }
    else {
        navbar.classList.remove("open");
        menu.classList.remove('hidden')
        logo.classList.remove('offlogo')
    }
}