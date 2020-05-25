let carousel = document.querySelector('.carousel-wrapper');

if (carousel) {
  let carouselImages = document.querySelectorAll('.slide');
  let prev = document.getElementById('navPrev');
  let next = document.getElementById('navNext');
  let current = 0;

  prev.addEventListener('click', function (e) {
    if (current === 0) {
      current = carouselImages.length;
    }
    slidePrev();
  });

  next.addEventListener('click', function (e) {
    if (current === carouselImages.length - 1) {
      current = -1;
    }
    slideNext();
  });

  // clear all images
  function reset() {
    for (let i = 0; i < carouselImages.length; i++) {
      carouselImages[i].style.display = 'none';
    }
  }

  // init carousel
  function startSlide() {
    reset();
    carouselImages[0].style.display = 'block';
  }

  function slidePrev() {
    reset();
    carouselImages[current - 1].style.display = 'block';
    current--;
  }

  function slideNext() {
    reset();
    carouselImages[current + 1].style.display = 'block';
    current++;
  }

  startSlide();
}
