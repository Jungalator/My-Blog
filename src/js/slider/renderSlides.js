import Handlebars, { log } from "handlebars";
import templateStringSlide from "../../partials/slider.hbs?raw";
import photoPostsJson from "../../../photo-posts.json";

const templateSlide = Handlebars.compile(templateStringSlide);
localStorage.setItem("photo-posts", JSON.stringify(photoPostsJson));

const sliderContainer = document.querySelector("[data-slider-container]");
const slides = JSON.parse(localStorage.getItem("photo-posts"))
  .splice(0, 3)
  .reverse();

const renderSlides = () => {
  for (let slide of slides) {
    const slideElem = templateSlide(slide);
    sliderContainer.insertAdjacentHTML(
      "afterbegin",
      `
       ${slideElem}
       `
    );
  }
  return sliderContainer.querySelectorAll("[data-slide-elem]");
};

export default renderSlides();
