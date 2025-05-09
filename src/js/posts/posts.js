import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import postsJson from "../../../posts.json";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../localStorage/localStorage.js";
import renderFilterButtons from "./renderFilterButtons.js";

const template = Handlebars.compile(templateString);
const postsArr = [];
postsArr.push(...postsJson);
const posts = document.querySelector(".posts");

//=======================================
const renderPosts = () => {
  setItemLocalStorage("posts", postsArr);
  const html = template(getItemLocalStorage("posts"));

  posts.insertAdjacentHTML(
    "beforeend",
    `
    <ul class="posts__list list">
    ${html}
    </ul>
    `
  );
};
export default renderPosts();

//=================================
