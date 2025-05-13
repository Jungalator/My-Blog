import Handlebars, { log } from "handlebars";
import templateStringSlide from "../../partials/slider.hbs?raw";
import photoPostsJson from "../../../photo-posts.json";

const main = document.querySelector(".main");

const sliderSection = document.createElement("section");
sliderSection.className = "slider";

const sliderContainer = document.createElement("div");
sliderContainer.className = "slider__container";

const templateSlide = Handlebars.compile(templateStringSlide);
localStorage.setItem("photo-posts", JSON.stringify(photoPostsJson));

function renderSlides() {
  const slides = JSON.parse(localStorage.getItem("photo-posts"))
    .splice(0, 3)
    .reverse();
  for (let slide of slides) {
    const slideElem = templateSlide(slide);
    sliderContainer.insertAdjacentHTML(
      "afterbegin",
      `
      ${slideElem}
       `
    );
  }
  sliderSection.insertAdjacentHTML(
    "beforeend",
    `
         <div class="slider__dots">
          <span class="slider__dot"></span>
          <span class="slider__dot"></span>
          <span class="slider__dot"></span>
        </div>
    `
  );

  main.prepend(sliderSection);
  sliderSection.append(sliderContainer);
  return document.querySelectorAll("[data-slide-elem]");
}

export default renderSlides;
