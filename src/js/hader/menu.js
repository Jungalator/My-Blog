"use strict";

const menuBtn = document.querySelector(".menu__button");
const menuContainer = document.querySelector(".menu__container");
const lineBottom = document.querySelector(".line-bottom");
const lineCenter = document.querySelector(".line-center");
const lineTop = document.querySelector(".line-top");
console.log(menuContainer);

function showMenu() {
  menuContainer.classList.toggle("menu-active");
  document.body.classList.toggle("block-scroll");

  //   lineBottom.classList.toggle("line-bottom");
  lineBottom.classList.toggle("line-bottom-active");

  //   lineCenter.classList.toggle("line-center");
  lineCenter.classList.toggle("line-center-active");

  lineTop.classList.toggle("line-top-active");
  //   lineTop.classList.toggle("line-top");
}
menuBtn.addEventListener("click", showMenu);
export default showMenu;
