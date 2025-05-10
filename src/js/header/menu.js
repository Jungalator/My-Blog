"use strict";

const menuBtn = document.querySelector(".menu__button");

function showMenu() {
  document.querySelector(".menu__container").classList.toggle("menu-active");
  document.body.classList.toggle("block-scroll");
  menuBtn.classList.toggle("open");
}
menuBtn.addEventListener("click", showMenu);
export default showMenu;
