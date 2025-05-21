import Handlebars from "handlebars";
import { getItemLocalStorage } from "../localStorage/localStorage";
import templateString from "../../partials/post.hbs?raw";

const searchContainer = document.querySelector(".search");

function showSearch(e) {
  e.preventDefault();
  if (
    e.target.classList.contains("search__btn") ||
    e.target.classList.contains("search__svg") ||
    e.target.tagName === "use"
  ) {
    document.querySelector(".search__form").classList.toggle("is-hidden");
  }
}

function searchPosts(e) {
  const template = Handlebars.compile(templateString);
  const postsJSON = getItemLocalStorage("posts");
  const postsList = document.querySelector(".posts__list");
  console.log(e.target.classList.contains("search__input"));

  if (e.target.classList.contains("search__input")) {
    let actualInputValue =
      e.target.value.charAt(0).toUpperCase() +
      e.target.value.slice(1).toLowerCase();

    actualInputValue.trim();

    const filteredPosts = postsJSON.filter((post) => {
      let titleFilter = post.title.includes(actualInputValue);
      let categoryFilter = post.category.includes(actualInputValue);
      let authorNameFilter = post.author.name.includes(actualInputValue);
      let authorSurnameFilter = post.author.surname.includes(actualInputValue);

      return (
        titleFilter || categoryFilter || authorNameFilter || authorSurnameFilter
      );
    });
    e.target.value = "";
    document.querySelector(".search__form").classList.add("is-hidden");
    postsList.innerHTML = "";
    postsList.insertAdjacentHTML("beforeend", template(filteredPosts));
  }
}
searchContainer.addEventListener("click", showSearch);
searchContainer.addEventListener("change", searchPosts);
export default showSearch;
