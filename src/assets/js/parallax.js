(function () {
  const parallax = document.querySelector('[data-parallax]');

  if (parallax) {
    window.addEventListener('scroll', function (e) {
      const target = document.querySelectorAll('.scroll');

      for (let i = 0; i < target.length; i++) {
        let pos = window.pageYOffset * target[i].dataset.rate;

        if (target[i].dataset.direction === 'horizontal') {
          target[i].style.transform = 'translate3d(' + pos + 'px, 0px, 0px)';
        } else if (target[i].dataset.direction === 'diagonal') {
          let posX = window.pageYOffset * target[i].dataset.ratex;
          let posY = window.pageYOffset * target[i].dataset.ratey;
          target[i].style.transform =
            'translate3d(' + posX + 'px, ' + posY + 'px, 0px)';
        } else {
          target[i].style.transform = 'translate3d(0px, ' + pos + 'px, 0px)';
        }
      }
    });
  }
})();
