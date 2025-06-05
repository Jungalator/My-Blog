"use strict";
import "../scss/main.scss";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "./localStorage/localStorage.js";
import initSlides from "./slider/initSlider.js";
import posts from "./posts/posts.js";
import renderEditorsPickPhotos from "./editorsPick/renderEditorsPick.js";
import renderPhotoPost from "./photoPost/renderPhotoPost.js";
import searchPosts from "./searchPosts/searchPosts";
import menuHeader from "./header/menu";
import fullPostInfo from "./posts/renderPostArticle";
import renderArticlePage from "./articles/allPosts.js";
import renderModalAddArticle from "./articles/addPosts/renderModalAddArticle.js";
import addPost from "./articles/addPosts/addPosts.js";
import weather from "./header/weather/start-weather-app.js";
import renderAboutPage from "./about/renderAboutPage.js";
import renderFilterButton from "./posts/renderFilterButtons.js";

let allPosts = getItemLocalStorage("posts");
const navLinks = document.querySelectorAll(".js__link");
const main = document.querySelector(".main");
const footer = document.querySelector(".footer");
const menu = document.querySelector(".menu__container");
const menuBtn = document.querySelector(".menu__button");

main.addEventListener("click", (e) => {
  const post = e.target.closest(".post");
  const removePostBtn = e.target.closest(".post__delete");

  if (post && !removePostBtn) {
    const id = post.dataset.id;
    window.location.hash = `#post-${id}`;
  }
  if (removePostBtn) {
    const filteredArr = allPosts.filter(
      (item) => item.id !== removePostBtn.dataset.id
    );

    setItemLocalStorage("posts", filteredArr);
    allPosts = filteredArr;
    post.remove();

    const filterContainer = document.querySelector(".posts__filter-container");
    filterContainer.innerHTML = "";
    filterContainer.appendChild(renderFilterButton(allPosts));
  }
});

document.querySelectorAll(".js-contact__link").forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    menuBtn.classList.remove("open");
    menu.classList.remove("menu-active");
    document.documentElement.classList.remove("block-scroll");
    document.body.classList.remove("block-scroll");
    window.scroll({
      top: footer.offsetTop,
      behavior: "smooth",
    });
  });
});

function renderMainPage() {
  main.innerHTML = "";

  const postSection = posts(allPosts);
  const photoSection = renderPhotoPost();
  const editorsSection = renderEditorsPickPhotos();

  main.append(postSection, photoSection, editorsSection);

  addHeaderClickListeners();
  initSlides();
}

function addHeaderClickListeners() {
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
      e.preventDefault();
      e.target.classList.add("active-nav");
      if (
        navLink.hasAttribute("data-articles-page") ||
        navLink.hasAttribute("data-menu-articles-page")
      ) {
        menuBtn.classList.remove("open");
        menu.classList.remove("menu-active");
        document.documentElement.classList.remove("block-scroll");
        document.body.classList.remove("block-scroll");
        window.location.hash = "#articles";
      } else if (
        navLink.hasAttribute("data-about-page") ||
        navLink.hasAttribute("data-menu-about-page")
      ) {
        menuBtn.classList.remove("open");
        menu.classList.remove("menu-active");
        document.documentElement.classList.remove("block-scroll");
        document.body.classList.remove("block-scroll");
        window.location.hash = "#about";
      } else {
        menuBtn.classList.remove("open");
        menu.classList.remove("menu-active");
        window.location = "";
      }
    });
  });
}

function handleHashChange() {
  const hash = window.location.hash;
  document
    .querySelectorAll(".js__link")
    .forEach((link) => link.classList.remove("active-nav"));
  if (hash.startsWith("#post-")) {
    console.log("Hash changed:", window.location.hash);
    const id = hash.replace("#post-", "");
    const fullPost = allPosts.find((p) => p.id === id);

    fullPostInfo(fullPost);
    window.scrollTo(0, 0);
  } else if (hash.startsWith("#articles")) {
    document.querySelector("[data-articles-page]").classList.add("active-nav");
    document
      .querySelector("[data-menu-articles-page]")
      .classList.add("active-nav");
    main.innerHTML = "";

    renderArticlePage(allPosts);

    const modal = renderModalAddArticle(allPosts);
    document.body.append(modal);
    addPost(allPosts);

    window.scrollTo(0, 0);
  } else if (hash.startsWith("#about")) {
    main.innerHTML = "";
    document.querySelector("[data-about-page]").classList.add("active-nav");
    document
      .querySelector("[data-menu-about-page]")
      .classList.add("active-nav");

    renderAboutPage();
    window.scrollTo(0, 0);
  } else {
    main.innerHTML = "";
    renderMainPage();
    window.scrollTo(0, 0);
    document.querySelector("[data-home-page]").classList.add("active-nav");
    document.querySelector("[data-menu-home-page]").classList.add("active-nav");
  }
}

window.addEventListener("DOMContentLoaded", handleHashChange);
window.addEventListener("hashchange", handleHashChange);
