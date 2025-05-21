import Handlebars, { log } from "handlebars";
import templateString from "../../partials/article.hbs?raw";

const template = Handlebars.compile(templateString);
const main = document.querySelector(".main");

function fullPostInfo(fullPost) {
  console.log("Rendering full post:", fullPost?.id);

  if (!fullPost) return;
  main.innerHTML = "";
  const html = template(fullPost);

  main.insertAdjacentHTML("beforeend", html);
}

export default fullPostInfo;
