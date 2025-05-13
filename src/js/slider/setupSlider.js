function setupSlider(slides) {
  const sliderContainer = document.querySelector(".slider__container");
  const dots = document.querySelectorAll(".slider__dot");
  let startX = 0,
    startY = 0,
    endX = 0,
    endY = 0;

  let activeSlideIndex = 0;

  const getInitSliderValue = () => {
    slides[activeSlideIndex].classList.add("active");
    dots[activeSlideIndex].classList.add("active");
  };

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
    dots.forEach((dot) => dot.classList.remove("active"));

    dots[index].classList.add("active");
  };

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      activeSlideIndex = index;

      handleChangeActiveSlide(activeSlideIndex);
      handleChangeInitActiveDots(activeSlideIndex);
    });
  });

  sliderContainer.addEventListener("touchstart", (e) => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  });

  sliderContainer.addEventListener("touchend", (e) => {
    endX = e.changedTouches[0].clientX;
    endY = e.changedTouches[0].clientY;

    handleSwipe();
  });

  function handleSwipe() {
    const diffX = endX - startX;
    const diffY = endY - startY;
    //Check horizontal move
    if (Math.abs(diffX) > Math.abs(diffY)) {
      if (Math.abs(diffX) > 50) {
        if (diffX > 0) {
          if (activeSlideIndex > 0) {
            activeSlideIndex--;
          }
        } else if (activeSlideIndex < slides.length - 1) {
          activeSlideIndex++;
        }
        handleChangeActiveSlide(activeSlideIndex);
        handleChangeInitActiveDots(activeSlideIndex);
      }
    }
  }
  getInitSliderValue();
}

export default setupSlider;
