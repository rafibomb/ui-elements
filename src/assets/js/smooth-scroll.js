(function () {
  let triggers = document.querySelectorAll('.scroll-trigger');

  if (triggers) {
    triggers.forEach((trigger, index) => {
      trigger.addEventListener('click', () => {
        smoothScroll('.destination', 1000);
      });
    });

    function smoothScroll(target, duration) {
      let destination = document.querySelector(target);
      let destinationPosition = destination.getBoundingClientRect().top;
      let startPosition = window.pageYOffset;
      let distance = destinationPosition - startPosition;
      let startTime = null;

      function animateScroll(currentTime) {
        if (startTime === null) startTime = currentTime;
        let timeElapsed = currentTime - startTime;
        let run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);

        if (timeElapsed < duration) requestAnimationFrame(animateScroll);
      }

      function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return (c / 2) * t * t + b;
        t--;
        return (-c / 2) * (t * (t - 2) - 1) + b;
      }

      requestAnimationFrame(animateScroll);
    }
  }
})();
