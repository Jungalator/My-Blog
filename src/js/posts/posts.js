import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import renderFilterButtons from "./renderFilterButtons.js";

const template = Handlebars.compile(templateString);

//=======================================
const renderPosts = (posts) => {
  const postsSection = document.createElement("section");
  postsSection.className = "posts";
  const newPosts = posts.slice(0, 8);

  const postsTitle = document.createElement("h3");
  postsTitle.className = "posts__title";
  postsTitle.textContent = "Popular topics";

  const html = template(newPosts);

  postsSection.insertAdjacentHTML(
    "beforeend",
    `
    <ul class="posts__list list">
    ${html}
    </ul>
    `
  );
  const filters = renderFilterButtons(newPosts);
  postsSection.prepend(postsTitle, filters);

  return postsSection;
};

export default renderPosts;

//=================================
