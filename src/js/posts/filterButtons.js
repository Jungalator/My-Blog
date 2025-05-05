import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import postsJson from "../../../posts.json";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../localStorage/localStorage.js";
const postsSection = document.querySelector(".posts");

const filterButtonsContainer = document.createElement("div");
filterButtonsContainer.className = "posts__filter-container";

const filterButtonsList = document.createElement("ul");
filterButtonsList.className = "posts__filter-list";
filterButtonsList.classList.add("list");

const postsArr = [];
postsArr.push(...postsJson);

function renderFilterButton() {
  let newArr = [...new Set(postsArr.flatMap((element) => element.category))];
  newArr.push("All");
  newArr.forEach((item) => {
    filterButtonsList.insertAdjacentHTML(
      "afterbegin",
      `
        <li><button>${item}</button></li>
        `
    );
  });

  filterButtonsContainer.append(filterButtonsList);

  return postsSection.append(filterButtonsContainer);
}

export default renderFilterButton();
