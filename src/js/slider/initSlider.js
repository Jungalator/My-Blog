import renderSlides from "./renderSlides.js";
import setupSlider from "./setupSlider.js";

function initSlides() {
  const slides = renderSlides();
  if (!slides || slides.length === 0) {
    console.warn("Слайды не отрисовались");
    return;
  }

  setupSlider(slides);
}
export default initSlides;
