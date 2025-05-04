import Handlebars, { log } from "handlebars";
import templateStringSlide from "../../partials/slider.hbs?raw";
import picsPostJson from "../../../photo-posts.json";

const templateSlide = Handlebars.compile(templateStringSlide);

const sliderContainer = document.querySelector("[data-slider-container]");
const slides = picsPostJson.splice(0, 3);

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
