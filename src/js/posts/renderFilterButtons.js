import templateString from "../../partials/post.hbs?raw";
import Handlebars from "handlebars";
import { getItemLocalStorage } from "../localStorage/localStorage.js";
import addPostClickLesteners from "./renderPostArticle";
const template = Handlebars.compile(templateString);

function renderFilterButton() {
  const postsJson = getItemLocalStorage("posts");
  const filterButtonsContainer = document.createElement("div");
  filterButtonsContainer.className = "posts__filter-container";

  const filterButtonsList = document.createElement("ul");
  filterButtonsList.className = "posts__filter-list";
  filterButtonsList.classList.add("list");

  const filterAllItem = document.createElement("li");
  filterAllItem.className = "posts__filter-item";

  const allCategoriesBtn = document.createElement("button");
  allCategoriesBtn.className = "posts__filter-btn";
  allCategoriesBtn.dataset.allCategoriesBtn = "";
  allCategoriesBtn.textContent = "All";

  allCategoriesBtn.classList.add("active-filter");

  allCategoriesBtn.addEventListener("click", () => {
    updateActiveClass(allCategoriesBtn);
    const postsList = document.querySelector(".posts__list");
    const allPosts = postsJson.map((post) => ({ ...post }));
    if (postsList) {
      postsList.innerHTML = template(allPosts);
      // window.location.hash = "";
    }
  });

  filterAllItem.prepend(allCategoriesBtn);
  filterButtonsList.prepend(filterAllItem);

  let categories = [
    ...new Set(postsJson.flatMap((element) => element.category)),
  ];
  categories.forEach((item) => {
    const filterItem = document.createElement("li");
    filterItem.className = "posts__filter-item";

    const filterBtn = document.createElement("button");
    filterBtn.className = "posts__filter-btn";
    filterBtn.textContent = item;

    filterBtn.addEventListener("click", () => {
      updateActiveClass(filterBtn);
      const filteredPosts = postsJson.filter((post) =>
        post.category.includes(filterBtn.textContent)
      );
      const postsList = document.querySelector(".posts__list");
      if (postsList) {
        postsList.innerHTML = template(filteredPosts);
        addPostClickLesteners();
      }
    });

    filterButtonsList.append(filterItem);
    filterItem.append(filterBtn);
  });
  filterButtonsContainer.append(filterButtonsList);
  return filterButtonsContainer;
}

function updateActiveClass(activeBtn) {
  const container = activeBtn.closest(".posts__filter-container");
  const allBtns = container.querySelectorAll(".posts__filter-btn");

  allBtns.forEach((btn) => btn.classList.remove("active-filter"));
  activeBtn.classList.add("active-filter");
}

export default renderFilterButton;
