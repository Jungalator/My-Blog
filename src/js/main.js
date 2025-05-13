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

import { getItemLocalStorage } from "./localStorage/localStorage.js";
import initSlides from "./slider/initSlider.js";
import posts from "./posts/posts.js";
import renderEditorsPickPhotos from "./editorsPick/renderEditorsPick.js";
import renderPhotoPost from "./photoPost/renderPhotoPost.js";
import searchPosts from "./searchPosts/searchPosts";
import menu from "./header/menu";
import fullPostInfo from "./posts/renderPostArticle";

const main = document.querySelector(".main");

function renderMainPage() {
  main.innerHTML = "";

  const postSection = posts();
  const photoSection = renderPhotoPost();
  const editorsSection = renderEditorsPickPhotos();

  main.append(postSection, photoSection, editorsSection);

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

function handleHashChange() {
  const hash = window.location.hash;

  if (hash.startsWith("#post-")) {
    console.log("Hash changed:", window.location.hash);
    const id = hash.replace("#post-", "");
    const localPosts = getItemLocalStorage("posts");
    const fullPost = localPosts.find((p) => p.id === id);

    fullPostInfo(fullPost);
    window.scrollTo(0, 0);
  } else {
    renderMainPage();
    window.scrollTo(0, 0);
  }
}

window.addEventListener("DOMContentLoaded", () => {
  handleHashChange();
});
window.addEventListener("hashchange", handleHashChange);
export default addPostClickLesteners;
