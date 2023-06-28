/* eslint-disable linebreak-style */
const hamburgertoggle = document.querySelector('#hamburger-toggle');
const navbar = document.querySelector('#menulist');
const menu = document.querySelector('#menuicon');
const close = document.querySelector('#closeicon');
const logo = document.querySelector('.mylogo');
const navitems = document.querySelectorAll('.navlink');

function onhamburgerclick(event) {
  menu.classList.add('hidden');
  logo.classList.add('offlogo');
  event.preventDefault();
  if (!navbar.classList.contains('open')) {
    navbar.classList.add('open');
    close.classList.add('hide');
  } else if (navbar.classList.contains('open')) {
    navbar.classList.remove('open');
    menu.classList.remove('hidden');
    logo.classList.remove('offlogo');
    navbar.classList.remove('exit');
    close.classList.remove('hide');
  }
}
hamburgertoggle.addEventListener('click', onhamburgerclick);
navitems.forEach((item) => {
  item.addEventListener('click', () => {
    navbar.classList.add('exit');
    menu.classList.remove('hidden');
    logo.classList.remove('offlogo');
    close.classList.remove('hide');
  });
});
