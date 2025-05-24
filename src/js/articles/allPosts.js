"use strict";
import { v4 as uuidv4 } from "uuid";
import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import postsJson from "../../../posts.json";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../localStorage/localStorage.js";
import renderPhotoPost from "../photoPost/renderPhotoPost.js";
import renderFilterButton from "../posts/renderFilterButtons.js";

const template = Handlebars.compile(templateString);

let postsArr = getItemLocalStorage("posts");
if (!postsArr || postsArr.length === 0) {
  postsArr = postsJson.map((post) => ({
    ...post,
    id: uuidv4(),
  }));
  setItemLocalStorage("posts", postsArr);
}

function renderArticlePage(newPost) {
  const main = document.querySelector(".main");
  const allPostsSection = document.createElement("section");
  allPostsSection.className = "posts";

  const allPostsTitleAndAddContainer = document.createElement("div");
  allPostsTitleAndAddContainer.className = "all-posts__title-and-add-container";

  const openBtn = document.createElement("button");
  openBtn.className = "modal__open-btn";
  openBtn.insertAdjacentHTML(
    "beforeend",
    `
  <svg class="modal__open-svg">
  <use xlink:href="favicon/sprites.svg#open"></use>
  </svg>
  `
  );

  const paginationContainer = document.createElement("div");
  paginationContainer.className = "pagination";

  const paginationList = document.createElement("ul");
  paginationList.className = "pagination__list";
  paginationList.classList.add("list");

  const btnPrev = document.createElement("button");
  btnPrev.className = "btn-prev";
  btnPrev.textContent = "←";

  const btnNext = document.createElement("button");
  btnNext.className = "btn-next";
  btnNext.textContent = "→";

  let articlesCount = 8;
  let currentPage = 1;

  let firstArticlesIndex = articlesCount * currentPage - articlesCount;

  let lastArticlesIndex = firstArticlesIndex + articlesCount;

  let articlesOnPage = newPost.slice(firstArticlesIndex, lastArticlesIndex);

  const pageCount = Math.ceil(newPost.length / articlesCount);

  openBtn.addEventListener("click", () => {
    document.querySelector(".modal").classList.add("open-modal");
    document.body.classList.add("overflow-hidden");
    document.documentElement.classList.add("overflow-hidden");
  });

  const postsTitle = document.createElement("h3");
  postsTitle.className = "posts__title";
  postsTitle.textContent = "All articles";

  const allPostsList = document.createElement("ul");
  allPostsList.className = "posts__list list";

  main.innerHTML = "";

  let allposts = template(articlesOnPage);

  const renderBtn = (page) => {
    const li = document.createElement("li");
    li.className = "pagination__item";
    li.textContent = page;

    if (page === currentPage) li.classList.add("active-count");

    return li;
  };

  for (let i = 1; i <= pageCount; i++) {
    const li = renderBtn(i);

    paginationList.append(li);
  }

  const updatePagination = () => {
    paginationContainer.addEventListener("click", (e) => {
      const currentLiActive = document.querySelector(
        ".pagination__item.active-count"
      );
      if (!e.target.closest(".pagination__item")) {
        return;
      } else {
        currentPage = e.target.textContent;

        firstArticlesIndex = articlesCount * currentPage - articlesCount;

        lastArticlesIndex = firstArticlesIndex + articlesCount;

        articlesOnPage = newPost.slice(firstArticlesIndex, lastArticlesIndex);
        allposts = template(articlesOnPage);
        allPostsList.innerHTML = "";
        allPostsList.insertAdjacentHTML("beforeend", allposts);

        currentLiActive.classList.remove("active-count");
        e.target.classList.add("active-count");
      }
      window.scroll({
        top: allPostsSection.offsetTop,
      });
    });
  };
  updatePagination();

  const handlePagination = (e) => {
    const liElements = document.querySelectorAll(".pagination__item");

    const currentActiveLi = document.querySelector(
      ".pagination__item.active-count"
    );
    let newActiveLi;

    if (e.target.closest(".btn-next")) {
      newActiveLi = currentActiveLi.nextElementSibling;
      currentPage++;
    } else {
      newActiveLi = currentActiveLi.previousElementSibling;
      currentPage--;
    }

    if (!newActiveLi && e.target.closest(".btn-next")) {
      newActiveLi = liElements[0];
    } else if (!newActiveLi) {
      newActiveLi = liElements[liElements.length - 1];
    }

    currentActiveLi.classList.remove("active-count");
    newActiveLi.classList.add("active-count");

    if (currentPage > liElements.length) {
      currentPage = 1;
    } else if (currentPage < 1) {
      currentPage = liElements.length;
    }

    firstArticlesIndex = articlesCount * currentPage - articlesCount;

    lastArticlesIndex = firstArticlesIndex + articlesCount;

    articlesOnPage = newPost.slice(firstArticlesIndex, lastArticlesIndex);
    allposts = template(articlesOnPage);
    allPostsList.innerHTML = "";
    allPostsList.insertAdjacentHTML("beforeend", allposts);
    window.scroll({
      top: allPostsSection.offsetTop,
    });
  };
  btnPrev.addEventListener("click", handlePagination);
  btnNext.addEventListener("click", handlePagination);

  allPostsTitleAndAddContainer.append(postsTitle, openBtn);
  allPostsList.insertAdjacentHTML("beforeend", allposts);
  allPostsSection.append(
    allPostsTitleAndAddContainer,
    renderFilterButton(newPost),
    allPostsList,
    paginationContainer
  );
  paginationContainer.append(btnPrev, paginationList, btnNext);
  main.append(renderPhotoPost(), allPostsSection);

  return main;
}

export default renderArticlePage;
