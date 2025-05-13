const searchContainer = document.querySelector(".search");

function searchPosts(e) {
  if (
    e.target.classList.contains("search__btn") ||
    e.target.classList.contains("search__svg") ||
    e.target.tagName === "use"
  ) {
    document.querySelector(".search__form").classList.toggle("is-hidden");
  }
}
searchContainer.addEventListener("click", searchPosts);

export default searchPosts;
