import slides from "./renderSlides.js";

const dots = document.querySelectorAll(".slider__dot");

let activeSlideIndex = 0;

const getInitSliderValue = () => {
  slides[activeSlideIndex].classList.add("active");
  dots[activeSlideIndex].classList.add("active");
};

getInitSliderValue();

const handleChangeActiveSlide = (index) => {
  // const slideWidth = slides.firstChild.clientWidth;

  for (let slide of slides) {
    if (slide.classList.contains("active")) {
      slide.classList.remove("active");
    }
  }

  slides[index].classList.add("active");
};

const handleChangeInitActiveDots = (index) => {
  for (let dot of dots) {
    if (dot.classList.contains("active")) {
      dot.classList.remove("active");
    }
  }
  dots[index].classList.add("active");
};

dots.forEach((dot, index) => {
  dot.addEventListener("click", () => {
    activeSlideIndex = index;
    // slides[activeSlideIndex].style.translate = `-${
    //   slides[activeSlideIndex].clientWidth * index + 1
    // }px`;
    console.log(slides[activeSlideIndex]);

    handleChangeActiveSlide(activeSlideIndex);
    handleChangeInitActiveDots(activeSlideIndex);
  });
});

export default handleChangeActiveSlide(activeSlideIndex);
