(function () {
  const header = document.querySelector('.text-shadow-wrapper');

  if (header) {
    const text = document.querySelector('.text-shadow-wrapper .text');
    const gap = 80;

    function shadow(event) {
      const { offsetWidth: width, offsetHeight: height } = header;
      let { offsetX: x, offsetY: y } = event;

      if (this !== event.target) {
        x = x + event.target.offsetLeft;
        y = y + event.target.offsetTop;
      }
      const xGap = Math.round((x / width) * gap - gap / 2);
      const yGap = Math.round((y / height) * gap - gap / 2);
      console.log(xGap, yGap);

      text.style.textShadow = `
        ${xGap}px ${yGap}px 0 rgba(255, 0, 255, 0.5),
        ${xGap * -1}px ${yGap * -1}px 0 rgba(0, 255, 255, 0.5)
      `;
    }

    header.addEventListener('mousemove', shadow);
  }
})();
