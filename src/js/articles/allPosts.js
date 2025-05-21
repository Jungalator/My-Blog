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
  <use xlink:href="public/favicon/sprites.svg#open"></use>
  </svg>
  `
  );

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

  const allposts = template(newPost);
  allPostsTitleAndAddContainer.append(postsTitle, openBtn);
  allPostsList.insertAdjacentHTML("beforeend", allposts);
  allPostsSection.append(
    allPostsTitleAndAddContainer,
    renderFilterButton(),
    allPostsList
  );
  main.append(renderPhotoPost(), allPostsSection);

  return main;
}

export default renderArticlePage;
