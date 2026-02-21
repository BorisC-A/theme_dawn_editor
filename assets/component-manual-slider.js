document.addEventListener("DOMContentLoaded", function () {
  const sliders = document.querySelectorAll(".manual-slider");

  sliders.forEach(function (slider) {
    const track = slider.querySelector(".slider-track");
    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");

    let index = 0;
    const totalSlides = slides.length;

    function updateSlider() {
      track.style.transform = "translateX(-" + (index * 100) + "%)";
    }

    if (nextBtn) {
      nextBtn.addEventListener("click", function () {
        index = (index + 1) % totalSlides;
        updateSlider();
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", function () {
        index = (index - 1 + totalSlides) % totalSlides;
        updateSlider();
      });
    }

    // Autoplay
    const autoplay = slider.dataset.autoplay === "true";
    const speed = parseInt(slider.dataset.speed);

    if (autoplay && totalSlides > 1) {
      setInterval(function () {
        index = (index + 1) % totalSlides;
        updateSlider();
      }, speed);
    }
  });
});