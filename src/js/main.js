"use strict";
import "../scss/main.scss";

// Импорты модулей
// import posts from "./posts/posts";
// import initSlides from "./slider/initSlider";
// import filterPosts from "./posts/fiterPosts";
// import photoPost from "./photoPost/renderPhotoPost";
// import renderEditorsPick from "./editorsPick/renderEditorsPick";
// import renderPostArticle from "./posts/renderPostArticle";
// import renderFilterButton from "./posts/renderFilterButtons";

// Глобальный роутинг по URL или data-атрибутам
// function initHomePage() {
//   //   searchPosts();
//   //   filterPosts();
//   //   posts();
//   //   renderFilterButton();
//   //   renderEditorsPick();
// }

// function initPhotoPostPage() {
//   photoPost();
// }

// function initArticlePage() {
//   renderPostArticle();
// }

// // Определим, какую страницу инициализировать
// function routePage() {
//   const pathname = window.location.pathname;

//   if (pathname.includes("/#post-")) {
//     initArticlePage();
//   }
// }

// // Запускаем роутинг при загрузке
// window.addEventListener("DOMContentLoaded", () => {
//   routePage();
// });
import postsJson from "../../posts.json";
import { v4 as uuidv4 } from "uuid";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "./localStorage/localStorage.js";
import initSlides from "./slider/initSlider.js";
import posts from "./posts/posts.js";
import renderEditorsPickPhotos from "./editorsPick/renderEditorsPick.js";
import renderPhotoPost from "./photoPost/renderPhotoPost.js";
import searchPosts from "./searchPosts/searchPosts";
import menu from "./header/menu";
import fullPostInfo from "./posts/renderPostArticle";
import renderArticlePage from "./articles/allPosts.js";
import renderModalAddArticle from "./articles/addPosts/renderModalAddArticle.js";
import addPost from "./articles/addPosts/addPosts.js";

const allPosts = getItemLocalStorage("posts");
const navLinks = document.querySelectorAll(".js__link");
const main = document.querySelector(".main");

function renderMainPage() {
  main.innerHTML = "";

  const postSection = posts(allPosts);
  const photoSection = renderPhotoPost();
  const editorsSection = renderEditorsPickPhotos();

  main.append(postSection, photoSection, editorsSection);

  addHeaderClickListeners();
  addPostClickLesteners();
  initSlides();
}

function addPostClickLesteners() {
  document.querySelector(".posts__list").addEventListener("click", (e) => {
    const post = e.target.closest(".post");
    const id = post.dataset.id;
    window.location.hash = `#post-${id}`;
  });
}

function addHeaderClickListeners() {
  const menu = document.querySelector(".menu__container");
  const menuBtn = document.querySelector(".menu__button");
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

        window.location.hash = "#articles";
      } else if (
        navLink.hasAttribute("data-about-page") ||
        navLink.hasAttribute("data-menu-about-page")
      ) {
        menuBtn.classList.remove("open");
        menu.classList.remove("menu-active");
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
    const localPosts = getItemLocalStorage("posts");
    const fullPost = localPosts.find((p) => p.id === id);

    fullPostInfo(fullPost);
    window.scrollTo(0, 0);
  }
  //   else {
  //     renderMainPage();
  //     window.scrollTo(0, 0);
  //   }
  else if (hash.startsWith("#articles")) {
    document.querySelector("[data-articles-page]").classList.add("active-nav");
    document
      .querySelector("[data-menu-articles-page]")
      .classList.add("active-nav");
    main.innerHTML = "";
    renderArticlePage(allPosts);
    addPostClickLesteners();
    const modal = renderModalAddArticle(allPosts);
    document.body.append(modal);
    addPost(allPosts);
    window.scrollTo(0, 0);
  } else if (hash.startsWith("#about")) {
    document.querySelector("[data-about-page]").classList.add("active-nav");
    document
      .querySelector("[data-menu-about-page]")
      .classList.add("active-nav");
    main.innerHTML = "";
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
export default addPostClickLesteners;
