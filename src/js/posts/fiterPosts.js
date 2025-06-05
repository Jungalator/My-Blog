import { getItemLocalStorage } from "../localStorage/localStorage.js";
// import addPostClickLesteners from "./renderPostArticle.js";

let listenersAttached = false;

function addFilterListeners() {
  if (listenersAttached) return; // 🔒 предотвращаем повторную инициализацию

  const postsJson = getItemLocalStorage("posts");
  const postsList = document.querySelector(".posts__list");
  const filterBtnsList = document.querySelector(".posts__filter-list");
  const filterBtns = document.querySelectorAll(".posts__filter-btn");

  if (!postsList || !filterBtnsList || !filterBtns.length) {
    console.warn("Фильтры не найдены — возможно, разметка ещё не загружена");
    return;
  }
  console.log("Кнопок фильтра найдено:", filterBtns.length);
  filterBtns[0].classList.add("active-filter");

  filterBtnsList.addEventListener("click", (e) => {
    if (!e.target.classList.contains("posts__filter-btn")) return;

    filterBtns.forEach((item) => item.classList.remove("active-filter"));
    e.target.classList.add("active-filter");

    let filteredPosts;

    if (e.target.hasAttribute("data-all-categories-btn")) {
      filteredPosts = postsJson;
    } else {
      filteredPosts = postsJson.filter((item) =>
        item.category.includes(e.target.textContent)
      );
    }

    postsList.innerHTML = template(filteredPosts);
  });

  listenersAttached = true;
}

export default addFilterListeners;
