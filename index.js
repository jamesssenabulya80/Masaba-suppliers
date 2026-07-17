document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".background-img .slide");
  let currentSlideIndex = 0;
  const slideInterval = 5000; // Change images every 5 seconds (5000ms)

  function nextSlide() {
    // Remove the 'active' class from the current slide
    slides[currentSlideIndex].classList.remove("active");

    // Move to the next index, looping back to 0 if we hit the end
    currentSlideIndex = (currentSlideIndex + 1) % slides.length;

    // Add the 'active' class to the next slide
    slides[currentSlideIndex].classList.add("active");
  }

  // Only start the cycle if slides actually exist on the page
  if (slides.length > 0) {
    setInterval(nextSlide, slideInterval);
  }
});
