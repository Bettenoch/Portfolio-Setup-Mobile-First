const hamburgertoggle = document.querySelector("#hamburger-toggle");
const navbar = document.querySelector("#menulist");
const menu = document.querySelector("#menuicon");
const close = document.querySelector("#closeicon")
const logo = document.querySelector(".mylogo");
const navitems = document.querySelectorAll(".navlink");
const nav = document.querySelector(".nav-container")



hamburgertoggle.addEventListener("click", onhamburgerclick)

function onhamburgerclick(){
    // hamburgertoggle.classList.toggle('open')
    menu.classList.add('hidden');
    logo.classList.add('offlogo');
   
    
    if(!navbar.classList.contains("open")){
        navbar.classList.add("open");  
        close.classList.add('hide'); 
    }
    else {
        navbar.classList.remove("open");
        menu.classList.remove('hidden');
        logo.classList.remove('offlogo');
        navbar.classList.remove('exit')
        close.classList.remove('hide');
    }

   
};
navitems.forEach((item) => {
    
    item.addEventListener('click', () =>{
        navbar.classList.add('exit');
        menu.classList.remove('hidden');
        logo.classList.remove('offlogo');
        close.classList.remove('hide');
        
    });
});
