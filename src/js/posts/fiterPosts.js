import templateString from "../../partials/post.hbs?raw";
import Handlebars from "handlebars";
import { getItemLocalStorage } from "../localStorage/localStorage.js";

const postsJson = getItemLocalStorage("posts");
const postsList = document.querySelector(".posts__list");

const filterBtnsList = document.querySelector(".posts__filter-list");
const filterBtns = document.querySelectorAll(".posts__filter-btn");

const allCategoriesBtn = document.querySelector("[data-all-categories-btn]");

const template = Handlebars.compile(templateString);
console.log(filterBtns);

filterBtns[0].classList.add("active-filter");

function filterPosts(e) {
  if (e.target.classList.contains("posts__filter-btn")) {
    filterBtns.forEach((item) => item.classList.remove("active-filter"));
    e.target.classList.add("active-filter");

    const filteredPosts = postsJson
      .filter((item) => item.category.includes(e.target.textContent))
      .map((item) => item);

    const html = template(filteredPosts);
    postsList.innerHTML = "";

    postsList.insertAdjacentHTML("beforeend", `${html}`);

    if (allCategoriesBtn.classList.contains("active-filter")) {
      postsList.innerHTML = "";

      postsList.insertAdjacentHTML(
        "beforeend",
        `${template(getItemLocalStorage("posts"))}`
      );
    }
  }
}
filterBtnsList.addEventListener("click", filterPosts);
export default filterPosts;
