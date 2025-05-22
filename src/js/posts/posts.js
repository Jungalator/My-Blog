import { v4 as uuidv4 } from "uuid";
import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import postsJson from "../../../posts.json";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../localStorage/localStorage.js";
import renderFilterButtons from "./renderFilterButtons.js";
import addFilterListeners from "./fiterPosts.js";

const template = Handlebars.compile(templateString);
// const postsArr = postsJson.map((post) => ({
//   ...post,
//   id: uuidv4(),
// }));

//=======================================
const renderPosts = (posts) => {
  // setItemLocalStorage("posts", postsArr);
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
