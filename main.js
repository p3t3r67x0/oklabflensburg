document.addEventListener('DOMContentLoaded', function () {
  const slides = document.querySelectorAll('.carousel-slide');
  const prevButton = document.getElementById('prevBtn');
  const nextButton = document.getElementById('nextBtn');
  let slideIndex = 0;
  let intervalId;

  function showSlide(index) {
    slides.forEach(slide => {
      slide.classList.add('hidden');
    });
    slides[index].classList.remove('hidden');
  }

  function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
  }

  function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
  }

  nextButton.addEventListener('click', function () {
    nextSlide();
    resetInterval();
  });

  prevButton.addEventListener('click', function () {
    prevSlide();
    resetInterval();
  });

  function startCarousel() {
    intervalId = setInterval(nextSlide, 3000);
  }

  function resetInterval() {
    clearInterval(intervalId);
    startCarousel();
  }

  document.addEventListener('keydown', function(event) {
    const slideRect = slides[slideIndex].getBoundingClientRect();
    const isVisible = (slideRect.top >= 0) && (slideRect.bottom <= window.innerHeight);
    const isScrolled = window.scrollY > 0;

    if (!isScrolled && isVisible) {
      if (event.key === 'ArrowRight') {
        nextSlide();
        resetInterval();
      } else if (event.key === 'ArrowLeft') {
        prevSlide();
        resetInterval();
      }
    }
  });

  startCarousel();
});

