const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');
let showMenu = false;

burger.addEventListener('click', onBurgerClick);

function onBurgerClick() {
  if (!showMenu) {
    burger.classList.add('active');
    menu.classList.add('active');
    showMenu = true;
  } else {
    burger.classList.remove('active');
    menu.classList.remove('active');
    showMenu = false;
  }
}
