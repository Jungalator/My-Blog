import templateString from "../../partials/post.hbs?raw";
import Handlebars, { log } from "handlebars";
import postsJson from "../../../posts.json";
import {
  getItemLocalStorage,
  setItemLocalStorage,
} from "../localStorage/localStorage.js";

const renderPosts = () => {
  const template = Handlebars.compile(templateString);

  setItemLocalStorage("posts", postsJson);
  const html = template(getItemLocalStorage("posts"));

  return document.body.insertAdjacentHTML(
    "beforeend",
    `
    <ul>
    ${html}
    </ul>
    `
  );
};
export default renderPosts();
