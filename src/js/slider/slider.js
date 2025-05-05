import slides from "./renderSlides.js";
const sliderContainer = document.querySelector("[data-slider-container]");
const dots = document.querySelectorAll(".slider__dot");

let activeSlideIndex = 0;

const getInitSliderValue = () => {
  slides[activeSlideIndex].classList.add("active");
  dots[activeSlideIndex].classList.add("active");
};

getInitSliderValue();

const handleChangeActiveSlide = (index) => {
  sliderContainer.scrollTo({
    top: 0,
    left: slides[index].clientWidth * index,
    behavior: "smooth",
  });
  slides.forEach((slide) => slide.classList.remove("active"));
  slides[index].classList.add("active");
};

const handleChangeInitActiveDots = (index) => {
  for (let dot of dots) {
    dot.classList.remove("active");
  }
  dots[index].classList.add("active");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeSlideIndex = index;

    handleChangeActiveSlide(activeSlideIndex);
    handleChangeInitActiveDots(activeSlideIndex);
  });
});

export default handleChangeActiveSlide;
