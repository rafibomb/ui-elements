let carousel2 = document.querySelector('.carousel-container');

if (carousel2) {
  const carouselSlideWrapper = document.querySelector(
    '.carousel-slide-wrapper'
  );
  const carouselSlides = document.querySelectorAll(
    '.carousel-slide-wrapper .carousel-slide'
  );
  const prevBtn = document.getElementById('navPrev');
  const nextBtn = document.getElementById('navNext');
  let counter = 1;
  const size = carouselSlides[0].clientWidth;

  carouselSlideWrapper.style.transform =
    'translateX(' + -size * counter + 'px)';

  nextBtn.addEventListener('click', () => {
    if (counter <= 0) return;
    carouselSlideWrapper.style.transition = 'transform 0.4s ease-in-out';
    counter++;
    carouselSlideWrapper.style.transform =
      'translateX(' + -size * counter + 'px)';
    console.log(counter);
  });

  prevBtn.addEventListener('click', () => {
    if (counter <= carouselSlides.length) return;
    carouselSlideWrapper.style.transition = 'transform 0.4s ease-in-out';
    counter--;
    carouselSlideWrapper.style.transform =
      'translateX(' + -size * counter + 'px)';
    console.log(counter);
  });
}
