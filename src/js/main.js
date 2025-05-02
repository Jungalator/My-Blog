import templateString from "../templates/post.hbs?raw";
import Handlebars from "handlebars";
import postsJson from "../../posts.json";
import "../scss/main.scss";

const template = Handlebars.compile(templateString);
const html = template(postsJson);

document.body.insertAdjacentHTML(
  "beforeend",
  `
    <ul>
    ${html}
    </ul>
    `
);
