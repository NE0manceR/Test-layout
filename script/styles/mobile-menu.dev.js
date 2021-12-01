"use strict";

var menu = document.querySelector('.mobile-menu');
var burgerBtn = document.querySelector('.header__mobile_menu');
burgerBtn.addEventListener('click', showMenu);
menu.addEventListener('click', closeMenu);

function showMenu() {
  console.log(menu.classList.contains('mobile-menu-show'));
  menu.classList.toggle('mobile-menu-show');
}

function closeMenu(event) {
  if (event.target.classList[0] === 'mobile-menu') {
    showMenu();
  }
}